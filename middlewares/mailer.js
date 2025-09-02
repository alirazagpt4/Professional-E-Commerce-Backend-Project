const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth:{
        user:'infoaliraza22@gmail.com',
        pass:'wbns hfdf hnzl arsg'
    }
});

const sendEMail = async (to , subject , text) =>{
    await transporter.sendMail({
         from:'infoaliraza22@gmail.com',
         to,
         subject,
         text
    });
};

module.exports = sendEMail;