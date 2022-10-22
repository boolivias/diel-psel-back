import cors from 'cors';
import express from 'express';
import routes from './routes/index.routes';
require('./repositories/implementations/models/index');

const app = express();

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Authorization',
  ],
  // credentials: true,
  methods: 'GET,PUT,POST,DELETE',
  origin: '*',
  // preflightContinue: false,
};

app.use(cors(options));
app.use(express.json());
routes.map((item) => app.use(item.path, item.router));

const port = process.env.PORT || 3333
app.listen(port, () => {
  console.log(`Server Started at ${port}`)
})