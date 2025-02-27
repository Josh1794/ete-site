/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { Resend } from 'resend';
interface FormData {
  [x: string]: any;
  name: string;
  email: string;
  message: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(formData: FormData, res: any) {
  const resend = new Resend(process.env.RESEND_KEY);

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

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
  console.log(data);
  if (error) {
    return res.status(400).json(error);
  }
}
