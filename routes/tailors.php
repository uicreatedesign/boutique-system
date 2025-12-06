<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/tailors', function () {
        return Inertia::render('tailors/index');
    })->name('tailors.index');
});
