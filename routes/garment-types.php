<?php

use App\Http\Controllers\GarmentTypeController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
    Route::get('/garment-types', [GarmentTypeController::class, 'index'])->name('garment-types.index');
    Route::post('/garment-types', [GarmentTypeController::class, 'store'])->name('garment-types.store');
    Route::put('/garment-types/{garmentType}', [GarmentTypeController::class, 'update'])->name('garment-types.update');
    Route::delete('/garment-types/{garmentType}', [GarmentTypeController::class, 'destroy'])->name('garment-types.destroy');
});
