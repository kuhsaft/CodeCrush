import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';

import * as spdy from 'spdy';

import * as express from 'express';
import * as compression from 'compression';
import { join } from 'path';
import { readFileSync } from 'fs';
import { isNullOrUndefined} from 'util';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.use(compression());

/* - Example Express Rest API endpoints -
  app.get('/api/**', (req, res) => { });
*/

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

// ALl regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

if (isNullOrUndefined(process.env.SSL_KEY)) {
  console.error('Environment variable "SSL_KEY" not defined!');
}

if (isNullOrUndefined(process.env.SSL_CERT)) {
  console.error('Environment variable "SSL_CERT" not defined!');
}

const options = {
  key: readFileSync(process.env.SSL_KEY),
  cert: readFileSync(process.env.SSL_CERT)
};

// Start up the Node server
spdy
  .createServer(options, app)
  .listen(PORT, () => {
    console.log(`Node Express server listening on https://localhost:${PORT}`);
  });
