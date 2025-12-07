<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/measurement-settings', function () {
        return Inertia::render('measurement-settings/index');
    })->name('measurement-settings.index');
});
