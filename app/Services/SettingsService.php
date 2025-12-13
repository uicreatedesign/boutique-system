<?php

namespace App\Services;

use App\Models\GeneralSetting;

class SettingsService
{
    public static function get(string $key, $default = null)
    {
        return GeneralSetting::get($key, $default);
    }

    public static function getCurrency(): string
    {
        return static::get('currency', 'USD');
    }

    public static function getCurrencySymbol(): string
    {
        return static::get('currency_symbol', '$');
    }

    public static function getAppName(): string
    {
        return static::get('app_name', 'Boutique System');
    }

    public static function getBusinessName(): string
    {
        return static::get('business_name', 'My Boutique');
    }

    public static function getOrderPrefix(): string
    {
        return static::get('order_prefix', 'ORD');
    }

    public static function getTaxRate(): float
    {
        return (float) static::get('tax_rate', 0);
    }

    public static function getDefaultDeliveryDays(): int
    {
        return (int) static::get('default_delivery_days', 7);
    }

    public static function formatCurrency(float $amount): string
    {
        $symbol = static::getCurrencySymbol();
        $formatted = number_format($amount, 2);
        return $symbol . ' ' . $formatted;
    }

    public static function getBusinessInfo(): array
    {
        return [
            'name' => static::getBusinessName(),
            'address' => static::get('business_address', ''),
            'phone' => static::get('business_phone', ''),
            'email' => static::get('business_email', ''),
        ];
    }
}