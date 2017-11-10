import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedTypesPage } from '../red-types/red-types';
import { ChardonnayPage } from '../chardonnay/chardonnay';
/*
  Generated class for the Redwhite page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-redorwhite',
  templateUrl: 'redorwhite.html'
})
export class RedorWhitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedwhitePage');
  }
   navigateToRedTypesPage() {
    	this.navCtrl.push(RedTypesPage);
  } 
      navigateToChardonnayPage() {
   	  this.navCtrl.push(ChardonnayPage);
  } 
}
