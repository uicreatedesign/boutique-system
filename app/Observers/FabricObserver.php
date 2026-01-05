<?php

namespace App\Observers;

use App\Models\Fabric;
use App\Services\NotificationService;

class FabricObserver
{
    public function updated(Fabric $fabric): void
    {
        if ($fabric->isDirty('stock_quantity')) {
            $lowStockThreshold = 10; // You can make this configurable
            
            if ($fabric->stock_quantity <= $lowStockThreshold && $fabric->stock_quantity > 0) {
                NotificationService::lowStock($fabric);
            }
        }
    }
}