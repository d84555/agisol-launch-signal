
export interface SMTPConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  encryption: 'none' | 'tls' | 'ssl';
}

export class NotificationService {
  private static adminEmail = 'm.asadmahmood21@gmail.com';
  private static smtpConfig: SMTPConfig | null = null;

  static setSmtpConfig(config: SMTPConfig): void {
    this.smtpConfig = config;
    localStorage.setItem('smtp_config', JSON.stringify(config));
  }

  static getSmtpConfig(): SMTPConfig | null {
    if (!this.smtpConfig) {
      const storedConfig = localStorage.getItem('smtp_config');
      if (storedConfig) {
        this.smtpConfig = JSON.parse(storedConfig);
      }
    }
    return this.smtpConfig;
  }

  static async sendSignupNotification(userEmail: string): Promise<boolean> {
    const config = this.getSmtpConfig();
    
    if (!config) {
      console.warn('SMTP configuration not set, unable to send email notification');
      return false;
    }
    
    try {
      // In a real app, this would use a server-side API or edge function to send the email
      // For this mock implementation, we'll just log the details
      console.log(`[EMAIL NOTIFICATION] 
        To: ${this.adminEmail}
        Subject: New User Signup on agisol.ai
        Body: A new user with email ${userEmail} has signed up for the waitlist.
        Using SMTP: ${config.host}:${config.port}
      `);
      
      return true;
    } catch (error) {
      console.error('Failed to send notification email:', error);
      return false;
    }
  }
}

// Store user emails
export class UserStore {
  static saveUserEmail(email: string): void {
    const userEmails = this.getUserEmails();
    if (!userEmails.includes(email)) {
      userEmails.push(email);
      localStorage.setItem('waitlist_users', JSON.stringify(userEmails));
    }
  }
  
  static getUserEmails(): string[] {
    const storedEmails = localStorage.getItem('waitlist_users');
    return storedEmails ? JSON.parse(storedEmails) : [];
  }
  
  static getUserCount(): number {
    return this.getUserEmails().length;
  }
}
