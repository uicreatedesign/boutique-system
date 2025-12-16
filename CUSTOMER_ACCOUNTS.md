# Customer User Accounts - Quick Reference

## ✅ What It Does

Customers can optionally have login accounts to view their orders online.

---

## 📝 How to Create

### Via Customer Form:
1. Go to **Customers** page
2. Click **Add Customer**
3. Fill in customer details
4. Check **"Create User Account"**
5. Enter password
6. Click **Save**

**Result:**
- Customer record created
- User account created with Customer role
- Customer can login at `/login`
- Redirected to `/customer-dashboard`

---

## 🔐 What Customers Can Do

After login, customers can:
- ✅ View their orders
- ✅ See order status and details
- ✅ View measurements
- ✅ Download invoices
- ✅ Check payment history

---

## 💾 Database

```
users table
├── id, name, email, password
└── Customer role assigned

customers table
├── id, user_id (links to users.id)
└── name, phone, email, address, orders
```

---

## 🎯 Simple Code

### CustomerController.php
```php
// Create user with Customer role
if ($request->boolean('create_user_account')) {
    $user = User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => bcrypt($request->input('user_password')),
    ]);
    
    $customerRole = Role::where('name', 'Customer')->first();
    $user->roles()->attach($customerRole->id);
    
    $data['user_id'] = $user->id;
}
```

### Check if customer has account
```php
if ($customer->user_id) {
    // Has account
}
```

---

## 🚀 Routes

- `/login` - Customer login
- `/customer-dashboard` - Customer dashboard
- `/customer-dashboard/orders/{id}` - Order details
- `/customer-dashboard/orders/{id}/invoice` - Download invoice

---

## ✅ That's It!

Simple customer accounts with Customer role. No complex logic needed.
