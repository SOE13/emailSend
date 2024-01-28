import { Resend } from 'resend';
import express from 'express';

const app = express();


const resend = new Resend('re_ZtRgd626_7vPr8x6MczauMLQcnf9BrwLX');

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