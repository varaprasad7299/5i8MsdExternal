const { time } = require('console')
const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url=='/' && req.method == 'GET'){
        let date = new Date()
        res.end(`current data and time is : ${date}`)
    }
})
const port = 3000
server.listen(port,()=>{
    console.log('server is running')
})