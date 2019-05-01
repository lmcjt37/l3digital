const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('*', (req, res) => {
    res.status(200).send(`Timestamp:: ${new Date()}`)
})

app.post('*', (req, res) => {
    if (!req.body) {
        res.status(400).send('Bad Request.')
    }

    let { name, email, message, _gotcha } = req.body

    if (_gotcha.length > 0) {
        res.status(500).send('Not authorised.')
    }

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
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
        html: `<p>${message}</p>`,
    }

    transporter.sendMail(options, (error, response) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send('Success.')
        }
        transporter.close()
    })
})

app.all('*', (req, res) => {
    res.status(405).send('Invalid Method.')
})

module.exports = app
