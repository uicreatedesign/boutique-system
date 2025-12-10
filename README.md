# Boutique Management System

A comprehensive boutique and tailoring management system built with **Laravel 12**, **React 19**, and **Inertia.js**. Manage customers, tailors, orders, payments, inventory, and role-based access—all from an intuitive web application.

## Overview

The Boutique Management System is designed for tailoring businesses to streamline order management, tailor assignments, customer measurements, and payment tracking. It provides real-time analytics, automated notifications, and a modern responsive interface.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Laravel 12, PHP 8.2+, MySQL |
| **Frontend** | React 19, TypeScript, Inertia.js 2.1+ |
| **UI Library** | shadcn/ui, Radix UI, Tailwind CSS 4 |
| **Authentication** | Laravel Fortify + 2FA |
| **PDF Generation** | DomPDF 3.1 |
| **Asset Build** | Vite 5+ |

## ✨ Core Features

### 📊 Dashboard & Analytics
- Real-time revenue tracking (today/month/year)
- Order status distribution with visual indicators
- Pending payments alerts
- Upcoming delivery reminders (7-day window)
- Top customers and tailor performance metrics
- Monthly revenue trend charts
- Quick action shortcuts

### 👥 Customer Management
- Complete customer database with contact details
- Measurement history tracking
- Order history and statistics
- Search and advanced filtering
- Customer lifetime value tracking
- Bulk operations support

### 🛍️ Order Management
- **Auto-generated order numbers** (format: ORD-YYYYMMDD-0001)
- Link customers, tailors, garment types, and fabrics
- Multiple measurement sources (stored/customer-provided)
- Priority levels (Normal/Urgent)
- **Payment tracking** with 5+ methods (Cash, Card, UPI, Bank Transfer, Other)
- Automatic balance due calculations
- **PDF invoice generation** with customizable templates
- Complete order status workflow tracking

### ✂️ Tailor Management
- Skill levels (Beginner/Intermediate/Advanced/Expert)
- Hourly rate and specialization tracking
- Join date and availability management
- **Tailor dashboard** for personal order tracking
- Performance metrics (orders completed, avg delivery time)
- Linked user accounts with role-based access

### 📏 Measurement System
- **Dynamic measurement categories** (e.g., Chest, Sleeve, Length)
- Customizable measurement fields with units
- Per-tailor and per-customer measurements
- Measurement history with timestamps
- Quick measurement template selection

### 👔 Garment Types
- Pre-configured garment types (Shirt, Pant, Kurti, Salwar, Lehenga, etc.)
- Custom garment type creation
- Active/inactive status management
- Searchable catalog

### 🧵 Fabrics & Inventory
- Fabric catalog with images
- Stock quantity tracking
- Price per unit (meter/yard/piece)
- Status management (Available/Out of Stock/Discontinued)
- Fabric reorder alerts
- Customer fabric option in orders

### 📋 Stitching Workflow Status
- **Customizable workflow stages** with color coding
- Default statuses: Pending, Cutting, Stitching, Finishing, Ironing, Ready for Trial, Delivered, Cancelled
- Drag-and-drop status reordering
- Real-time order status updates
- Status-based filtering and analytics

### 💰 Payment Management
- Multiple payment methods support
- Partial and full payment tracking
- Payment history per order
- Balance due calculations
- Payment method statistics
- Receipt generation

### 🔐 Security & Access Control
- Role-based access control (RBAC)
- Dynamic roles and permissions management
- Pre-seeded roles: Admin, Manager, Viewer
- Permission-based middleware protection
- User authentication with email verification
- **Two-factor authentication** (2FA) with QR codes and recovery codes
- Password reset and secure password management

### 📧 Notifications System
- Order created notifications
- Payment received alerts
- Delivery reminders (customizable days)
- Order status change notifications
- Low stock alerts
- System-wide and user-specific notifications
- Priority-based notification display

### ⚙️ Settings & Configuration
- **General settings**: App name, business details, currency, tax rate
- **Email configuration** (SMTP settings with test functionality)
- Order numbering prefix customization
- Default delivery days configuration
- Timezone management
- User profile and password management
- Two-factor authentication settings

### 🔍 Advanced Search & Filtering
- Global search across customers, orders, and products
- Advanced filters by date range, status, priority, amount
- Quick filter buttons
- Search suggestions and autocomplete
- Bulk operations (export, print)

## 📦 Installation & Setup

### Prerequisites
- **PHP 8.2** or higher
- **Composer** 2.0+
- **Node.js 18+** and npm/yarn
- **MySQL 8.0+** or MariaDB 10.5+
- **Git** (optional)

### Quick Setup

```bash
# 1. Clone the repository
git clone https://github.com/uicreatedesign/boutique-system.git
cd boutique-system

# 2. Install dependencies
composer install
npm install

# 3. Environment configuration
cp .env.example .env
php artisan key:generate

# 4. Configure database in .env
# Edit .env and set:
# DB_DATABASE=boutique_db
# DB_USERNAME=root
# DB_PASSWORD=your_password

# 5. Run migrations with seeders
php artisan migrate --seed

# 6. Build frontend assets
npm run build

# 7. Start development servers (2 terminals)
# Terminal 1:
php artisan serve

# Terminal 2:
npm run dev
```

Access the application at `http://localhost:8000`

### Database Setup

```bash
# Create migrations
php artisan migrate

# Seed initial data (roles, permissions, users)
php artisan db:seed

# Reset database (development only)
php artisan migrate:fresh --seed

# Check migration status
php artisan migrate:status
```

### Useful Artisan Commands

```bash
# Generate test data for development
php artisan tinker

# Clear application caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Run tests
php artisan test

# Create a new controller
php artisan make:controller ControllerName
```

## 🚀 Deployment

### Production Setup

```bash
# 1. Install production dependencies
composer install --no-dev --optimize-autoloader
npm ci --production

# 2. Build assets for production
npm run build

# 3. Configure environment
# Edit .env with production values (APP_DEBUG=false, etc.)

# 4. Cache configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 5. Run migrations
php artisan migrate --force

# 6. Set file permissions (Linux/macOS)
chmod -R 755 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

# 7. Start the application
php artisan serve
```

### Docker Setup (Optional)

A Docker configuration file is available: `vite.config.docker.ts`

```bash
docker-compose up -d
php artisan migrate --seed
```

## ⚙️ Environment Configuration

### Required .env Variables

```env
# Application
APP_NAME=BoutiqueSystem
APP_ENV=production
APP_KEY=base64:xxxxxxxxxxxxxxxxxxxxxx
APP_DEBUG=false
APP_URL=https://yourdomain.com

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=boutique_db
DB_USERNAME=root
DB_PASSWORD=your_password

# Mail Configuration (SMTP)
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@gmail.com
MAIL_FROM_NAME="${APP_NAME}"

# Optional
SESSION_DRIVER=cookie
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
```

### Email Setup (Gmail Example)

1. Enable 2FA on your Google account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password in `MAIL_PASSWORD`

## 👤 Default User Accounts

After running seeders, use these credentials:

| Role | Email | Password |
|------|-------|----------|
| Admin | `admin@boutique.com` | `password` |
| Manager | `manager@boutique.com` | `password` |
| Tailor | `tailor@boutique.com` | `password` |

**⚠️ Important**: Change passwords immediately in production!

## 📊 Database Schema

The system includes 20 database tables:

```
Authentication & Authorization
├── users (with 2FA support)
├── roles
├── permissions
└── role_user (pivot)

Business Data
├── customers
├── customer_measurements
├── tailors
├── users (linked)
├── orders
├── order_payments
├── garment_types
├── fabrics
├── stitching_statuses
├── measurement_categories
├── measurement_fields
└── notifications

System
├── settings / general_settings
├── jobs
└── cache
```

## 🏗️ Project Structure

```
boutique-system/
├── app/
│   ├── Models/              # Eloquent models
│   ├── Http/
│   │   ├── Controllers/     # API & page controllers
│   │   ├── Requests/        # Form request validation
│   │   ├── Resources/       # API response resources
│   │   └── Middleware/      # Custom middleware
│   ├── Services/            # Business logic
│   ├── Actions/             # Fortify actions
│   └── Observers/           # Model observers
├── database/
│   ├── migrations/          # Database schema
│   ├── seeders/             # Seed data
│   └── factories/           # Model factories
├── resources/
│   ├── js/
│   │   ├── components/      # React components
│   │   ├── pages/           # Inertia pages
│   │   ├── layouts/         # Layout components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── api/             # API client functions
│   │   └── types/           # TypeScript types
│   ├── views/               # PDF templates
│   └── css/                 # Tailwind styles
├── routes/
│   ├── web.php              # Main routes
│   ├── api.php              # API routes
│   └── [feature].php        # Feature-specific routes
├── config/                  # Configuration files
├── tests/                   # Test files
└── public/
    ├── build/               # Built assets
    └── storage/             # File storage
```

## 🔄 Routes & API Endpoints

### Web Routes (Inertia Pages)

```
GET  /                           # Welcome page
GET  /dashboard                  # Dashboard
GET  /customers                  # Customers list
GET  /orders                     # Orders list
GET  /tailors                    # Tailors list
GET  /roles                      # Roles & permissions
GET  /settings/*                 # Settings pages
GET  /tailor-dashboard           # Tailor's personal dashboard
```

### API Routes

```
# Customers
GET    /api/customers
POST   /api/customers
PUT    /api/customers/{id}
DELETE /api/customers/{id}

# Orders
GET    /api/orders
POST   /api/orders
PUT    /api/orders/{id}
DELETE /api/orders/{id}
POST   /api/orders/{id}/payments
POST   /api/orders/{id}/invoice

# Tailors
GET    /api/tailors
POST   /api/tailors
PUT    /api/tailors/{id}

# Measurements
GET    /api/customer-measurements
POST   /api/customer-measurements
PUT    /api/customer-measurements/{id}

# Roles & Permissions
GET    /api/roles
POST   /api/roles
PUT    /api/roles/{id}
DELETE /api/roles/{id}

# Settings
GET    /api/settings/general
PUT    /api/settings/general
POST   /api/settings/test-email

# Search
GET    /api/search
```

## 📱 User Roles & Permissions

### Pre-defined Roles

1. **Admin** - Full system access
2. **Manager** - Customer, order, and tailor management
3. **Viewer** - Read-only access

### Available Permissions

```
- view_customers, create_customers, edit_customers, delete_customers
- view_orders, create_orders, edit_orders, delete_orders
- view_tailors, create_tailors, edit_tailors, delete_tailors
- manage_roles, manage_permissions
- view_reports, manage_order_payments
- generate_invoices, manage_measurements
- access_settings, manage_general_settings
```

### Assigning Roles to Users

```php
// Attach a role
$user->roles()->attach($roleId);

// Sync multiple roles
$user->roles()->sync([$roleId1, $roleId2]);

// Check permissions
if ($user->hasPermission('view_orders')) {
    // User has permission
}
```

## 🧪 Development & Testing

### Development Workflow

```bash
# Start both servers
php artisan serve          # Starts on http://localhost:8000
npm run dev                # Starts on http://localhost:5173

# Or use a single command (if configured)
composer run dev
```

### Running Tests

```bash
# Run all tests
php artisan test

# Run specific test file
php artisan test tests/Feature/OrderManagementTest.php

# Run with coverage
php artisan test --coverage

# Refresh test database
php artisan migrate:refresh --env=testing
```

### Code Quality

```bash
# Check code style (Laravel Pint)
./vendor/bin/pint

# Fix code style issues
./vendor/bin/pint --fix

# Lint frontend code (ESLint)
npm run lint

# Format code (Prettier)
npm run format

# Type check (TypeScript)
npm run types
```

### Creating Test Data

```bash
# Access Tinker console
php artisan tinker

# Generate test customer
$customer = App\Models\Customer::factory()->create();

# Generate test order
$order = App\Models\Order::factory()->create();

# Exit Tinker
exit
```

## 📖 API Usage Examples

### JavaScript/React (Frontend)

```typescript
import { useQuery, useMutation } from '@inertiajs/react';

// Fetch customers
const { data: customers, loading } = useQuery('/api/customers');

// Create order
const createOrder = useMutation('/api/orders', {
  onSuccess: () => console.log('Order created'),
});

createOrder.mutate({
  customer_id: 1,
  tailor_id: 2,
  order_date: '2025-12-10',
  delivery_date: '2025-12-17',
  total_amount: 5000,
  priority: 'normal',
  stitching_status_id: 1,
});
```

### cURL Examples

```bash
# Create an order
curl -X POST http://localhost:8000/api/orders \
  -H "Content-Type: application/json" \
  -H "X-CSRF-TOKEN: $(csrf_token)" \
  -d '{
    "customer_id": 1,
    "tailor_id": 2,
    "garment_type_id": 1,
    "stitching_status_id": 1,
    "order_date": "2025-12-10",
    "delivery_date": "2025-12-17",
    "total_amount": 5000,
    "priority": "normal"
  }'

# Add payment to order
curl -X POST http://localhost:8000/api/orders/1/payments \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 2500,
    "payment_method": "cash",
    "payment_date": "2025-12-10"
  }'
```

## 🔒 Security Features

- ✅ CSRF token protection
- ✅ SQL injection prevention (Eloquent ORM)
- ✅ XSS protection
- ✅ Two-factor authentication (2FA)
- ✅ Email verification
- ✅ Password hashing (bcrypt)
- ✅ Role-based access control
- ✅ Rate limiting on sensitive endpoints
- ✅ Secure password reset

### Best Practices

1. **Never commit `.env`** to version control
2. **Use environment variables** for sensitive data
3. **Keep Laravel and dependencies updated**
4. **Enable 2FA** for admin accounts
5. **Use HTTPS** in production
6. **Regularly backup** your database
7. **Review user permissions** periodically

## 📚 Additional Resources

- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://react.dev)
- [Inertia.js Documentation](https://inertiajs.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 🐛 Troubleshooting

### Issue: Database Connection Error

```bash
# Check .env database credentials
# Ensure MySQL is running
# Run migrations
php artisan migrate
```

### Issue: Node modules error

```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Port already in use

```bash
# Change Laravel port
php artisan serve --port=8001

# Change Vite port
npm run dev -- --port 5174
```

### Issue: Storage permission error

```bash
chmod -R 775 storage bootstrap/cache
```

## 🎯 Next Steps & Future Enhancements

Potential features for future development:

- [ ] Advanced inventory management with stock alerts
- [ ] WhatsApp/SMS notifications integration
- [ ] Mobile app (React Native)
- [ ] Multi-branch/location support
- [ ] Advanced analytics and reporting
- [ ] Automated payroll system
- [ ] Customer loyalty program
- [ ] Appointment booking system
- [ ] Expense tracking and profitability analysis
- [ ] API rate limiting and webhooks

See [ROLES_PERMISSIONS_GUIDE.md](./ROLES_PERMISSIONS_GUIDE.md) and [TAILORS_GUIDE.md](./TAILORS_GUIDE.md) for more detailed feature documentation.

## 📄 License

This project is open-sourced software licensed under the [MIT License](./LICENSE).

## 👥 Support & Contribution

For issues, feature requests, or contributions, please [create an issue](https://github.com/uicreatedesign/boutique-system/issues) or submit a pull request.

---

**Last Updated**: December 10, 2025  
**Version**: 1.0.0  
**Maintainer**: UICreateDesign
