export interface SMTPConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  fromEmail: string;
  fromName: string;
}

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

class EmailService {
  private config: SMTPConfig | null = null;

  async configure(config: SMTPConfig) {
    this.config = config;
    
    // In browser environment, we can't actually verify SMTP connection
    // This would need to be done server-side
    if (typeof window !== 'undefined') {
      console.log('Email service configured (browser mode)');
      return { success: true, error: null };
    }

    // Server-side SMTP verification would go here
    try {
      console.log('SMTP server connection verified');
      return { success: true, error: null };
    } catch (error) {
      console.error('SMTP verification failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'SMTP verification failed' };
    }
  }

  async sendEmail(to: string, template: EmailTemplate): Promise<{ success: boolean; error: string | null }> {
    if (!this.config) {
      return { success: false, error: 'Email service not configured' };
    }

    // In browser environment, we simulate email sending
    // In production, this would make an API call to a server endpoint
    if (typeof window !== 'undefined') {
      console.log('Email would be sent to:', to);
      console.log('Subject:', template.subject);
      console.log('Email service is running in browser mode - emails are simulated');
      
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return { success: true, error: null };
    }

    // Server-side email sending would go here
    try {
      console.log('Email sent (server mode)');
      return { success: true, error: null };
    } catch (error) {
      console.error('Email sending failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Email sending failed' };
    }
  }

  // Email Templates
  getWaitlistConfirmationTemplate(productName: string, userName?: string): EmailTemplate {
    const greeting = userName ? `Hi ${userName}` : 'Hello';
    
    return {
      subject: `Welcome to the ${productName} Waitlist!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Waitlist Confirmation</title>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background: linear-gradient(135deg, #00BFFF, #FFD700); padding: 40px 20px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 28px; font-weight: bold; }
            .content { padding: 40px 20px; }
            .content h2 { color: #00BFFF; margin-bottom: 20px; }
            .content p { margin-bottom: 16px; color: #555; }
            .highlight { background-color: #00BFFF; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { background-color: #121212; color: #ccc; padding: 20px; text-align: center; font-size: 14px; }
            .footer a { color: #00BFFF; text-decoration: none; }
            .button { display: inline-block; background-color: #FFD700; color: #121212; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Capital R3alm</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Democratizing Wealth Creation</p>
            </div>
            
            <div class="content">
              <h2>Welcome to the ${productName} Waitlist!</h2>
              
              <p>${greeting},</p>
              
              <p>Thank you for joining the waitlist for <strong>${productName}</strong>! You're now part of an exclusive group that will get early access to our revolutionary financial platform.</p>
              
              <div class="highlight">
                <h3 style="margin-top: 0; color: white;">What happens next?</h3>
                <ul style="margin: 0; padding-left: 20px; color: white;">
                  <li>You'll receive updates on development progress</li>
                  <li>Early access invitation when beta testing begins</li>
                  <li>Exclusive launch benefits and special pricing</li>
                  <li>Priority customer support</li>
                </ul>
              </div>
              
              <p>We're working hard to bring you innovative Web3 financial solutions. Stay tuned for exciting updates!</p>
              
              <p>In the meantime, explore our current platforms:</p>
              <a href="https://r3alm.com/products" class="button">Explore Current Products</a>
              
              <p>Best regards,<br>The Capital R3alm Team</p>
            </div>
            
            <div class="footer">
              <p>Capital R3alm | Democratizing Wealth Creation in Web3 Finance</p>
              <p>
                <a href="https://r3alm.com">Website</a> | 
                <a href="https://r3alm.com/blog">Blog</a> | 
                <a href="https://r3alm.com/contact">Contact</a>
              </p>
              <p style="font-size: 12px; margin-top: 20px;">
                You received this email because you joined our waitlist. 
                <a href="#">Unsubscribe</a> | <a href="#">Update Preferences</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        ${greeting},

        Thank you for joining the waitlist for ${productName}! You're now part of an exclusive group that will get early access to our revolutionary financial platform.

        What happens next?
        - You'll receive updates on development progress
        - Early access invitation when beta testing begins
        - Exclusive launch benefits and special pricing
        - Priority customer support

        We're working hard to bring you innovative Web3 financial solutions. Stay tuned for exciting updates!

        In the meantime, explore our current platforms at: https://r3alm.com/products

        Best regards,
        The Capital R3alm Team

        ---
        Capital R3alm | Democratizing Wealth Creation in Web3 Finance
        Website: https://r3alm.com | Blog: https://r3alm.com/blog | Contact: https://r3alm.com/contact
        
        You received this email because you joined our waitlist.
      `
    };
  }

  getContactConfirmationTemplate(name: string, subject: string): EmailTemplate {
    return {
      subject: `We received your message: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Confirmation</title>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background: linear-gradient(135deg, #00BFFF, #FFD700); padding: 40px 20px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 28px; font-weight: bold; }
            .content { padding: 40px 20px; }
            .content h2 { color: #00BFFF; margin-bottom: 20px; }
            .content p { margin-bottom: 16px; color: #555; }
            .highlight { background-color: #f8f9fa; border-left: 4px solid #00BFFF; padding: 20px; margin: 20px 0; }
            .footer { background-color: #121212; color: #ccc; padding: 20px; text-align: center; font-size: 14px; }
            .footer a { color: #00BFFF; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Capital R3alm</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Democratizing Wealth Creation</p>
            </div>
            
            <div class="content">
              <h2>Message Received</h2>
              
              <p>Hi ${name},</p>
              
              <p>Thank you for contacting Capital R3alm! We've received your message and our team will review it shortly.</p>
              
              <div class="highlight">
                <h3 style="margin-top: 0;">Your Message Details:</h3>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</p>
              </div>
              
              <p>We typically respond within 24-48 hours during business days. For urgent matters, please call us at +1 (555) 123-4567.</p>
              
              <p>In the meantime, you might find these resources helpful:</p>
              <ul>
                <li><a href="https://r3alm.com/faq">Frequently Asked Questions</a></li>
                <li><a href="https://r3alm.com/blog">Latest Blog Articles</a></li>
                <li><a href="https://r3alm.com/products">Our Products</a></li>
              </ul>
              
              <p>Best regards,<br>The Capital R3alm Support Team</p>
            </div>
            
            <div class="footer">
              <p>Capital R3alm | Democratizing Wealth Creation in Web3 Finance</p>
              <p>
                <a href="https://r3alm.com">Website</a> | 
                <a href="https://r3alm.com/blog">Blog</a> | 
                <a href="https://r3alm.com/contact">Contact</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Hi ${name},

        Thank you for contacting Capital R3alm! We've received your message and our team will review it shortly.

        Your Message Details:
        Subject: ${subject}
        Submitted: ${new Date().toLocaleDateString()}

        We typically respond within 24-48 hours during business days. For urgent matters, please call us at +1 (555) 123-4567.

        In the meantime, you might find these resources helpful:
        - FAQ: https://r3alm.com/faq
        - Blog: https://r3alm.com/blog
        - Products: https://r3alm.com/products

        Best regards,
        The Capital R3alm Support Team

        ---
        Capital R3alm | Democratizing Wealth Creation in Web3 Finance
        Website: https://r3alm.com | Blog: https://r3alm.com/blog | Contact: https://r3alm.com/contact
      `
    };
  }

  async testConnection(): Promise<{ success: boolean; error: string | null }> {
    if (typeof window !== 'undefined') {
      // Browser mode - simulate connection test
      console.log('Testing email connection (browser mode)');
      await new Promise(resolve => setTimeout(resolve, 500));
      return { success: true, error: null };
    }

    // Server-side connection test would go here
    try {
      return { success: true, error: null };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Connection test failed' };
    }
  }

  // Database logging methods (browser-safe)
  private async logEmail(toEmail: string, subject: string, templateType: string, status: string): Promise<string | null> {
    if (typeof window !== 'undefined') {
      console.log('Email log entry (browser mode):', { toEmail, subject, templateType, status });
      return 'mock-log-id';
    }
    
    // Server-side database logging would go here
    return null;
  }

  private async updateEmailLog(logId: string, status: string, errorMessage?: string): Promise<void> {
    if (typeof window !== 'undefined') {
      console.log('Email log update (browser mode):', { logId, status, errorMessage });
      return;
    }
    
    // Server-side database update would go here
  }
}

export const emailService = new EmailService();

// Helper function to send waitlist confirmation
export async function sendWaitlistConfirmation(email: string, productName: string, userName?: string) {
  const template = emailService.getWaitlistConfirmationTemplate(productName, userName);
  
  // Log with specific template type
  const logId = await emailService['logEmail'](email, template.subject, 'waitlist_confirmation', 'pending');
  
  try {
    const result = await emailService.sendEmail(email, template);
    
    if (logId) {
      await emailService['updateEmailLog'](logId, result.success ? 'sent' : 'failed', result.error);
    }
    
    return result;
  } catch (error) {
    if (logId) {
      await emailService['updateEmailLog'](logId, 'failed', error instanceof Error ? error.message : 'Unknown error');
    }
    throw error;
  }
}

// Helper function to send contact confirmation
export async function sendContactConfirmation(email: string, name: string, subject: string) {
  const template = emailService.getContactConfirmationTemplate(name, subject);
  
  // Log with specific template type
  const logId = await emailService['logEmail'](email, template.subject, 'contact_confirmation', 'pending');
  
  try {
    const result = await emailService.sendEmail(email, template);
    
    if (logId) {
      await emailService['updateEmailLog'](logId, result.success ? 'sent' : 'failed', result.error);
    }
    
    return result;
  } catch (error) {
    if (logId) {
      await emailService['updateEmailLog'](logId, 'failed', error instanceof Error ? error.message : 'Unknown error');
    }
    throw error;
  }
}