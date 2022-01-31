import { Request, Response, Router } from 'express';

export class CurrencyController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  async index(req: Request, res: Response) {
    res.status(200).send('test');
  }

  public routes() {
    this.router.get('/', this.index);
  }
}
