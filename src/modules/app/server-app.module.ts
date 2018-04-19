import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppComponent } from './components';
import { AppModule } from './app.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NoopAnimationsModule,
    ServerTransferStateModule,
    ServerModule,
    ModuleMapLoaderModule,
    AppModule
  ]
})
export class ServerAppModule {}
