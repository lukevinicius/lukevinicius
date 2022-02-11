import nodemailer from 'nodemailer';

export async function sendEmail(email, name, message, phone) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'lucasviniciusaalves@gmail.com', // generated ethereal user
      pass: '!Luv120mlj#', // generated ethereal password
    },
  });
  await transporter.sendMail({
    from: 'lucasviniciusaalves@gmail.com', // sender address
    to: 'lucasviniciusaalves@gmail.com', // list of receivers"
    subject: 'Contato Portfolio', // Subject line
    text: `Olá mestre, ${name} entrou em contato seu email é: ${email} e Whatsapp: ${phone}, e sua mensagem foi: ${message}`, // plain text body
    html: `<b>Olá mestre, ${name} entrou em contato seu email é: ${email} e Whatsapp: ${phone}, e sua mensagem foi: ${message}</b>`, // html body
  });
  await transporter.sendMail({
    from: 'lucasviniciusaalves@gmail.com', // sender address
    to: email, // list of receivers"
    subject: 'Email automático', // Subject line
    text: `Olá, ${name} obrigado por entrar em contato, em breve vou estar lhe respondendo para podermos conversar sobre as suas necessidades`, // plain text body
    html: `<b>Olá, ${name} obrigado por entrar em contato, em breve vou estar lhe respondendo para podermos conversar sobre as suas necessidades</b>`, // html body
  });
}
