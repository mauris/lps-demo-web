import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import { Request, Response } from 'express';
import { ServerAppModule } from './modules/app/server-app.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode } from '@angular/core';

enableProdMode();
const app = express();
const port = process.env.PORT;

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', { index: false }));

app.get('*', (req: Request, res: Response) => {
  console.time(`GET: ${req.originalUrl}`);
  res.render('../dist/index', {
    req: req,
    res: res
  });
  console.timeEnd(`GET: ${req.originalUrl}`);
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
