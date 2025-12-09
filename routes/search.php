<?php

use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/search', [SearchController::class, 'index'])->name('search.index');
    Route::get('/api/search', [SearchController::class, 'search'])->name('search.api');
    Route::post('/api/search/save', [SearchController::class, 'saveSearch'])->name('search.save');
    Route::get('/api/search/saved', [SearchController::class, 'getSavedSearches'])->name('search.saved');
    Route::get('/api/search/history', [SearchController::class, 'getSearchHistory'])->name('search.history');
});