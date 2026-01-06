# Boutique Management System - Codebase Analysis

## Project Overview
A comprehensive Laravel 12 + React 19 + Inertia.js boutique and tailoring management system with role-based access control, order management, customer tracking, and payment processing.

---

## Architecture Overview

### Tech Stack
- **Backend**: Laravel 12, PHP 8.2+, MySQL
- **Frontend**: React 19, TypeScript, Inertia.js 2.1+
- **UI**: shadcn/ui, Radix UI, Tailwind CSS 4
- **Authentication**: Laravel Fortify + 2FA + Google OAuth
- **PDF Generation**: DomPDF 3.1
- **Build Tool**: Vite 5+

---

## Directory Structure

```
boutique-system/
├── app/
│   ├── Actions/              # Fortify authentication actions
│   ├── Console/              # Artisan commands
│   ├── Http/
│   │   ├── Controllers/      # Main controllers
│   │   │   ├── Auth/         # Authentication (GoogleController)
│   │   │   ├── Api/          # API controllers
│   │   │   ├── Settings/     # Settings management
│   │   │   └── [Feature]Controller.php
│   │   ├── Requests/         # Form validation
│   │   ├── Resources/        # API response resources
│   │   └── Middleware/       # Custom middleware
│   ├── Models/               # Eloquent models (18 models)
│   ├── Observers/            # Model observers
│   ├── Providers/            # Service providers
│   └── Services/             # Business logic services
├── config/                   # Configuration files
├── database/
│   ├── migrations/           # Database schema
│   ├── seeders/              # Seed data
│   └── factories/            # Model factories
├── resources/
│   ├── js/
│   │   ├── components/       # React components
│   │   ├── pages/            # Inertia pages
│   │   ├── layouts/          # Layout components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── api/              # API client functions
│   │   └── types/            # TypeScript types
│   ├── views/                # PDF templates
│   └── css/                  # Tailwind styles
├── routes/                   # Route definitions
├── tests/                    # Test files
└── public/                   # Static assets
```

---

## Core Models (18 Total)

### Authentication & Authorization
1. **User** - Authenticatable with 2FA, email verification, Google OAuth
   - Relations: roles, tailor, customer, notifications
   - Methods: hasPermission(), can(), getAllPermissions()

2. **Role** - Role-based access control
   - Relations: permissions, users
   - Pre-seeded: Admin, Manager, Viewer, Tailor, Settings Manager

3. **Permission** - Fine-grained permissions
   - 50+ permissions across all modules

### Business Models
4. **Customer** - Customer information and tracking
   - Relations: user, orders, measurements
   - Fields: name, phone, email, address, dob, meta

5. **Order** - Order management with auto-generated numbers
   - Relations: customer, garmentType, tailor, measurement, fabric, stitchingStatus, payments
   - Auto-generates order numbers: ORD-YYYYMMDD-0001
   - Calculates balance_due automatically

6. **OrderPayment** - Payment tracking
   - Relations: order
   - Methods: partial, full, advance payments
   - Payment methods: cash, card, upi, bank_transfer, other

7. **Tailor** - Tailor/worker management
   - Relations: user, orders
   - Fields: skill_level, hourly_rate, specialization, join_date

8. **GarmentType** - Garment catalog
   - Pre-configured: Shirt, Pant, Kurti, Salwar, Lehenga, etc.

9. **Fabric** - Fabric inventory
   - Fields: name, stock_quantity, price_per_meter, status
   - Status: available, out_of_stock, discontinued

10. **CustomerMeasurement** - Measurement history
    - Relations: customer, tailor
    - Stores: measurement_type, measurements (JSON), notes

11. **MeasurementCategory** - Measurement categories
    - Relations: fields
    - Example: "Chest", "Sleeve", "Length"

12. **MeasurementField** - Individual measurement fields
    - Relations: category
    - Fields: name, unit (inches/cm), sort_order

13. **StitchingStatus** - Order workflow stages
    - Customizable statuses with color coding
    - Default: Pending, Cutting, Stitching, Finishing, Ironing, Ready for Trial, Delivered, Cancelled

14. **Notification** - In-app notifications
    - Relations: user
    - Scope: forUser() - filters by user_id
    - Types: order_created, payment_received, delivery_reminder, order_status_changed, low_stock_alert

15. **NotificationSetting** - Notification preferences
    - Per-user notification settings

16. **GeneralSetting** - System-wide settings
    - App name, business details, currency, tax rate, timezone

17. **BackupSetting** - Backup configuration

18. **Setting** - Generic key-value settings

---

## Controllers (22 Total)

### Main Controllers
- **DashboardController** - Dashboard with analytics
  - Revenue stats (today/month/year)
  - Order distribution
  - Pending payments
  - Upcoming deliveries
  - Top customers & tailor performance
  - Monthly revenue trends

- **OrderController** - Order CRUD + payments
  - Methods: index, create, store, show, edit, update, destroy
  - Special: invoice(), measurementSlip(), addPayment()
  - Permissions: view_orders, create_orders, edit_orders, delete_orders, manage_order_payments, generate_invoices

- **CustomerController** - Customer management
- **TailorController** - Tailor management
- **UserController** - User management
- **RoleController** - Role management
- **PermissionController** - Permission management

### Feature Controllers
- **MeasurementController** - Measurement CRUD
- **MeasurementCategoryController** - Category management
- **MeasurementFieldController** - Field management
- **GarmentTypeController** - Garment type management
- **FabricController** - Fabric inventory
- **StitchingStatusController** - Status workflow
- **NotificationController** - Notification management
- **SearchController** - Global search
- **ReportController** - Analytics & reports

### Settings Controllers
- **GeneralSettingsController** - App settings
- **SmtpController** - Email configuration
- **ProfileController** - User profile
- **PasswordController** - Password management
- **TwoFactorAuthenticationController** - 2FA setup
- **NotificationController** (Settings) - Notification preferences
- **BackupController** - Database backups

### Auth Controllers
- **GoogleController** - Google OAuth
  - Methods: redirect(), callback()
  - Auto-assigns "Viewer" role to new users
  - Auto-verifies email for Google users

### API Controllers
- **CustomerRegistrationController** - Customer self-registration

---

## Routes Structure

### Web Routes (routes/web.php)
```
GET  /                           # Welcome page
GET  /auth/google                # Google OAuth redirect
GET  /auth/google/callback       # Google OAuth callback
GET  /dashboard                  # Main dashboard
```

### Feature Routes (separate files)
- **routes/customers.php** - Customer CRUD
- **routes/orders.php** - Order management
- **routes/tailors.php** - Tailor management
- **routes/users.php** - User management
- **routes/roles.php** - Role & permission management
- **routes/measurements.php** - Measurement management
- **routes/garment-types.php** - Garment type management
- **routes/fabrics.php** - Fabric management
- **routes/stitching-statuses.php** - Status management
- **routes/settings.php** - Settings pages
- **routes/tailor-dashboard.php** - Tailor personal dashboard
- **routes/customer-dashboard.php** - Customer portal
- **routes/notifications.php** - Notification management
- **routes/reports.php** - Analytics & reports
- **routes/search.php** - Global search
- **routes/measurement-settings.php** - Measurement configuration

### API Routes (routes/api.php)
- RESTful endpoints for all resources
- JSON responses with proper status codes

---

## Services

### NotificationService
Handles all notification logic:
- **Methods**:
  - send() - Send via all channels
  - createInAppNotification() - Create in-app notification
  - createForUser() - User-specific notification
  - createSystemWide() - System-wide notification
  - orderCreated() - Order creation notification
  - paymentReceived() - Payment notification
  - deliveryReminder() - Delivery reminder
  - orderStatusChanged() - Status change notification
  - lowStock() - Low stock alert

- **Channels**: Email, WhatsApp, SMS, Push

### SettingsService
Manages system settings and configuration

---

## Authentication & Authorization

### Authentication Methods
1. **Email/Password** - Traditional login via Fortify
2. **Google OAuth** - Google login with auto-role assignment
3. **Two-Factor Authentication** - QR code + recovery codes

### Role-Based Access Control (RBAC)
**Pre-seeded Roles**:
- **Admin** - Full system access
- **Manager** - Customer, order, tailor management
- **Viewer** - Read-only access
- **Tailor** - Limited to personal orders & measurements
- **Settings Manager** - System configuration

**Permission System**:
- 50+ granular permissions
- Middleware-based protection
- Dynamic role assignment

---

## Frontend Structure

### Pages (React Components)
- **Auth Pages**: login, register, password-reset, 2fa
- **Dashboard**: Main analytics dashboard
- **Customers**: List, create, edit, view
- **Orders**: List, create, edit, view, invoice
- **Tailors**: List, create, edit, view
- **Measurements**: Management interface
- **Settings**: General, SMTP, profile, 2FA, notifications
- **Reports**: Analytics & insights
- **Customer Portal**: Customer-specific dashboard

### Components
- **UI Components**: Button, Input, Select, Modal, etc. (shadcn/ui)
- **Layout Components**: Sidebar, Header, Footer
- **Feature Components**: Order forms, customer cards, etc.

### Hooks
- Custom React hooks for API calls, state management, etc.

### API Client
- Centralized API communication
- Error handling
- Request/response interceptors

---

## Database Schema

### Key Tables
1. **users** - Authentication & user data
2. **roles** - Role definitions
3. **permissions** - Permission definitions
4. **role_user** - Role assignments (pivot)
5. **customers** - Customer information
6. **orders** - Order records
7. **order_payments** - Payment tracking
8. **tailors** - Tailor information
9. **garment_types** - Garment catalog
10. **fabrics** - Fabric inventory
11. **customer_measurements** - Measurement history
12. **measurement_categories** - Measurement categories
13. **measurement_fields** - Measurement fields
14. **stitching_statuses** - Order workflow stages
15. **notifications** - In-app notifications
16. **general_settings** - System settings

---

## Key Features

### 1. Order Management
- Auto-generated order numbers (ORD-YYYYMMDD-0001)
- Multiple measurement sources
- Fabric tracking (customer/boutique)
- Design image uploads
- Payment tracking with balance calculation
- PDF invoice generation
- Customizable workflow statuses

### 2. Customer Management
- Complete customer database
- Measurement history
- Order history & statistics
- Lifetime value tracking
- Bulk operations

### 3. Payment System
- Multiple payment methods
- Partial/full/advance payments
- Balance due calculations
- Payment history
- Receipt generation

### 4. Notification System
- Order created alerts
- Payment received notifications
- Delivery reminders
- Status change notifications
- Low stock alerts
- Multi-channel delivery (Email, WhatsApp, SMS, Push)

### 5. Role-Based Access Control
- Dynamic roles & permissions
- Permission-based middleware
- User authentication with email verification
- Two-factor authentication
- Google OAuth integration

### 6. Analytics & Reporting
- Real-time revenue tracking
- Order status distribution
- Customer & tailor performance metrics
- Monthly revenue trends
- Pending payments alerts

---

## Configuration Files

### Key Configs
- **config/fortify.php** - Authentication settings
- **config/services.php** - Third-party services (Google OAuth)
- **config/app.php** - Application settings
- **config/database.php** - Database configuration
- **config/mail.php** - Email configuration
- **config/inertia.php** - Inertia.js settings

---

## Environment Variables

### Required
```env
APP_NAME=BoutiqueSystem
APP_ENV=local
APP_KEY=base64:xxxxx
APP_DEBUG=true
APP_URL=http://127.0.0.1:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=boutique
DB_USERNAME=root
DB_PASSWORD=

MAIL_MAILER=smtp
MAIL_HOST=smtp.example.com
MAIL_PORT=465
MAIL_USERNAME=email@example.com
MAIL_PASSWORD=password
MAIL_FROM_ADDRESS=email@example.com

GOOGLE_CLIENT_ID=xxxxx
GOOGLE_CLIENT_SECRET=xxxxx
GOOGLE_REDIRECT_URI=http://127.0.0.1:8000/auth/google/callback
```

---

## Development Workflow

### Setup
```bash
composer install
npm install
php artisan key:generate
php artisan migrate --seed
npm run dev
php artisan serve
```

### Commands
```bash
# Database
php artisan migrate
php artisan migrate:fresh --seed
php artisan db:seed

# Cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear

# Code Quality
./vendor/bin/pint --fix
npm run lint
npm run format

# Testing
php artisan test
```

---

## Security Features

✅ CSRF token protection
✅ SQL injection prevention (Eloquent ORM)
✅ XSS protection
✅ Two-factor authentication (2FA)
✅ Email verification
✅ Password hashing (bcrypt)
✅ Role-based access control
✅ Rate limiting
✅ Secure password reset
✅ Google OAuth integration

---

## Performance Optimizations

- Eager loading with relations
- Query optimization with scopes
- Pagination for large datasets
- Caching for settings
- Asset minification (Vite)
- Database indexing

---

## Testing

- Feature tests for controllers
- Unit tests for models & services
- Test database configuration
- Factory-based test data generation

---

## Documentation

- **README.md** - Project overview & setup
- **ROLES_PERMISSIONS_GUIDE.md** - RBAC documentation
- **TAILORS_GUIDE.md** - Tailor features
- **CUSTOMER_ACCOUNTS.md** - Customer portal
- **GOOGLE_OAUTH_SETUP.md** - OAuth configuration
- **ARCHITECTURE_DECISION.md** - Design decisions

---

## Recent Implementations

1. ✅ Email verification (MustVerifyEmail)
2. ✅ Customer-specific notifications
3. ✅ PSR-12 code standards
4. ✅ Dark mode support
5. ✅ Theme toggle (Light/Dark/System)
6. ✅ Date picker components
7. ✅ Google OAuth login
8. ✅ Measurement unit defaults

---

## Next Steps & Roadmap

- [ ] Advanced inventory management
- [ ] WhatsApp/SMS notifications
- [ ] Mobile app (React Native)
- [ ] Multi-branch support
- [ ] Advanced analytics
- [ ] Automated payroll
- [ ] Customer loyalty program
- [ ] Appointment booking
- [ ] Expense tracking
- [ ] API rate limiting & webhooks

---

## Support & Contribution

For issues, feature requests, or contributions:
- Create an issue on GitHub
- Submit a pull request
- Contact: UICreateDesign

---

**Last Updated**: January 5, 2026
**Version**: 1.0.0 + Google OAuth
**Maintainer**: UICreateDesign
