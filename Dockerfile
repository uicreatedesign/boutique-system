# -------------------------------------------------------
# FRONTEND BUILDER (Vite + React)
# -------------------------------------------------------
FROM node:20-alpine AS frontend-builder

WORKDIR /app

# Copy package files for caching
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY components.json ./

# Install dependencies (use legacy peer deps for stability)
RUN npm ci --legacy-peer-deps

# Copy source
COPY resources/ ./resources/
COPY public/ ./public/

# Build frontend
RUN npm run build


# -------------------------------------------------------
# BACKEND (PHP 8.3 + FPM + NGINX + SUPERVISOR)
# -------------------------------------------------------
FROM php:8.3-fpm-alpine

# -------------------------------------------------------
# Install system dependencies
# -------------------------------------------------------
RUN apk add --no-cache \
    nginx \
    supervisor \
    mysql-client \
    zip unzip git curl \
    libpng-dev libjpeg-turbo-dev freetype-dev \
    libzip-dev icu-dev oniguruma-dev autoconf make g++


# -------------------------------------------------------
# Install PHP Extensions (GD requires Alpine paths)
# -------------------------------------------------------
RUN docker-php-ext-configure gd \
    --with-freetype=/usr/include/ \
    --with-jpeg=/usr/include/

RUN docker-php-ext-install -j$(nproc) \
    pdo_mysql mysqli \
    gd zip intl mbstring opcache


# -------------------------------------------------------
# Composer
# -------------------------------------------------------
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer


# -------------------------------------------------------
# App Setup
# -------------------------------------------------------
WORKDIR /var/www/html

# Copy application
COPY . .

# Copy build assets from frontend container
COPY --from=frontend-builder /app/public/build ./public/build


# -------------------------------------------------------
# Install PHP Dependencies
# -------------------------------------------------------
RUN composer install --no-dev --optimize-autoloader --no-interaction


# -------------------------------------------------------
# Permissions
# -------------------------------------------------------
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 storage \
    && chmod -R 775 bootstrap/cache


# -------------------------------------------------------
# Copy configuration files
# -------------------------------------------------------
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/php.ini /usr/local/etc/php/conf.d/custom.ini
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY docker/start.sh /start.sh

RUN chmod +x /start.sh \
    && mkdir -p /run/nginx \
    && mkdir -p /var/log/supervisor


EXPOSE 80

CMD ["/start.sh"]
