<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Illuminate\Http\JsonResponse;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        $user = auth()->user();
        
        // Redirect based on user role
        if ($user->isCustomer()) {
            return $request->wantsJson()
                ? new JsonResponse('', 200)
                : redirect()->intended('/customer-dashboard');
        }
        
        if ($user->isTailor()) {
            return $request->wantsJson()
                ? new JsonResponse('', 200)
                : redirect()->intended('/tailor-dashboard');
        }
        
        // Default redirect for admin/manager/viewer
        return $request->wantsJson()
            ? new JsonResponse('', 200)
            : redirect()->intended('/dashboard');
    }
}