process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfólio: ${subject}`,
      html: `
        <h2>Novo contato do portfólio</h2>

        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>

        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email enviado com sucesso!",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Erro ao enviar email",
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
