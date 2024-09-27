const express = require("express");
const AccountsRouter = require('./accounts/accounts-router');
const server = express();

server.use(express.json());

server.use(AccountsRouter)
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: 'something went wrong on the server' })
})
module.exports = server;