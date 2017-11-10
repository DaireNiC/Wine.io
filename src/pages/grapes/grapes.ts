import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChardonnayPage } from '../chardonnay/chardonnay';
import { PinotnoirPage } from '../pinotnoir/pinotnoir';
import { CabernetSauvignonPage } from '../cabernet-sauvignon/cabernet-sauvignon';

/*
  Generated class for the Grapes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grapes',
  templateUrl: 'grapes.html'
})
export class GrapesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrapesPage');
  }

//navigation
    navigateToChardonnayPage() {
   	  this.navCtrl.push(ChardonnayPage);
  } 

    navigateToPinotnoirPage() {
   	  this.navCtrl.push(PinotnoirPage);
  } 

    navigateToCabernetSauvignonPage() {
   	  this.navCtrl.push(CabernetSauvignonPage);
  } 


}
