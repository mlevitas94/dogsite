require('dotenv').config()
const express = require('express')
const nodemailer = require("nodemailer");

const {SERVER_PORT, user, pass} = process.env
const path = require('path')
const app = express();


app.use(express.json());
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
    next()
})

// app.use( express.static( `${__dirname}/../build` ) );


app.post('/email', async (req,res) => {
    const {name, email, message} = req.body
    if(!name || !email || !message){
      return res.status(500).send('Please fill out all fields')
    }
    try{
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
            to: 'danielleelmers@gmail.com', // list of receivers
            subject: 'Message from portfolio', // Subject line
            html: `<p>from ${name}</p> <p>${email}</p> <p>${message}</p>` // html body
          });
          res.status(200).send('email sent')
    }catch(err){
        console.log(err)
        res.status(500).send('could not send email')
    }
    
  })






app.get('*', (req, res)=>{  res.sendFile(path.join(__dirname, '../build/index.html'));})

massive(DB_URL).then(db => {
    console.log('db connected')
    app.set('db', db);
    app.listen(SERVER_PORT, () => console.log(`Now arriving at ${SERVER_PORT}`));
  })