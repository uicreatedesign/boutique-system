# Google OAuth Setup Guide

## Quick Setup Steps

### 1. Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure OAuth consent screen (add app name, support email)
6. Create OAuth Client ID:
   - Application type: **Web application**
   - Authorized redirect URIs: `http://localhost:8000/auth/google/callback`
7. Copy **Client ID** and **Client Secret**

### 2. Configure Environment Variables

Add to your `.env` file:

```env
GOOGLE_CLIENT_ID=your-client-id-here
GOOGLE_CLIENT_SECRET=your-client-secret-here
GOOGLE_REDIRECT_URI="${APP_URL}/auth/google/callback"
```

### 3. Run Migration (Already Done)

```bash
php artisan migrate
```

### 4. Test Login

1. Start your server: `php artisan serve`
2. Visit: `http://localhost:8000/login`
3. Click "Continue with Google"
4. Authorize with your Google account
5. You'll be redirected to dashboard with "Viewer" role

## How It Works

- **New Users**: Automatically created with "Viewer" role, email verified
- **Existing Users**: Google account linked to existing email
- **Password**: Not required for Google users (nullable)
- **Avatar**: Synced from Google profile
- **Roles**: Default "Viewer" role, admins can upgrade later

## Production Setup

For production, update redirect URI in Google Console:

```
https://yourdomain.com/auth/google/callback
```

And update `.env`:

```env
APP_URL=https://yourdomain.com
GOOGLE_REDIRECT_URI="${APP_URL}/auth/google/callback"
```

## Security Notes

- Email is auto-verified for Google users
- Existing users can link Google account by logging in with same email
- Password remains optional (Google users don't need it)
- All existing role/permission logic applies to Google users
