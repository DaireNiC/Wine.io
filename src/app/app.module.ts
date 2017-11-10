import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Platform } from 'ionic-angular';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RedTypesPage } from '../pages/red-types/red-types';
import { RedorWhitePage } from '../pages/redorwhite/redorwhite';
import { LearnPage } from '../pages/learn/learn';
import { FrancePage } from '../pages/france/france';
import { SignupPage } from '../pages/signup/signup';
import { AngularFireModule } from 'angularfire2';
import { AuthProvider} from '../providers/auth-provider';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
//french regions
import { FranceRegionsPage } from '../pages/france-regions/france-regions';
import { BordeauxPage } from '../pages/bordeaux/bordeaux';
import { BurgundyPage } from '../pages/burgundy/burgundy';
import { ChampagnePage } from '../pages/champagne/champagne';
import { LexiconPage } from '../pages/lexicon/lexicon';

//GrapesVarieties
import { GrapesPage } from '../pages/grapes/grapes';
import { ChardonnayPage } from '../pages/chardonnay/chardonnay';
import { PinotnoirPage } from '../pages/pinotnoir/pinotnoir';
import { CabernetSauvignonPage } from '../pages/cabernet-sauvignon/cabernet-sauvignon';

import firebase from 'firebase';

//google maps
import { ConnectivityService } from '../providers/connectivity-service';
//local storage
import { IonicStorageModule } from '@ionic/storage' ;

//firease configuration
export const firebaseConfig = {
    apiKey: "AIzaSyDMRuu8bhijupeUf0U57OYYI_TsG71pQVE",
    authDomain: "wineio-b11dd.firebaseapp.com",
    databaseURL: "https://wineio-b11dd.firebaseio.com",
    storageBucket: "wineio-b11dd.appspot.com",
    messagingSenderId: "449656959667"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LearnPage,
    LexiconPage,
    FrancePage,
    GrapesPage,
    PinotnoirPage,
    CabernetSauvignonPage,
    ChardonnayPage,
    FranceRegionsPage,
    BordeauxPage,
    BurgundyPage,
    ChampagnePage,
    RedorWhitePage,
    RedTypesPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    LoginPage,
    HomePage,
    TabsPage,
    LearnPage,
    LexiconPage,
    FrancePage,
    GrapesPage,
    PinotnoirPage,
    CabernetSauvignonPage,
    ChardonnayPage,
    FranceRegionsPage,
    BordeauxPage,
    BurgundyPage,
    ChampagnePage,
    RedorWhitePage,
    RedTypesPage,
    SignupPage,
    ResetPasswordPage
  ],
  providers: [ConnectivityService, AuthProvider]
})
export class AppModule {}
