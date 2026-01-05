<?php

namespace App\Providers;

use App\Models\Order;
use App\Models\OrderPayment;
use App\Models\Fabric;
use App\Observers\OrderObserver;
use App\Observers\OrderPaymentObserver;
use App\Observers\FabricObserver;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Order::observe(OrderObserver::class);
        OrderPayment::observe(OrderPaymentObserver::class);
        Fabric::observe(FabricObserver::class);
        
        Gate::before(function ($user, $ability) {
            foreach ($user->roles as $role) {
                if ($role->permissions->contains('name', $ability)) {
                    return true;
                }
            }
        });
    }
}
