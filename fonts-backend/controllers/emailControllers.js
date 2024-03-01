const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Fonts Downloaded!",
    text: `${email} has downloaded the font`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(201).json({ status: 201, info });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(401).json({ status: 401, error: error.message });
  }
});

module.exports = { sendEmail };