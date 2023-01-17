const express = require('express')
const server = express();
const times = require('./src/data/times.json')
const cors = require('cors')


server.use(cors())

server.get('/home', (req, res) => {
    return res.json({ mensagem: "nicoando" })
})

server.get('/times', (req, res) => {
    return res.json(times)
})

server.listen(3000, () => {
    console.log("Servidor funcionando")
});
