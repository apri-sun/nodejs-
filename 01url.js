const url = require('url')
const querystring = require('querystring')
let urlStr = 'https://www.bilibili.com/video/av71536877/?p=7'
let urlObj = querystring.parse(urlStr)
console.log(urlObj)