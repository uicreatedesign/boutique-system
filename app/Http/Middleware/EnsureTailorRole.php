<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureTailorRole
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->user()->isTailor() || !auth()->user()->hasPermission('access_tailor_dashboard')) {
            abort(403, 'Access denied. Tailor role required.');
        }

        return $next($request);
    }
}