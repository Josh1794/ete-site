/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { Resend } from 'resend';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(formData: FormData) {
  const resend = new Resend(process.env.RESEND_KEY);

  const name = formData.get('name') as string | null;
  const email = formData.get('email') as string | null;
  const eventDate = formData.get('eventDate') as string | null;
  const message = formData.get('message') as string | null;

  const { data, error } = await resend.emails.send({
    from: `${process.env.EMAIL_USER}`,
    to: `${process.env.EMAIL_USER}`,
    subject: `WEBSITE CONTACT FROM ${name}`,
    react: (
      <div>
        <h5>From: {name ?? 'N/A'}</h5>
        <h5>Email: {email ?? 'N/A'}</h5>
        <h5>Event Date: {eventDate ?? 'N/A'}</h5>
        <p>{message ?? 'N/A'}</p>
      </div>
    ),
  });
  console.log(data, error);
}
