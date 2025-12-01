#!/bin/sh

# Laravel optimizations
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations if database is available (non-blocking)
if php artisan migrate --force 2>/dev/null; then
    echo "Migrations completed successfully"
else
    echo "Database not available or migrations failed - continuing without database"
fi

# Start supervisor
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf