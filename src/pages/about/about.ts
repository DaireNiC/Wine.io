import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from  '../tabs/tabs';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

   sliderOptions: any;
 
  constructor(public navCtrl: NavController) {
 
 //the slider is used to create ion-slides
    this.sliderOptions = {
      pager: true
    };
 
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
 //navigation
  goToHome(){
    this.navCtrl.setRoot(TabsPage);
  }
 
}
