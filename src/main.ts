import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAppModule } from './modules/app/browser-app.module';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

export function main() {
  platformBrowserDynamic()
    .bootstrapModule(BrowserAppModule)
    .catch(err => console.log(err));
}
document.addEventListener('DOMContentLoaded', main, false);

require('./styles.scss');
