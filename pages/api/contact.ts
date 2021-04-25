import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { buildMailTemplate } from "../../utils/helper";

async function handleMailer(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, phone, message } = req.body;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "hp0941906@gmail.com",
      pass: "harry56964",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Harry Potter" <hp0941906@gmail.com>', // sender address
    to: "shankarsawant81@gmail.com, vijusawant81@gmail.com", // list of receivers
    subject: "✨ New Customer ✨", // Subject line
    text: "Hello world?", // plain text body
    html: buildMailTemplate({ name, email, phone, message }), // html body
  });

  -res.status(200).json({ info });
}

export default handleMailer;
