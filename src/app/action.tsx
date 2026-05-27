'use server';
import { Resend } from 'resend';

const TO_ADDRESS = 'hello+inquiries@elizabethtreimanisevents.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sanitizeHeader = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();
const escapeDisplayName = (s: string) => s.replace(/["\\]/g, '');

export default async function handler(formData: FormData) {
  try {
    if (!process.env.RESEND_KEY || !process.env.EMAIL_USER) {
      console.error('Missing RESEND_KEY or EMAIL_USER env var');
      return { error: true, message: 'Email service is not configured.' };
    }

    // Honeypot: if a bot filled the hidden "company" field, pretend success.
    if ((formData.get('company') as string | null)?.trim()) {
      return { error: false, data: null };
    }

    const name = (formData.get('name') as string | null)?.trim() ?? '';
    const email = (formData.get('email') as string | null)?.trim() ?? '';
    const eventDate = (formData.get('eventDate') as string | null)?.trim() ?? '';
    const message = (formData.get('message') as string | null)?.trim() ?? '';
    const eventType = (formData.get('eventType') as string | null)?.trim() ?? '';

    if (!name || name.length > 200) {
      return { error: true, message: 'Please provide a valid name.' };
    }
    if (!email || email.length > 200 || !EMAIL_RE.test(email)) {
      return { error: true, message: 'Please provide a valid email address.' };
    }
    if (!eventType || eventType.length > 100) {
      return { error: true, message: 'Please select an event type.' };
    }
    if (!message || message.length > 5000) {
      return { error: true, message: 'Please provide a message under 5000 characters.' };
    }

    const resend = new Resend(process.env.RESEND_KEY);

    const { data, error } = await resend.emails.send({
      from: `"${escapeDisplayName(sanitizeHeader(name))} via ETE site" <${process.env.EMAIL_USER}>`,
      to: TO_ADDRESS,
      replyTo: `"${escapeDisplayName(sanitizeHeader(name))}" <${email}>`,
      subject: sanitizeHeader(`WEBSITE CONTACT FROM ${name}`),
      react: (
        <div>
          <h5>From: {name}</h5>
          <h5>Email: {email}</h5>
          <h5>Event Type: {eventType}</h5>
          <h5>Event Date: {eventDate || 'N/A'}</h5>
          <p>{message}</p>
        </div>
      ),
    });

    if (error) {
      return { error: true, message: error.message };
    }

    return { error: false, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: true, message: 'Failed to send email' };
  }
}
