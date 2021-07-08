const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const history = require('connect-history-api-fallback');

const { dbConnection } = require('../database/mongoose.config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // API users
    this.notesRoutesPath = '/api/notes';

    // Connect to Database
    // this.connectDB();

    // Middlewares
    this.middlewares();

    // Rutas de la Aplicacion

    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    // cors to use Access-Control-Allow-Origin (Browsers)
    this.app.use(cors());

    // Read Express Data
    this.app.use(express.json());

    // Form sends data, understand it, but not accept images etc...(Method of Express)
    this.app.use(express.urlencoded({ extended: true }));

    // Https views
    this.app.use(morgan('dev'));

    // Middleware para Vue.js router modo history
    this.app.use(history());

    // Directorio ficheros Estaticos
    this.app.use(express.static('public'));
  }

  routes() {
    // Config Patch to route!!
    this.app.use(this.notesRoutesPath, require('../routes/notes.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
