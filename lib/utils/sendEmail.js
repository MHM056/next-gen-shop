import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export default async function sendEmail({ to, subject, text, html }) {
    await transporter.sendMail({
        from: `'"NextGen" <${process.env.EMAIL_USERNAME}>'`,
        to,
        subject,
        text,
        html
    });
}