import nodemailer from "nodemailer";

 export const sendEmail=async(email,subject,body)=>{
  try {
    

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "Gmail",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "freelancermazaharul1@gmail.com",
          pass: "xptt cdyz votj bcby",
        },
      });

      const info = await transporter.sendMail({
        from: '"Quiz Test⚡"<freelancermazaharul1@gmail.com>',
        to: email, // list of receivers
        subject: subject, // Subject line
        html: `<h3>Welcome to Maza Quiz</h3> ${body}`
      });
      if(info){
        return({message:"Mail send 🚀. Check your email : "+email ,status:200})
      }else{
        return({message:"Faild to send email",status:402})
      }

  } catch (error) {
    return({message:"Error send email",status:500})
  }

}


