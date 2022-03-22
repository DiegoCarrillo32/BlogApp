// Servidor de Express
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors')
const { dbConnection } = require('../database/dbConnection');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.server = http.createServer(this.app);
        dbConnection();
    }

    middlewares() {
        // Desplegar el directorio público
        this.app.use(express.static(path.resolve(__dirname, '../public')));
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use('/api/login', require('../router/auth'))
        this.app.use('/api/post', require('../router/post'))

    }
    execute() {

        // Inicializar Middlewares
        this.middlewares();


        // Inicializar Server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto:', this.port);
        });
    }

}

module.exports = Server;

