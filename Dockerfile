# -------------------------------------------------------
# FRONTEND BUILDER (Vite + React)
# Debian image required for Wayfinder
# -------------------------------------------------------
FROM node:20-bullseye AS frontend-builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY vite.config.docker.ts ./
COPY components.json ./

RUN npm ci --legacy-peer-deps

COPY resources/ ./resources/
COPY public/ ./public/

RUN npx vite build --config vite.config.docker.ts



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
    postgresql-client \
    postgresql-dev \
    zip unzip git curl \
    libpng-dev libjpeg-turbo-dev freetype-dev \
    libzip-dev icu-dev oniguruma-dev autoconf make g++ \
    php83-dev


# -------------------------------------------------------
# Install PHP Extensions (GD requires Alpine paths)
# -------------------------------------------------------
RUN docker-php-ext-configure gd \
    --with-freetype=/usr/include/ \
    --with-jpeg=/usr/include/

RUN docker-php-ext-install -j$(nproc) \
    pdo_mysql pdo_pgsql mysqli \
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
