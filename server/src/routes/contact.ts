import express, { Request, Response } from 'express';
import Contact from '../models/Contact';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Try to save to MongoDB only if connected
    if (mongoose.connection.readyState === 1) {
      try {
        const contact = new Contact({ name, email, message });
        await contact.save();
        console.log('✅ Contact saved to database:', { name, email });
      } catch (dbError: any) {
        console.error('⚠️  Database save failed:', dbError.message);
        // Continue even if DB save fails
      }
    } else {
      console.log('⚠️  MongoDB not connected, skipping database save');
    }

    // Send email notification
    let emailSent = false;
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `Portfolio Contact from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        });
        console.log('📧 Email sent successfully to:', process.env.EMAIL_USER);
        emailSent = true;
      } catch (emailError: any) {
        console.error('❌ Email sending failed:', emailError.message);
      }
    } else {
      console.log('⚠️  Email not configured');
    }

    // Return success if at least email was sent
    if (emailSent || mongoose.connection.readyState === 1) {
      res.status(201).json({ 
        message: 'Message sent successfully',
        success: true 
      });
    } else {
      res.status(500).json({ 
        error: 'Failed to send message. Please try again later.',
        details: 'Email and database are not available'
      });
    }
  } catch (error: any) {
    console.error('❌ Contact form error:', error.message);
    res.status(500).json({ 
      error: 'Failed to send message',
      details: error.message 
    });
  }
});

// Get all contacts (for admin)
router.get('/', async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

export default router;
