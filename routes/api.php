<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\TailorController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MeasurementCategoryController;
use App\Http\Controllers\MeasurementFieldController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware(['web', 'auth'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('customers', CustomerController::class);
    Route::get('customers/{customer}/orders', [CustomerController::class, 'orders']);
    Route::post('customers/register', [\App\Http\Controllers\Api\CustomerRegistrationController::class, 'store']);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('permissions', PermissionController::class);
    Route::apiResource('tailors', TailorController::class);
    Route::apiResource('users', UserController::class);
    Route::get('roles-list', [UserController::class, 'roles']);
    Route::apiResource('measurement-categories', MeasurementCategoryController::class);
    Route::apiResource('measurement-fields', MeasurementFieldController::class);
});