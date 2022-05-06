import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "3d1374a7dc2bcb",
        pass: "d8ab1e0e498e0a"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
             to: "Marcus Martins <vini.mark2002@gmail.com>",
            subject,
            html: body,
        });
    };
}