# Waitlist Feature

## Overview

The waitlist feature allows users to sign up for early access to Alien Tech Grading. It includes email validation, duplicate prevention, and automatic email notifications.

## Features

- ✅ Email validation using Zod
- ✅ Duplicate email prevention
- ✅ Automatic welcome emails to users
- ✅ Admin notifications for new signups
- ✅ JSON file storage (easily upgradable to database)
- ✅ IP address and user agent tracking
- ✅ RESTful API design

## API Endpoints

### POST /api/waitlist

Submit a new email to the waitlist.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Success Response (201):**
```json
{
  "message": "Successfully joined the waitlist! Check your email for confirmation.",
  "success": true
}
```

**Error Responses:**

- 400: Invalid email format
- 409: Email already on waitlist
- 500: Internal server error

### GET /api/waitlist

Get the total count of users on the waitlist.

**Response (200):**
```json
{
  "count": 42,
  "message": "42 users on the waitlist"
}
```

## Environment Variables

Required environment variables in `.env.local`:

```env
# Email Service (Resend)
RESEND_API_KEY=re_your_api_key_here
EMAIL_FROM=Alien Tech Grading <noreply@yourdomain.com>
ADMIN_EMAIL=admin@yourdomain.com
```

## Email Templates

### Welcome Email

Sent automatically to users when they join the waitlist. Includes:
- Welcome message
- List of benefits (50% off, 100 free credits, etc.)
- Call-to-action to view GitHub repo
- Unsubscribe link

### Admin Notification

Sent to admin email when new user signs up. Includes:
- User email
- Timestamp
- Total waitlist count

## Data Storage

Currently using JSON file storage at `/data/waitlist.json`:

```json
[
  {
    "email": "user@example.com",
    "timestamp": "2025-11-10T04:52:10.080Z",
    "ip": "192.168.1.1",
    "userAgent": "Mozilla/5.0..."
  }
]
```

## Future Enhancements

- [ ] Upgrade to database storage (PostgreSQL/Supabase)
- [ ] Add referral tracking
- [ ] Email verification with confirmation link
- [ ] Waitlist position display
- [ ] Unsubscribe functionality
- [ ] Analytics dashboard for admin
- [ ] Rate limiting
- [ ] CSV export functionality
- [ ] Automated email campaigns

## Testing

Test the waitlist locally:

```bash
# Submit email
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'

# Get count
curl http://localhost:3000/api/waitlist
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install resend
   ```

2. Get Resend API key:
   - Sign up at https://resend.com
   - Create an API key
   - Add to `.env.local`

3. Configure email settings:
   - Set `EMAIL_FROM` with your verified domain
   - Set `ADMIN_EMAIL` for notifications

4. Test the integration:
   - Submit test email via form
   - Check inbox for welcome email
   - Verify admin notification

## Security Considerations

- ✅ Email validation prevents invalid submissions
- ✅ Duplicate prevention avoids spam
- ✅ IP tracking for abuse monitoring
- ⚠️ Rate limiting not yet implemented
- ⚠️ Admin endpoint not authenticated (TODO)

## Troubleshooting

**Emails not sending:**
- Check `RESEND_API_KEY` is set correctly
- Verify domain is verified in Resend
- Check server logs for errors
- Email sending failures don't block API response

**Data not saving:**
- Ensure `/data` directory exists
- Check write permissions
- View server logs for errors

**Duplicate errors:**
- Email matching is case-insensitive
- Check existing entries in `waitlist.json`
