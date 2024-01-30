import { Resend } from 'resend';
import express from 'express';

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const resend = new Resend('re_NqMwpLs5_73ihgd1QY6hZcC2mjzQUT6L6');

app.get("/:email/:password",async(req,res)=>{
    const {email,password}=req.params;
    await resend.emails.send({
        from: 'UPlay <uplay@resend.dev>',
        to: [email],
        subject: 'Reset Password',
        html: `Your new password is <strong>${password}</strong> !`,
      });
    res.status(200).send({
        message:`We send a new password to ${email}!`
    })
})

app.listen(9000,()=>console.log('server alive'))
