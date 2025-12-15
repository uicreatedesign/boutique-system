<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureCustomerRole
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->user()->isCustomer()) {
            abort(403, 'Access denied. Customer role required.');
        }

        return $next($request);
    }
}