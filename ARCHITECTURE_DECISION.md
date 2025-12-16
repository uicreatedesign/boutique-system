# Architecture Decision: Customer & User Tables

## ✅ Current Architecture (RECOMMENDED)

### Two Separate Tables:

```
users table (Authentication)
├── id, name, email, password
└── For login/authentication only

customers table (Business Data)
├── id, user_id (optional FK)
├── name, phone, email, address, dob
└── All business logic uses this table
```

---

## 🎯 Why This is Best

### 1. Clean Separation
- **users** = Who can login
- **customers** = Business records
- Not all customers need login access

### 2. No Data Duplication
- Customer data lives in ONE place
- Orders → customers table
- Measurements → customers table
- Reports → customers table

### 3. Flexibility
- Create customer without user account ✅
- Add user account later ✅
- Remove user access without losing customer data ✅

### 4. Scalability
- Easy to add more user types (Staff, Vendor, etc.)
- Customer business logic stays independent
- Auth changes don't affect business data

---

## 🔄 How It Works

### Creating Customer WITHOUT User Account:
```
1. Fill customer form
2. Don't check "Create User Account"
3. Customer record created in customers table
4. No user account = No login access
```

### Creating Customer WITH User Account:
```
1. Fill customer form
2. Check "Create User Account"
3. Enter password
4. System creates:
   - Customer record in customers table
   - User record in users table
   - Links them via user_id
   - Assigns Customer role
5. Customer can now login
```

---

## 📊 Data Flow

### When Customer Logs In:
```php
// Get authenticated user
$user = auth()->user();

// Get linked customer data
$customer = $user->customer;

// Access all business data
$orders = $customer->orders;
$measurements = $customer->measurements;
```

### When Creating Order:
```php
// Always use customer_id (not user_id)
Order::create([
    'customer_id' => $customer->id,  // ✅ Correct
    // ... other fields
]);
```

---

## ❌ Why NOT to Add Fields to Users Table

### Problems with adding phone/address to users:
1. **Data Duplication** - Same data in two places
2. **Sync Issues** - Update customer, forget to update user
3. **Confusion** - Which table is source of truth?
4. **Complexity** - More code to maintain sync
5. **Inflexibility** - Users table becomes bloated

---

## ✅ Current Implementation

### Validation Rules:
- Email only checked in `users` table when creating account
- Allows same email for customer without account
- Prevents duplicate user accounts

### Controller Logic:
```php
// Simple and clean
if ($request->boolean('create_user_account')) {
    $user = User::create([...]);
    $user->roles()->attach($customerRole->id);
    $data['user_id'] = $user->id;
}
```

---

## 🎯 Summary

**KEEP CURRENT ARCHITECTURE** ✅

- Clean separation of concerns
- No data duplication
- Flexible and scalable
- Already working correctly
- Minimal code complexity

**DO NOT** add phone/address to users table ❌

---

## 📝 Quick Reference

### Check if customer has user account:
```php
if ($customer->user_id) {
    // Has account
}
```

### Get customer from user:
```php
$customer = auth()->user()->customer;
```

### Get user from customer:
```php
$user = $customer->user;
```

---

**Status**: ✅ Architecture is correct and optimal  
**Action**: No changes needed to table structure  
**Date**: December 15, 2025
