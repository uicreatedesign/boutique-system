<?php

use App\Http\Controllers\Settings\GeneralSettingsController;
use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\SmtpController;
use App\Http\Controllers\Settings\TwoFactorAuthenticationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::get('settings', function () {
        $user = auth()->user();
        
        // Redirect customers to profile if they can't access general settings
        if ($user->isCustomer() && !$user->hasPermission('manage_general_settings')) {
            if ($user->hasPermission('access_profile_settings')) {
                return redirect('/settings/profile');
            }
            if ($user->hasPermission('change_own_password')) {
                return redirect('/settings/password');
            }
            abort(403, 'Access denied');
        }
        
        return redirect('/settings/general');
    });

    Route::get('settings/general', [GeneralSettingsController::class, 'edit'])->name('general.edit')->middleware('permission:manage_general_settings');
    Route::get('api/settings/general', [GeneralSettingsController::class, 'show'])->name('general.show')->middleware('permission:manage_general_settings');
    Route::put('api/settings/general', [GeneralSettingsController::class, 'update'])->name('general.update')->middleware('permission:manage_general_settings');

    Route::middleware('permission:access_profile_settings')->group(function () {
        Route::get('settings/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('settings/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('settings/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        Route::delete('settings/profile/avatar', [ProfileController::class, 'removeAvatar'])->name('profile.avatar.remove');
    });

    Route::middleware('permission:change_own_password')->group(function () {
        Route::get('settings/password', [PasswordController::class, 'edit'])->name('user-password.edit');
        Route::put('settings/password', [PasswordController::class, 'update'])
            ->middleware('throttle:6,1')
            ->name('user-password.update');
    });

    Route::middleware('permission:manage_appearance_settings')->group(function () {
        Route::get('settings/appearance', function () {
            return Inertia::render('settings/appearance');
        })->name('appearance.edit');
    });

    Route::middleware('permission:manage_own_2fa')->group(function () {
        Route::get('settings/two-factor', [TwoFactorAuthenticationController::class, 'show'])
            ->name('two-factor.show');
    });

    Route::middleware('permission:manage_smtp_settings')->group(function () {
        Route::get('settings/smtp', function () {
            return Inertia::render('settings/smtp');
        })->name('smtp.edit');
        Route::get('api/settings/smtp', [SmtpController::class, 'show'])->name('smtp.show');
        Route::put('api/settings/smtp', [SmtpController::class, 'update'])->name('smtp.update');
        Route::post('api/settings/smtp/test', [SmtpController::class, 'testEmail'])->name('smtp.test');
    });
    
    Route::middleware('permission:manage_backup_settings')->group(function () {
        Route::get('settings/backup', [\App\Http\Controllers\Settings\BackupController::class, 'index'])->name('backup.index');
        Route::get('api/settings/backup/create', [\App\Http\Controllers\Settings\BackupController::class, 'create'])->name('backup.create');
        Route::get('api/settings/backup/download/{id}', [\App\Http\Controllers\Settings\BackupController::class, 'download'])->name('backup.download');
        Route::put('api/settings/backup/settings', [\App\Http\Controllers\Settings\BackupController::class, 'updateSettings'])->name('backup.settings.update');
    });
    
    Route::middleware('permission:view_own_notifications')->group(function () {
        Route::get('settings/notifications', [\App\Http\Controllers\Settings\NotificationController::class, 'index'])->name('notifications.index');
        Route::put('api/settings/notifications', [\App\Http\Controllers\Settings\NotificationController::class, 'update'])->name('notifications.update');
    });
});
