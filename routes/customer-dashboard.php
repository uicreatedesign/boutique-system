<?php

use App\Http\Controllers\CustomerDashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'customer'])->group(function () {
    Route::get('/customer-dashboard', [CustomerDashboardController::class, 'index'])->name('customer-dashboard.index');
    Route::get('/customer-dashboard/orders/{id}', [CustomerDashboardController::class, 'showOrder'])->name('customer-dashboard.orders.show');
    Route::get('/customer-dashboard/orders/{id}/invoice', [CustomerDashboardController::class, 'downloadInvoice'])->name('customer-dashboard.orders.invoice');
});
