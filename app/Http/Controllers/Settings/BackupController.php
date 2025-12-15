<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Backup;
use App\Models\BackupSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BackupController extends Controller
{
    public function index()
    {
        $backups = Backup::latest()->get()->map(function($backup) {
            return [
                'id' => $backup->id,
                'filename' => $backup->filename,
                'date' => $backup->created_at->format('Y-m-d H:i:s'),
                'size' => $this->formatBytes($backup->size),
                'status' => $backup->status,
                'type' => $backup->type,
            ];
        });

        $settings = BackupSetting::first();

        return Inertia::render('settings/backup', [
            'backups' => $backups,
            'settings' => $settings,
        ]);
    }

    public function create()
    {
        try {
            $database = config('database.connections.mysql.database');
            $filename = 'backup-' . date('Y-m-d-His') . '.sql';
            $backupPath = storage_path('app/backups');
            
            if (!file_exists($backupPath)) {
                mkdir($backupPath, 0755, true);
            }
            
            $filePath = $backupPath . '/' . $filename;
            
            // Get all tables
            $tables = DB::select('SHOW TABLES');
            $tableKey = 'Tables_in_' . $database;
            
            $sql = "-- Database Backup\n";
            $sql .= "-- Generated: " . date('Y-m-d H:i:s') . "\n\n";
            $sql .= "SET FOREIGN_KEY_CHECKS=0;\n\n";
            
            foreach ($tables as $table) {
                $tableName = $table->$tableKey;
                
                // Get table structure
                $createTable = DB::select("SHOW CREATE TABLE `{$tableName}`");
                $sql .= "DROP TABLE IF EXISTS `{$tableName}`;\n";
                $sql .= $createTable[0]->{'Create Table'} . ";\n\n";
                
                // Get table data
                $rows = DB::table($tableName)->get();
                
                if ($rows->count() > 0) {
                    foreach ($rows as $row) {
                        $values = [];
                        foreach ((array)$row as $value) {
                            if ($value === null) {
                                $values[] = 'NULL';
                            } else {
                                $values[] = "'" . addslashes($value) . "'";
                            }
                        }
                        $sql .= "INSERT INTO `{$tableName}` VALUES (" . implode(', ', $values) . ");\n";
                    }
                    $sql .= "\n";
                }
            }
            
            $sql .= "SET FOREIGN_KEY_CHECKS=1;\n";
            
            file_put_contents($filePath, $sql);
            
            // Save backup record
            Backup::create([
                'filename' => $filename,
                'path' => $filePath,
                'size' => filesize($filePath),
                'type' => 'manual',
                'status' => 'completed',
            ]);
            
            return response()->download($filePath, $filename);
            
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function download($id)
    {
        $backup = Backup::findOrFail($id);
        
        if (file_exists($backup->path)) {
            return response()->download($backup->path, $backup->filename);
        }
        
        return back()->with('error', 'Backup file not found');
    }

    public function updateSettings(Request $request)
    {
        $validated = $request->validate([
            'auto_backup_enabled' => 'required|boolean',
            'retention_days' => 'required|integer|min:1|max:365',
        ]);

        $settings = BackupSetting::first();
        $settings->update($validated);

        return back()->with('success', 'Backup settings updated successfully');
    }

    private function formatBytes($bytes, $precision = 2)
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];
        
        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, $precision) . ' ' . $units[$i];
    }
}
