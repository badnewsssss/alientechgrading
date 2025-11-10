import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

interface WelcomeEmailProps {
  email: string;
}

interface AdminNotificationProps {
  email: string;
  timestamp: string;
  totalCount: number;
}

export async function sendWelcomeEmail({ email }: WelcomeEmailProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Alien Tech Grading <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to Alien Tech Grading Waitlist! 🚀',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Alien Tech Grading</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000000;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: #000000; margin: 0; font-size: 32px; font-weight: bold;">
                🛸 Welcome to Alien Tech Grading
              </h1>
            </div>

            <div style="background-color: #1a1a1a; padding: 40px 20px; border-radius: 0 0 12px 12px; border: 2px solid #10b981;">
              <p style="color: #e5e5e5; font-size: 18px; margin-bottom: 20px;">
                Thank you for joining our waitlist!
              </p>

              <p style="color: #a3a3a3; margin-bottom: 20px;">
                You're now on the list to be among the first to experience revolutionary AI-powered card grading. We're working hard to bring you:
              </p>

              <ul style="color: #a3a3a3; margin-bottom: 20px; padding-left: 20px;">
                <li style="margin-bottom: 10px;">⚡ Lightning-fast grading (under 30 seconds)</li>
                <li style="margin-bottom: 10px;">🎯 99.2% accuracy with AI analysis</li>
                <li style="margin-bottom: 10px;">💰 90% cost savings compared to traditional services</li>
                <li style="margin-bottom: 10px;">📊 Real-time market value insights</li>
              </ul>

              <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%); border: 1px solid #10b981; border-radius: 8px; padding: 20px; margin: 30px 0;">
                <h3 style="color: #10b981; margin: 0 0 10px 0;">🎁 Early Access Benefits</h3>
                <ul style="color: #a3a3a3; margin: 0; padding-left: 20px;">
                  <li>50% off your first month</li>
                  <li>100 free grading credits</li>
                  <li>Priority support</li>
                  <li>Exclusive beta features</li>
                </ul>
              </div>

              <p style="color: #a3a3a3; margin-bottom: 20px;">
                We'll notify you as soon as we launch. In the meantime, follow us on social media for updates and sneak peeks!
              </p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://github.com/badnewsssss/alientechgrading" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); color: #000000; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold; font-size: 16px;">
                  View on GitHub
                </a>
              </div>

              <p style="color: #737373; font-size: 14px; text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #333333;">
                Alien Tech Grading - The Future of Card Authentication<br>
                <a href="#" style="color: #10b981; text-decoration: none;">Unsubscribe</a>
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending welcome email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error };
  }
}

export async function sendAdminNotification({
  email,
  timestamp,
  totalCount,
}: AdminNotificationProps) {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      console.warn('ADMIN_EMAIL not set, skipping admin notification');
      return { success: false, error: 'Admin email not configured' };
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Alien Tech Grading <onboarding@resend.dev>',
      to: [adminEmail],
      subject: `New Waitlist Signup: ${email}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Waitlist Signup</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #10b981;">🎉 New Waitlist Signup</h2>

            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Timestamp:</strong> ${new Date(timestamp).toLocaleString()}</p>
              <p><strong>Total Waitlist Count:</strong> ${totalCount}</p>
            </div>

            <p style="margin-top: 20px; color: #666;">
              This is an automated notification from Alien Tech Grading.
            </p>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending admin notification:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return { success: false, error };
  }
}
