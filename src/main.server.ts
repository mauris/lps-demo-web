import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import { Request, Response } from 'express';
import { ServerAppModule } from './modules/app/server-app.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode } from '@angular/core';
const helmet = require('helmet');

enableProdMode();
const app = express();
const port = process.env.PORT;

if (process.env.NODE_ENV === 'production') {
  app.disable('x-powered-by');
  app.use(helmet());
  if (process.env.HTTPS_ENABLE_REDIRECT) {
    app.use((req, res, next) => {
      if (!req.secure) {
        let destinationArray = [
          'https://',
          req.get('Host'),
          req.url
        ];
        return res
          .redirect(destinationArray.join(''));
      }
      return next();
    });
  }
}

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
