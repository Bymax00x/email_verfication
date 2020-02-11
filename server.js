require("dotenv").config();
const nodemailer = require("nodemailer");

//step 1

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alchemists977@gmail.com",
    pass: "check001"
  }
});

let mailOptions = {
  from: " bymaxmndr@gmail.com",
  to: "runalmanandhar@gmail.com",
  subject: "checking the shit",
  text: "working "
};

//step 3:
transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Error occurs", err);
  } else {
    console.log("Email sent bitch");
  }
});
