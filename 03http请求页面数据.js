const http = require('https')
const fs = require('fs')

http.get('https://www.jd.com/', (res)=>{
    let {statusCode} = res
    let type  = res.headers["content-type"]
    let err
    if(statusCode != 200){
        err = new Error('请求地址错误')
    }
    if(err) {
        console.log(err)
        // 消费响应数据来释放内存。
        res.resume()
        return false    
    }
    let jd = ''
    res.on('data', (chunk)=>{
        console.log('数据加载完成')
        jd += chunk.toString()
        // console.log(chunk.toString())
    })
    res.on('end', ()=>{
        // 将爬取的html写入文件
        // fs.writeFileSync('jd.html', jd)

        console.log('结束')
    })
})