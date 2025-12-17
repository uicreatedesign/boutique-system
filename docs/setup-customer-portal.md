# Customer Portal - Quick Setup Guide

## ✅ Installation Complete!

The Customer Portal has been successfully installed. Follow these steps to start using it:

---

## 🚀 Quick Start (3 Steps)

### Step 1: Create Test Customer with Portal Access

```bash
php artisan tinker
```

Then run:
```php
$customer = \App\Models\Customer::first();
$customer->password = bcrypt('password123');
$customer->save();
exit
```

### Step 2: Access the Portal

Visit: `http://localhost:8000/portal/login`

**Test Credentials:**
- Email: (use existing customer email)
- Password: `password123`

### Step 3: Test Features

After login, you should see:
- ✅ Customer dashboard
- ✅ List of orders
- ✅ Measurements
- ✅ "Coming Soon" banner for online payments

---

## 📋 What's Included

### ✅ Customer Features:
1. **Login System** - Secure authentication
2. **Dashboard** - View orders and measurements
3. **Order Tracking** - Real-time status updates
4. **Invoice Download** - PDF generation
5. **Payment History** - View all payments
6. **Measurements** - View recorded measurements

### ✅ Admin Features:
- Set customer portal passwords
- Enable/disable portal access per customer
- All existing admin features remain unchanged

---

## 🎯 How to Enable Portal for Customers

### Option 1: Via Database (Quick)
```sql
UPDATE customers 
SET password = '$2y$12$...' -- bcrypt hash
WHERE email = 'customer@example.com';
```

### Option 2: Via Code
```php
$customer = Customer::find(1);
$customer->password = bcrypt('customer_password');
$customer->save();
```

### Option 3: Via Customer Management (Future)
- Add "Portal Access" section in customer edit form
- Set password field
- Save customer

---

## 🔐 Security Notes

- ✅ Separate authentication guard (doesn't interfere with admin)
- ✅ Customers can only see their own data
- ✅ Passwords are hashed with bcrypt
- ✅ CSRF protection enabled
- ✅ Session-based authentication

---

## 📱 Portal URLs

```
Login:          /portal/login
Dashboard:      /portal/dashboard
Order Details:  /portal/orders/{id}
Invoice:        /portal/orders/{id}/invoice
Logout:         /portal/logout (POST)
```

---

## 🎨 Features Overview

### Dashboard Page:
- Customer information card
- "Coming Soon" banner for online payments
- List of all orders with:
  - Order number
  - Status badge (color-coded)
  - Dates (order & delivery)
  - Payment summary
  - Quick actions (View Details, Download Invoice)
- List of measurements with details

### Order Details Page:
- Complete order information
- Garment type and tailor
- Dates and status
- Special instructions
- Measurements (if available)
- Payment summary
- Payment history
- Download invoice button

---

## 🧪 Testing

### Test Customer Login:
1. Go to `/portal/login`
2. Enter customer email and password
3. Should redirect to `/portal/dashboard`

### Test Order View:
1. Click "View Details" on any order
2. Should show complete order information
3. Click "Download Invoice" - PDF should download

### Test Logout:
1. Click "Logout" button
2. Should redirect to login page
3. Try accessing `/portal/dashboard` - should redirect to login

---

## 🐛 Common Issues & Solutions

### Issue: "Customer can't login"
**Solution:**
```bash
# Check if password is set
php artisan tinker
$customer = Customer::where('email', 'test@example.com')->first();
dd($customer->password); // Should not be null
```

### Issue: "Routes not found"
**Solution:**
```bash
php artisan route:clear
php artisan route:cache
```

### Issue: "Session errors"
**Solution:**
```bash
php artisan config:clear
php artisan cache:clear
```

---

## 📊 Database Changes

### Customers Table (New Columns):
- `password` (nullable) - Hashed password
- `remember_token` - For "Remember Me" functionality
- `email_verified_at` - For future email verification

---

## 🎯 Next Steps

### Immediate:
1. ✅ Test portal with real customer
2. ✅ Set passwords for customers who need access
3. ✅ Share portal URL and credentials

### Future Enhancements:
- [ ] Add "Set Portal Password" in customer edit form
- [ ] Email customers their portal credentials
- [ ] Add password reset functionality
- [ ] Implement online payment (when ready)

---

## 📞 Need Help?

1. Check `CUSTOMER_PORTAL_GUIDE.md` for detailed documentation
2. Review code in `app/Http/Controllers/Portal/`
3. Check frontend pages in `resources/js/pages/portal/`
4. Test routes: `php artisan route:list | findstr portal`

---

## ✅ Verification Checklist

- [ ] Portal routes are registered
- [ ] Customer guard is configured
- [ ] Migration has run successfully
- [ ] Test customer can login
- [ ] Dashboard displays correctly
- [ ] Orders are visible
- [ ] Invoice downloads work
- [ ] Logout works
- [ ] Mobile responsive

---

**Status**: ✅ Ready to Use  
**Version**: 1.0.0  
**Date**: December 15, 2025
