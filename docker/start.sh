#!/bin/sh

# Wait for database to be ready
echo "Waiting for database connection..."
until php artisan migrate --force; do
  echo "Database not ready, waiting..."
  sleep 5
done

# Run migrations and optimizations
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Start supervisor
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf