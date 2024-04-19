const nodeMailer=require("nodemailer");
const fs =require ("fs");
const ejs=require("ejs");
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

//ejs file
let templateString=fs.readFileSync("./Template/emailTemplate.ejs","utf-8");
const htmlstring=ejs.render(templateString,{
      name:options.name,
      otp:options.otp
})




  
const mailOptions={
    from:"jswati603@gmail.com",
    to:options.to,
    subject:options.subject,
    // text:options.text,
    html:htmlstring
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
    subject:"send important information",
    // text:"Please find the notes of class note"
    name:"Ramesh",
    otp:"1234"

}

sendEmail1(object).then((email_sent_info)=>{
    console.log(email_sent_info);

})
.catch((error)=>{
    console.log(error)
})