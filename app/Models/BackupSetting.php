<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BackupSetting extends Model
{
    protected $fillable = ['auto_backup_enabled', 'retention_days', 'backup_time'];

    protected $casts = [
        'auto_backup_enabled' => 'boolean',
    ];
}
