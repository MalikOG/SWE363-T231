const express = require('express')
const path = require('path')
const app = express()

app.use("/CSS", express.static(__dirname + '/CSS'))
app.use("/JS", express.static(__dirname + '/JS'))
app.use("/img", express.static(__dirname + '/img'))
app.use("/Logos", express.static(__dirname + '/Logos'))
app.use(express.urlencoded({extended: false}))
app.get('/', (req, res) => {
    res.status(202).sendFile(path.resolve(__dirname, 'HTML/frontpage.html'))
})

app.get('/about', (req, res) => {
    res.status(202).sendFile(path.resolve(__dirname, 'HTML/about.html'))
})

app.get('/contact', (req, res) => {
    res.status(202).sendFile(path.resolve(__dirname, 'HTML/contact.html'))
})

app.get('/suggest', (req, res) => {
    res.status(202).sendFile(path.resolve(__dirname, 'HTML/suggest.html'))
})

app.post('/suggest/processed', (req, res) => {
    const {firstName, familyName, gender, email, resource} = req.body
    console.log(req.body)
    res.send("Process resolved")
})

app.get('/playground', (req, res) => {
    res.status(202).sendFile(path.resolve(__dirname, 'HTML/playground.html'))
})


app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, 'HTML/notfound.html'))
})

app.listen(5001, () => {
    console.log()
})