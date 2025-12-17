# Customer User Accounts - Simple Guide

## How It Works

Customers can optionally have user accounts to login and view their orders.

### Simple Flow:
1. Create customer (business data)
2. Optionally check "Create User Account"
3. System creates user with Customer role
4. Customer can login with email/password
5. Redirected to `/customer-dashboard`

---

## Creating Customer with User Account

### Via UI:
1. Go to Customers page
2. Click "Add Customer"
3. Fill customer details (name, phone, email, etc.)
4. Check "Create User Account (Portal Access)"
5. Enter password
6. Save

**What happens:**
- Customer record created in `customers` table
- User record created in `users` table
- Customer role automatically assigned
- `user_id` links customer to user

---

## Database Structure

```
users table (authentication)
├── id, name, email, password
└── Customer role assigned

customers table (business data)
├── id, user_id (FK to users.id)
├── name, phone, email, address, dob
└── orders, measurements
```

---

## Customer Permissions

Customer role has these permissions:
- `view_own_orders` - View their orders
- `view_own_measurements` - View their measurements  
- `download_own_invoices` - Download invoices

---

## Customer Dashboard

After login, customers see:
- Personal information
- List of orders with status
- Order details and payments
- Measurements
- Invoice downloads

**URL:** `/customer-dashboard`

---

## Code Example

### CustomerController (already implemented):
```php
// Create user if requested
if ($request->boolean('create_user_account') && $request->filled('user_password')) {
    $user = User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => bcrypt($request->input('user_password')),
    ]);
    
    // Assign Customer role
    $customerRole = Role::where('name', 'Customer')->first();
    $user->roles()->attach($customerRole->id);
    
    $data['user_id'] = $user->id;
}
```

---

## Check if Customer Has Account

```php
$customer = Customer::find(1);

if ($customer->user_id) {
    // Has user account
    $user = $customer->user;
}
```

---

## That's It!

Simple customer user creation with role-based access. No complex portal logic needed.
