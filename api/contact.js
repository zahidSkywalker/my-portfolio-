import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ionzahid0987@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #334155; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #475569;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-left: 4px solid #0ea5e9; border-radius: 4px;">
            <p style="margin: 0; color: #0369a1; font-size: 14px;">
              This message was sent from your portfolio contact form at ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Zahidul Islam',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            Thank you for reaching out! 👋
          </h2>
          
          <p style="line-height: 1.6; color: #475569;">
            Hi ${name},
          </p>
          
          <p style="line-height: 1.6; color: #475569;">
            Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.
          </p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
          </div>
          
          <p style="line-height: 1.6; color: #475569;">
            In the meantime, feel free to check out my latest projects or connect with me on social media:
          </p>
          
          <div style="margin: 20px 0;">
            <a href="https://github.com/zahidSkywalker" style="display: inline-block; margin: 5px; padding: 10px 20px; background: #181717; color: white; text-decoration: none; border-radius: 5px;">GitHub</a>
            <a href="https://linkedin.com/in/zahidul-islam" style="display: inline-block; margin: 5px; padding: 10px 20px; background: #0077b5; color: white; text-decoration: none; border-radius: 5px;">LinkedIn</a>
            <a href="https://wa.me/8801842089174" style="display: inline-block; margin: 5px; padding: 10px 20px; background: #25D366; color: white; text-decoration: none; border-radius: 5px;">WhatsApp</a>
          </div>
          
          <p style="line-height: 1.6; color: #475569;">
            Best regards,<br>
            <strong>Zahidul Islam</strong><br>
            MERN Stack Developer & 3D Artist
          </p>
          
          <div style="margin-top: 30px; padding: 15px; background: #f0f9ff; border-left: 4px solid #0ea5e9; border-radius: 4px;">
            <p style="margin: 0; color: #0369a1; font-size: 12px;">
              This is an automated response. Please don't reply to this email.
            </p>
          </div>
        </div>
      `
    };

    // Send auto-reply
    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({ 
      message: 'Message sent successfully! Check your email for confirmation.',
      success: true 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again or contact me directly.',
      success: false 
    });
  }
}