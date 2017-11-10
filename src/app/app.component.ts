import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthProvider } from '../providers/auth-provider';

//for intro Splashscreenimport { LoadingController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AboutPage } from '../pages/about/about';
@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  rootPage = TabsPage;
  loader: any;

constructor(platform: Platform, public auth: AuthProvider,public loadingCtrl: LoadingController) {
  
  platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      //Calls on Auth provider to
      //Check if user is logged in
      auth.onAuth.subscribe((authState)=>{
        if (authState){
          console.log('Logged in user :', authState.auth.email);
          alert("Welcome back!");
        }
        else{
            console.log('not in user');
            alert("Who are ya? ..go login");
        }
      });       
    });    
  }//constructor
}