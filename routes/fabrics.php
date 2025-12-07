<?php

use App\Http\Controllers\FabricController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
    Route::get('/fabrics', [FabricController::class, 'index'])->name('fabrics.index');
    Route::post('/fabrics', [FabricController::class, 'store'])->name('fabrics.store');
    Route::put('/fabrics/{fabric}', [FabricController::class, 'update'])->name('fabrics.update');
    Route::delete('/fabrics/{fabric}', [FabricController::class, 'destroy'])->name('fabrics.destroy');
});
