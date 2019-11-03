const nodemailer = require('nodemailer');
const fs = require('fs')
const path = require('path')

let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '619307401@qq.com', // 发送方邮箱地址
        pass: 'eezfwkhdqawwbdgi' // smtp 验证码
    }
});

transporter.sendMail({
    from: '"有利网" <619307401@qq.com>', // sender address
    to: '619307401@qq.com', // list of receivers
    subject: '笔试通知', // Subject line
    text: 1, // plain text body
    html: `
     <h2>尊敬的王毅程同学，请点击下方连接开始答题，时限为一个小时</h2>
     <a href='www.bilibili.com'>点这里</a>
    ` // html body
},(err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
});