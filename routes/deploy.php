<?php

use Illuminate\Support\Facades\Route;

Route::get('/deploy', function () {
    if (!app()->isProduction()) {
        return response()->json(['error' => 'This route is only available in production'], 403);
    }
    
    $commands = [
        'config:clear',
        'config:cache',
        'route:clear',
        'route:cache',
        'view:clear',
        'view:cache',
        'optimize',
    ];
    
    foreach ($commands as $command) {
        \Artisan::call($command);
    }
    
    return response()->json(['message' => 'Deployment commands executed successfully']);
})->name('deploy');
