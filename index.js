const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", () => {
  resizeBy.send("welcome to monit");
});

app.post("/api/forma", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    port: 456,
    auth: {
      user: "buksango123@gmail.com",
      pass: "qlufddfuzxgmzvay",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "buksango123@gmail.com",
    subject: `[문의메일] ${data.name}`,
    html: `
    <h3>[MONIT 홈페이지에서 접수된 문의사항]</h3>
    <ul>
    <li>Name : ${data.name} </li>
    <li>Email : ${data.email} </li>
    </ul>

    <p>${data.message}</p>
    `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Sucess");
    }
  });

  smtpTransport.close();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
});
