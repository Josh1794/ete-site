import { Resend } from 'resend';

export default async function handler(req, res) {
  const resend = new Resend(process.env.RESEND_KEY);

  const { name, email, message } = req.body;
  const { data, error } = await resend.emails.send({
    from: `${process.env.EMAIL_USER}`,
    to: `${process.env.EMAIL_USER}`,
    subject: `WEBSITE CONTACT FORM SUBMISSION FROM ${name}`,
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
    console.log(error);
    return res.status(400).json(error);
  }

  res.status(200).json(data);
  res.status(200).redirect('/');
}
