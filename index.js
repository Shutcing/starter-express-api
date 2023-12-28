// Import express into our project
const express = require("express");

// Creating an instance of express function
const app = express();

// The port we want our project to run on
const PORT = 3000;

// Express should add our path
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Render the index.html when the user visit our project port
app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

// Post route to handle retrieving data from HTML form to server
app.post("/send_email", (req, res) => {
  const mailOptions = {
    from: "shutcing@gmail.com",
    to: "shutcing@gmail.com",
    subject: "Заявка",
    text: `Имя:  ${req.body.name} \n Фамилия: ${req.body.surname} \n Почта: ${req.body.mail}`,
  };
  transporter.sendMail(mailOptions);
  return res.redirect("/success.html");
});

// require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shutcing@gmail.com",
    pass: "jfjf aqrj xidi kiog",
  },
});

// Express allows us to listen to the PORT and trigger a console.log() when you visit the port
app.listen(PORT, () => {
  console.log(`Server is currently ok 🏃‍♂️ on port ${PORT}`);
});
