const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");
const { getMaxListeners } = require("process");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const views_path = path.join(__dirname, "views");
app.use(express.static(views_path));

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: 'bibekpradhan840@gmail.com',
            pass: 'Baklauri@123'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'bibekpradhan840@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log("Email sent: " + info.response);
            res.send("sucess");
        }
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})