# Boutique Management System

## Introduction

A comprehensive boutique management system built with Laravel 11 and React 19 using [Inertia.js](https://inertiajs.com). Features include customer management, tailor management, user roles & permissions, and a modern responsive UI.

## Tech Stack

- **Backend**: Laravel 11, PHP 8.2+
- **Frontend**: React 19, TypeScript, Inertia.js
- **UI**: Tailwind CSS, shadcn/ui, Radix UI
- **Database**: MySQL
- **Authentication**: Laravel Fortify

## Features

- 📊 **Dashboard Analytics** - Revenue tracking, order statistics, performance metrics
- 👥 **Customer Management** - CRUD, search, filtering, order history
- 🛍️ **Order Management** - Complete order lifecycle, payments, PDF invoices
- ✂️ **Tailor Management** - Skills, rates, specializations, performance tracking
- 📏 **Measurements** - Dynamic measurement fields, categories, customer measurements
- 👔 **Garment Types** - Manage stitching items (Shirt, Pant, Kurti, etc.)
- 🧵 **Fabrics & Materials** - Inventory management with stock tracking
- 📋 **Stitching Status** - Customizable workflow statuses with color coding
- 💰 **Payment Tracking** - Multiple payment methods, balance calculations
- 🔐 **Role-based Access Control** - Dynamic roles & permissions
- 📧 **Email Notifications** - Password reset, order updates
- 🎨 **Modern Responsive UI** - Tailwind CSS, shadcn/ui components
- 🔍 **Advanced Search & Filtering** - Across all modules

## Installation

### Prerequisites
- PHP 8.2 or higher
- Composer
- Node.js 18+ and npm
- MySQL database

### Setup Commands

```bash
# Clone repository
git clone <repository-url>
cd boutique-system

# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database in .env file
# DB_DATABASE=boutique
# DB_USERNAME=root
# DB_PASSWORD=

# Run migrations and seeders
php artisan migrate --seed
php artisan db:seed --class=StitchingStatusSeeder

# Build frontend assets
npm run build

# Start development servers
php artisan serve
npm run dev
```

## Database Migration Commands

```bash
# Run all migrations
php artisan migrate

# Run migrations with seeders
php artisan migrate --seed

# Rollback last migration
php artisan migrate:rollback

# Reset and re-run all migrations
php artisan migrate:fresh --seed

# Check migration status
php artisan migrate:status
```

## Deployment Commands

### Production Deployment

```bash
# Install dependencies (production)
composer install --no-dev --optimize-autoloader
npm ci --production

# Build assets for production
npm run build

# Optimize Laravel
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# Run migrations
php artisan migrate --force

# Set proper permissions
chmod -R 755 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

### Clear Caches (if needed)

```bash
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan cache:clear
```

## Environment Configuration

### Required .env Variables

```env
APP_NAME=BoutiqueSystem
APP_ENV=production
APP_KEY=base64:...
APP_DEBUG=false
APP_URL=https://yourdomain.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=boutique
DB_USERNAME=your_username
DB_PASSWORD=your_password

# For email functionality
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD="your-app-password"
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@gmail.com
MAIL_FROM_NAME="${APP_NAME}"
```

## Default Users

After running seeders:

- **Admin**: admin@boutique.com / password (Full access)
- **Manager**: manager@boutique.com / password (Limited access)
- **Tailor**: tailor@boutique.com / password (Tailor dashboard)

## Modules Overview

### Core Modules
1. **Dashboard** - Analytics, revenue tracking, order statistics
2. **Customers** - Customer database with order history
3. **Orders** - Order management with payments and invoices
4. **Tailors** - Tailor management with performance metrics
5. **Measurements** - Customer measurements with dynamic fields
6. **Garment Types** - Stitching item categories
7. **Fabrics & Materials** - Fabric inventory management
8. **Stitching Statuses** - Customizable order workflow
9. **Users** - User management
10. **Roles & Permissions** - Access control management

### Key Features by Module

**Orders:**
- Auto-generated order numbers (ORD-YYYYMMDD-0001)
- Customer, tailor, garment type, measurement linking
- Fabric selection or customer-provided option
- Priority levels (normal/urgent)
- Payment tracking with multiple methods
- Balance due calculations
- PDF invoice generation
- Status tracking through workflow

**Dashboard:**
- Today/Month/Year revenue statistics
- Order status distribution
- Pending payments alerts
- Upcoming deliveries (7 days)
- Recent orders list
- Top customers by order count
- Tailor performance metrics
- Monthly revenue trend chart

**Measurements:**
- Dynamic measurement categories
- Custom measurement fields
- Customer-specific measurements
- Measurement history

**Fabrics:**
- Stock quantity tracking
- Price per unit (meter/yard/piece)
- Status management (available/out of stock/discontinued)
- Customer fabric option in orders

**Stitching Statuses:**
- Customizable workflow stages
- Color-coded statuses
- Default statuses: Pending, Cutting, Stitching, Finishing, Ironing, Ready for Trial, Delivered, Cancelled
- Drag-and-drop ordering

## Development

```bash
# Start development servers
php artisan serve
npm run dev

# Run tests
php artisan test

# Generate test data
php artisan db:seed --class=CustomerSeeder
php artisan db:seed --class=TailorSeeder
php artisan db:seed --class=StitchingStatusSeeder
php artisan db:seed --class=RolePermissionSeeder
```

## License

This boutique management system is open-sourced software licensed under the MIT license.
