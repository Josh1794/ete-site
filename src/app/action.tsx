'use server';
import { Resend } from 'resend';
interface FormData {
  name: string;
  email: string;
  message: string;
}
export default async function handler(req: FormData, res: any) {
  const resend = new Resend(process.env.RESEND_KEY);

  const name = req.get('name');
  const email = req.get('email');
  const message = req.get('message');

  const { data, error } = await resend.emails.send({
    from: `${process.env.EMAIL_USER}`,
    to: `${process.env.EMAIL_USER}`,
    subject: `WEBSITE CONTACT FROM ${name}`,
    react: (
      <div>
        <h5>From: {name}</h5>
        <h5>Email: {email}</h5>
        <p>{message}</p>
      </div>
    ),
  });
  if (error) {
    return res.status(400).json(error);
  }
}
