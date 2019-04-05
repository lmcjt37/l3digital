const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
const port = 4444
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.listen(port, () => {
    console.log('We are live on port 4444')
})

app.get('/', (req, res) => {
    res.send('Welcome to my api')
})

app.post('/api/submit_email', (req, res) => {
    let { name, email, message, auth } = req.body
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.email',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASSWORD,
        },
    })

    let options = {
        from: `${name} <${email}>`,
        to: 'hello@l3digital.co.uk',
        subject: 'L3 Digital - Contact Form',
        text: message,
    }

    transporter.sendMail(options, (error, response) => {
        if (error) {
            res.send(error)
        } else {
            res.send('Success')
        }
        smtpTransport.close()
    })
})
