var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lakshmi6621.gurram@gmail.com',
    pass: '9959669746'
  }
});

const sendMail=(email,text,cb)=>{
    var mailOptions = {
        from: 'lakshmi6621.gurram@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          cb(error,null);
        } else {
          console.log('Email sent: ' + info.response);
          cb(null,data);
        }
      });
}
module.exports=sendMail;