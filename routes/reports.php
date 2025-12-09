<?php

use App\Http\Controllers\ReportController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
    Route::get('/reports', [ReportController::class, 'index'])->name('reports.index');
    Route::get('/reports/sales', [ReportController::class, 'sales'])->name('reports.sales');
    Route::get('/reports/tailor-performance', [ReportController::class, 'tailorPerformance'])->name('reports.tailor-performance');
    Route::get('/reports/customers', [ReportController::class, 'customerReport'])->name('reports.customers');
    Route::get('/reports/inventory', [ReportController::class, 'inventoryReport'])->name('reports.inventory');
    Route::get('/reports/export/sales', [ReportController::class, 'exportSales'])->name('reports.export.sales');
});
