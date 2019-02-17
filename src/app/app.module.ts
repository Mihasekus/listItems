import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NoPreloading, RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {ItemsModule} from './component/shop/items.module';
import {ServicesModule} from './services/services.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    BrowserAnimationsModule,
    ItemsModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: NoPreloading}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
