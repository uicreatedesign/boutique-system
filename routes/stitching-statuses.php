<?php

use App\Http\Controllers\StitchingStatusController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
    Route::get('/stitching-statuses', [StitchingStatusController::class, 'index'])->name('stitching-statuses.index');
    Route::post('/stitching-statuses', [StitchingStatusController::class, 'store'])->name('stitching-statuses.store');
    Route::put('/stitching-statuses/{stitchingStatus}', [StitchingStatusController::class, 'update'])->name('stitching-statuses.update');
    Route::post('/stitching-statuses/reorder', [StitchingStatusController::class, 'reorder'])->name('stitching-statuses.reorder');
    Route::delete('/stitching-statuses/{stitchingStatus}', [StitchingStatusController::class, 'destroy'])->name('stitching-statuses.destroy');
});
