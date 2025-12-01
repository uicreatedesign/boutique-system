<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('web')->group(function () {
    Route::apiResource('customers', CustomerController::class);
    Route::get('customers/{customer}/orders', [CustomerController::class, 'orders']);
});