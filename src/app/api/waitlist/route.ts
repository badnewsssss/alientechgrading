import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const waitlistSchema = z.object({
  email: z.string().email('Invalid email address'),
});

// Store waitlist entries (in production, use a database)
const waitlistFile = process.cwd() + '/data/waitlist.json';

interface WaitlistEntry {
  email: string;
  timestamp: string;
  ip?: string;
  userAgent?: string;
}

async function getWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const fs = require('fs').promises;
    const data = await fs.readFile(waitlistFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveWaitlist(entries: WaitlistEntry[]): Promise<void> {
  const fs = require('fs').promises;
  const path = require('path');

  // Ensure directory exists
  const dir = path.dirname(waitlistFile);
  await fs.mkdir(dir, { recursive: true });

  await fs.writeFile(waitlistFile, JSON.stringify(entries, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const result = waitlistSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid email address', details: result.error.issues },
        { status: 400 }
      );
    }

    const { email } = result.data;

    // Get existing waitlist
    const waitlist = await getWaitlist();

    // Check for duplicates
    const exists = waitlist.some(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    // Add new entry
    const newEntry: WaitlistEntry = {
      email,
      timestamp: new Date().toISOString(),
      ip: request.ip || request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    waitlist.push(newEntry);
    await saveWaitlist(waitlist);

    // Send welcome email (don't block on email sending)
    if (process.env.RESEND_API_KEY) {
      const { sendWelcomeEmail, sendAdminNotification } = await import('@/lib/email');

      sendWelcomeEmail({ email }).catch((err) => {
        console.error('Failed to send welcome email:', err);
      });

      sendAdminNotification({
        email,
        timestamp: newEntry.timestamp,
        totalCount: waitlist.length,
      }).catch((err) => {
        console.error('Failed to send admin notification:', err);
      });
    }

    return NextResponse.json(
      {
        message: 'Successfully joined the waitlist! Check your email for confirmation.',
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Simple admin endpoint to view waitlist count
  // In production, add authentication
  const waitlist = await getWaitlist();

  return NextResponse.json({
    count: waitlist.length,
    message: `${waitlist.length} users on the waitlist`,
  });
}
