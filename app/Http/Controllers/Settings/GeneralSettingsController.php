<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\GeneralSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneralSettingsController extends Controller
{
    public function show()
    {
        $settings = GeneralSetting::getAll();
        
        return response()->json($settings);
    }

    public function edit()
    {
        return Inertia::render('settings/general');
    }

    public function update(Request $request)
    {
        $request->validate([
            'app_name' => 'required|string|max:255',
            'currency' => 'required|string|max:10',
            'currency_symbol' => 'required|string|max:5',
            'tax_rate' => 'required|numeric|min:0|max:100',
            'order_prefix' => 'required|string|max:10',
            'default_delivery_days' => 'required|integer|min:1|max:365',
            'business_name' => 'required|string|max:255',
            'business_address' => 'nullable|string|max:500',
            'business_phone' => 'nullable|string|max:20',
            'business_email' => 'nullable|email|max:255',
            'timezone' => 'required|string|max:50',
        ]);

        foreach ($request->all() as $key => $value) {
            GeneralSetting::set($key, $value);
        }

        return response()->json(['message' => 'Settings updated successfully']);
    }
}