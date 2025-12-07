<?php

use App\Http\Controllers\MeasurementController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('measurements', MeasurementController::class);
});