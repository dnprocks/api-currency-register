import express, { Application } from 'express';
import { CurrencyController } from './app/controller/currency-controller';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

class App {
  public app: Application;
  private currencyController: CurrencyController;

  constructor() {
    this.app = express();
    this.middleware();
    this.currencyController = new CurrencyController();
    this.router();
  }

  private middleware() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
  }

  private router() {
    this.app.use('/route/', this.currencyController.router);

    this.app.use('/', (req, res) => {
      res.send('index');
    });

    this.app.use('*', (req, res) => {
      res.status(404).send({ message: 'page not found!' });
    });
  }
}

export default new App().app;
