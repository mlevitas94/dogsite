require('dotenv').config()
const express = require('express')
const nodemailer = require("nodemailer");

const { SERVER_PORT, user, pass } = process.env
const path = require('path')
const app = express();


app.use(express.json());
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
  next()
})

app.use( express.static( `${__dirname}/../dist` ) );


app.post('/email', async (req, res) => {
  const { formType, firstName, lastName, name, email, phone, date, zip, services, petTypes, needs, message } = req.body
  if (!formType) {
    return res.status(401).send('bad request')
  }
  if (formType === 'contact') {
    if (!name || !email || !message) {
      return res.status(500).send('Please fill out all fields')
    }
    try {
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: user, // generated ethereal user
          pass: pass // generated ethereal password
        }
      });

      // send mail with defined transport object
      await transporter.sendMail({
        from: `Nodemailer`, // sender address
        to: 'levitasmc@gmail.com', // list of receivers
        subject: 'Jeffery Rosario website message', // Subject line
        html: `<p>From : ${name}</p> <p>Email : ${email}</p> <p>${message}</p>` // html body
      });
      res.status(200).send('email sent')
    } catch (err) {
      console.log(err)
      res.status(500).send('could not send email')
    }

  }else if(formType === 'request'){
    try {
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: user, // generated ethereal user
          pass: pass // generated ethereal password
        }
      });

      // send mail with defined transport object
      await transporter.sendMail({
        from: `Nodemailer`, // sender address
        to: 'levitasmc@gmail.com', // list of receivers
        subject: `Appointment Request from ${firstName} ${lastName}`, // Subject line
        html: `<p>From : ${firstName} ${lastName}</p> 
        <p>Email : ${email}</p> 
        <p>Phone : ${phone}</p>
        <p>Starting Date : ${date} (YYYY-MM-DD)</p>
        <p>Zip Code : ${zip}</p>
        <p>Services wanted : ${services.join(' / ')}</p>
        <p>Pets : ${petTypes.join(' / ')}</p>
        <p>More Info : ${needs}</p>
        ` // html body
      });
      res.status(200).send('email sent')
    } catch (err) {
      console.log(err)
      res.status(500).send('could not send email')
    }
  }else{
    return res.status(401).send('bad request')
  }

})






app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '../dist/index.html')); })

app.listen(SERVER_PORT, () => console.log(`Now arriving at ${SERVER_PORT}`));