<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/customers', function () {
        return Inertia::render('customers/index');
    })->name('customers.index');
});