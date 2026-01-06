<?php

use Illuminate\Support\Facades\Route;

Route::get('/deploy', function () {
    $commands = [
        'config:clear',
        'config:cache',
        'view:clear',
        'view:cache',
        'optimize',
    ];
    
    foreach ($commands as $command) {
        \Artisan::call($command);
    }
    
    return response()->json(['message' => 'Deployment commands executed successfully']);
})->name('deploy');
