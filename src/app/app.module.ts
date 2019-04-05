import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {StarRatingModule} from "ionic3-star-rating";
import {DetailPage} from "../pages/detail/detail";
import {DetailPageModule} from "../pages/detail/detail.module";
import {MenuPage} from "../pages/menu/menu";

@NgModule({
  declarations: [
    MyApp,
    HomePage,MenuPage
  ],
  imports: [
    BrowserModule,DetailPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
