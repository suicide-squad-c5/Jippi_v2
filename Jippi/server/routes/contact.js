const contactRouter = require("express").Router();
const nodemailer = require("nodemailer");

const main = async () => {
  const testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "viva.skiles@ethereal.email",
      pass: "gf38BRQASfN7y1wNfw",
    },
  });

  // sent user message per email.
  contactRouter.post("/", async (req, res) => {
    console.log("im here");
    try {
      const emailInfo = await transporter.sendMail({
        // send mail with defined transport object
        from: `${req.body.userName} <${req.body.userEmail}>`,
        to: "ghassenjday2001@gmail.com",
        subject: "Feedback ✔",
        text: `${req.body.userMessage}`,
      });
      console.log("user text ", emailInfo);
      res.send({ status: 200 });
    } catch (e) {
      console.log(e);
    }
  });
};
main().catch(console.error);

module.exports = contactRouter;
