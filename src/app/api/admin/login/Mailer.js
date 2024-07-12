import nodemailer from "nodemailer";

 export const sendEmail=async(email,code)=>{
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
        subject: "Login code", // Subject line
        html: `<p style="line-height:24px;font-family: monospace;"><h3>Welcome to Quiz Test</h3> <br> Your login code is ${code}. Enter the Code then get started. Thank you for joining us! </p>`
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


