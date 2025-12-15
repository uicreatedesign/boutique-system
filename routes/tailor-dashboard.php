<?php

use App\Http\Controllers\TailorDashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'tailor'])->group(function () {
    Route::get('/tailor-dashboard', [TailorDashboardController::class, 'index'])->name('tailor.dashboard');
});
