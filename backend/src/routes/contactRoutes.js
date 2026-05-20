import express from "express";
import { Resend } from "resend";

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/send-email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "cassio.leonard@gmail.com",
      subject: `Portfólio - ${subject}`,
      html: `
        <h2>Novo contato pelo portfólio</h2>

        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>

        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "E-mail enviado com sucesso!",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Erro ao enviar e-mail",
    });
  }
});

export default router;