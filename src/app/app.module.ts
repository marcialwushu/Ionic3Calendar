import { LoginPage } from './../pages/login/login';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NgCalendarModule } from 'ionic2-calendar';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


const firebaseConfig = {
  apiKey: "AIzaSyDNoLztCehx8evMmIECxjepabQno-dUt8s",
    authDomain: "demofirebase-1c239.firebaseapp.com",
    databaseURL: "https://demofirebase-1c239.firebaseio.com",
    projectId: "demofirebase-1c239",
    storageBucket: "demofirebase-1c239.appspot.com",
    messagingSenderId: "1097819452311"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,

  ]
})
export class AppModule {}
