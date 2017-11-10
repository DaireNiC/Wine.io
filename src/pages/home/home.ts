import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RedorWhitePage } from '../redorwhite/redorwhite';
import { LearnPage } from '../learn/learn';
import { LoginPage } from '../login/login';

//for walkthrough
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';
//for authentication check
import { AuthProvider } from '../../providers/auth-provider';

//for alerts
import { AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

//  RedWhitePage = redwhite;
  constructor(public navCtrl: NavController, public auth: AuthProvider, public storage: Storage, private alertCtrl: AlertController) {

  }


  ionViewDidLoad() {

   /* checks if the user has used the app before
    /*  boolean stored in local storage  
    /* navigates to about page if first time user
   */
  this.storage.get('intro-done').then(done => {
    if (!done) {
     // set
      this.storage.set('intro-done', true);
      //navigates to about page 
      this.navCtrl.setRoot(AboutPage);
    }
  });



   /* Checks if the user has been authenticated 
    /* navigates to login page if unauthenticated
   */
   this.auth.onAuth.subscribe((authState)=>{
        if (authState){
          console.log('Logged in user :', authState.auth.email);
        }
        else{

            console.log('not logged in  in user');
            alert("Who are ya? ..go login");
            
            this.navCtrl.setRoot(LoginPage);
            

        }
      });

      
       
    
}

//===Naviagion===//
    navigateToRedWhitePage() {
    	this.navCtrl.push(RedorWhitePage);
  } 

    navigateToLearnPage() {
    	this.navCtrl.push(LearnPage);
  } 


}