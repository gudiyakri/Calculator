const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.urlencoded({ extended: true }))

app.get('',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.post('/add',(req, res)=>{
    const n1 = Number(req.body.a)
    const n2 = Number(req.body.b)
    const add = n1 + n2
res.send('value is:' +add) 
})
app.post('/sub',(req, res)=>{
    const n1 = Number(req.body.a)
    const n2 = Number(req.body.b)
    const sub = n1 - n2
res.send('value is:' +sub) 
})
app.post('/mul',(req, res)=>{
    const n1 = Number(req.body.a)
    const n2 = Number(req.body.b)
    const mul = n1 * n2
res.send('value is:' +mul) 
})
app.post('/div',(req, res)=>{
    const n1 = Number(req.body.a)
    const n2 = Number(req.body.b)
    const div = n1 / n2
res.send('value is:' +div) 
})
app.post('/mod',(req, res)=>{
    const n1 = Number(req.body.a)
    const n2 = Number(req.body.b)
    const mod = n1 % n2
res.send('value is:' +mod) 
})
app.listen(4000, (res) =>{
    console.log('Server is on port 4000')
})