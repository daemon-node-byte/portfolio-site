import { ServerClient } from 'postmark';

interface EmailTemplate {
  To: string;
  From: string;
  Subject: string;
  TextBody?: string;
  HtmlBody?: string;
  MessageStream?: string;
}
const HTMLTemplate = (senderName: string, message: string, senderEmail: string, senderPhone: string) => {
  return `
    <div style="font-family: Arial, sans-serif; font-size: 1rem;">
      <h1 style="font-size: 1.5rem; font-weight: bold;">Portfolio Contact Form Submission</h1>
      <p><strong>From:</strong> ${senderName}</p>
      <p><strong>Email:</strong> ${senderEmail}</p>
      <p><strong>Phone:</strong> ${senderPhone}</p>
      <p>${message}</p>
    </div>
  `
}
const runtimeConfig = useRuntimeConfig();

const client = new ServerClient(runtimeConfig.mailApiKey);
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const emailTemplate: EmailTemplate = {
      To: runtimeConfig.ownerEmail,
      From: 'no-reply@joshmclain.com',
      MessageStream: 'Outbound',
      Subject: `Portfolio Contact Form Submission from ${body.name} <${body.email}>`,
      HtmlBody: HTMLTemplate(body.name, body.message, body.email, body.phone),
    }
     const isSuccessful = await client.sendEmail(emailTemplate);
    if (isSuccessful) {
      return event.respondWith(new Response('Email sent successfully', { status: 200 }));
    }
  } catch (error) {
    console.error(error);
    return new Response('Error sending email', { status: 500 });
  }
})
