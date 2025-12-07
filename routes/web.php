<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [\App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/customers.php';
require __DIR__.'/roles.php';
require __DIR__.'/tailors.php';
require __DIR__.'/tailor-dashboard.php';
require __DIR__.'/measurement-settings.php';
require __DIR__.'/users.php';
require __DIR__.'/measurements.php';
require __DIR__.'/garment-types.php';
require __DIR__.'/fabrics.php';
require __DIR__.'/stitching-statuses.php';
require __DIR__.'/orders.php';
