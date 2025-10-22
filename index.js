require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/moiz", (req, res) => {
    res.send("Tumhare bhai ne pehli api bana di hai or live bhi kardi hai looooo......");
})
app.get("/check", (req, res) => {
    res.send("Bana liya bhai tune Pehla api");
})
app.get("/minakshi", (req, res)=>{
    res.send("Minakshi aap bohot acche lagre the saari mee sacchi me jhakkas");
})

app.get("/login", (req, res) => {
    res.send("practice karooooo");
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
