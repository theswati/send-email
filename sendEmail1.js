const nodeMailer=require("nodemailer");
const path=require("path");


const sendEmail1=async(options)=>{
    //transporter object

    let transport=nodeMailer.createTransport(
      {
       service:"gmail",
       auth:{
        user:"jswati603@gmail.com",
        pass:"bdskimbxwilktovq"
       }
    }
)
  
const mailOptions={
    from:"jswati603@gmail.com",
    to:options.to,
    subject:options.subject,
    text:options.text,
}

try{
    const email_sent_info=await transport.sendMail(mailOptions);
    return email_sent_info;
}

catch(error){
    console.log(error);
}
}





object={
    to:"swathi@lyrostech.com",
    subject:"send important announcement",
    text:"Please find the notes of class note"

}

sendEmail1(object).then((email_sent_info)=>{
    console.log(email_sent_info);

})
.catch((error)=>{
    console.log(error)
})