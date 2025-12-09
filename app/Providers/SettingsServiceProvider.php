<?php

namespace App\Providers;

use App\Services\SettingsService;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class SettingsServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        // Share settings with all Inertia responses
        Inertia::share([
            'appSettings' => function () {
                return [
                    'app_name' => SettingsService::getAppName(),
                    'currency' => SettingsService::getCurrency(),
                    'currency_symbol' => SettingsService::getCurrencySymbol(),
                    'business_name' => SettingsService::getBusinessName(),
                ];
            },
        ]);

        // Set app name dynamically
        config(['app.name' => SettingsService::getAppName()]);
    }
}