<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/roles', function () {
        return Inertia::render('roles/index');
    })->name('roles.index');
});
