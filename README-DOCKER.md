# Docker Deployment for Render.com

## Quick Deploy to Render.com

1. **Connect Repository**: Link your GitHub repository to Render.com
2. **Auto-Deploy**: Render will automatically detect the `render.yaml` file and deploy
3. **Environment Variables**: All required environment variables are configured in `render.yaml`

## Manual Deployment Steps

### 1. Build and Test Locally
```bash
# Build the Docker image
docker build -t boutique-system .

# Run locally (optional)
docker run -p 8080:80 boutique-system
```

### 2. Deploy to Render.com
- Push your code to GitHub
- Connect repository to Render.com
- Render will automatically:
  - Create MySQL database
  - Build Docker image
  - Deploy application
  - Run migrations

### 3. Environment Variables
The following are automatically configured via `render.yaml`:
- `APP_ENV=production`
- `APP_DEBUG=false`
- `APP_KEY` (auto-generated)
- Database credentials (from Render MySQL service)
- Cache and session drivers optimized for production

## Production Features

✅ **Multi-stage build** - Optimized image size
✅ **Nginx + PHP-FPM** - High performance web server
✅ **OPcache enabled** - PHP performance optimization
✅ **Asset optimization** - Gzipped static files
✅ **Auto-migrations** - Database setup on deployment
✅ **Health checks** - Container monitoring
✅ **Security hardened** - Production-ready configuration

## Database
- MySQL database automatically provisioned
- Migrations run on container startup
- Connection details injected via environment variables

## Monitoring
- Nginx and PHP-FPM logs available in Render dashboard
- Supervisor manages process health
- Automatic container restarts on failure