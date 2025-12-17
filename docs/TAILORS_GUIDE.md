# Tailors Management System

## Overview
A complete tailor management system has been implemented in your boutique system with all necessary fields for managing tailoring staff.

## Features
✅ Create, edit, view, and delete tailors
✅ Search tailors by name, phone, or email
✅ Filter tailors by status (Active, Inactive, On Leave)
✅ Track skill levels (Beginner, Intermediate, Expert)
✅ Manage hourly rates and specializations
✅ Color-coded badges for status and skill levels
✅ Responsive UI using shadcn/ui components

## Database Fields

### Tailors Table
- **id** - Primary key
- **name** - Tailor's full name (required)
- **phone** - Contact phone number (required)
- **email** - Email address (optional, unique)
- **skill_level** - Skill level: beginner, intermediate, expert (required)
- **address** - Physical address (optional)
- **status** - Current status: active, inactive, on_leave (required)
- **hourly_rate** - Hourly rate in dollars (optional)
- **specialization** - Areas of expertise (optional)
- **join_date** - Date joined the team (optional)
- **meta** - JSON field for additional data (optional)
- **timestamps** - Created at and updated at

## Backend Components

### Model
- `App\Models\Tailor` - Tailor model with fillable fields and casts

### Controller
- `App\Http\Controllers\TailorController` - Full CRUD operations with search and filter

### API Endpoints
- `GET /api/tailors` - List all tailors (with search and status filter)
- `POST /api/tailors` - Create new tailor
- `GET /api/tailors/{id}` - Get single tailor
- `PUT /api/tailors/{id}` - Update tailor
- `DELETE /api/tailors/{id}` - Delete tailor

### Validation Rules
**Create/Update:**
- name: required, max 191 characters
- phone: required, max 20 characters
- email: optional, valid email, unique
- skill_level: required, one of: beginner, intermediate, expert
- status: required, one of: active, inactive, on_leave
- hourly_rate: optional, numeric, minimum 0
- specialization: optional, string
- join_date: optional, valid date
- address: optional, string

## Frontend Components

### Pages
- `/tailors` - Main tailors management page with search and filters

### Components
- **TailorTable** - Display tailors with color-coded badges
- **TailorForm** - Form with all fields including dropdowns for skill_level and status
- **TailorCreateModal** - Modal for creating new tailors
- **TailorEditModal** - Modal for editing existing tailors
- **TailorDetailModal** - Modal showing complete tailor information
- **TailorDeleteDialog** - Confirmation dialog for deleting tailors

### UI Features
- Search by name, phone, or email (debounced 300ms)
- Filter by status dropdown
- Color-coded status badges:
  - Active: Green
  - Inactive: Gray
  - On Leave: Yellow
- Color-coded skill level badges:
  - Expert: Purple
  - Intermediate: Blue
  - Beginner: Orange
- Responsive table layout
- Action buttons: View, Edit, Delete

## Sample Data

The system comes with 5 sample tailors:
1. **John Smith** - Expert, Wedding dresses & Evening gowns, $45/hr
2. **Maria Garcia** - Expert, Suits & Formal wear, $50/hr
3. **Ahmed Hassan** - Intermediate, Alterations & Casual wear, $35/hr
4. **Sarah Johnson** - Beginner, Basic alterations, $25/hr
5. **David Lee** - Intermediate, Traditional & Ethnic clothing, $38/hr (On Leave)

## Navigation
The Tailors menu item has been added to the sidebar with a Scissors icon.

## Usage Examples

### Creating a Tailor
1. Navigate to `/tailors`
2. Click "Add Tailor" button
3. Fill in required fields (name, phone, skill_level, status)
4. Optionally add email, hourly rate, specialization, etc.
5. Click "Save Tailor"

### Searching Tailors
- Type in the search box to filter by name, phone, or email
- Results update automatically after 300ms

### Filtering by Status
- Use the status dropdown to filter:
  - All Status (default)
  - Active
  - Inactive
  - On Leave

### Viewing Tailor Details
- Click the eye icon to view complete information
- Shows personal and professional details in separate cards

## Factory for Testing
A TailorFactory is included for generating test data:
```php
Tailor::factory()->count(10)->create();
```

## Future Enhancements
Consider adding:
- Assign tailors to orders
- Track tailor workload and availability
- Performance metrics (orders completed, quality ratings)
- Skill certifications and training records
- Work schedule management
- Commission/payment tracking
