import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export default async function sendEmail({ to, subject, text }) {
    await transporter.sendMail({
        from: `'"NextGen" <${process.env.EMAIL_USERNAME}>'`,
        to,
        subject,
        text
    });
}