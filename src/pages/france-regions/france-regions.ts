import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BordeauxPage } from '../bordeaux/bordeaux';
import { ChampagnePage } from '../champagne/champagne'; import { BurgundyPage } from '../burgundy/burgundy';

/*
  Generated class for the FranceRegions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-france-regions',
  templateUrl: 'france-regions.html'
})
export class FranceRegionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FranceRegionsPage');
  }
     ///navigation
     navigateToBordeaux() {
   	  this.navCtrl.push(BordeauxPage);
  } 
       ///navigation
     navigateToBurgundy() {
   	  this.navCtrl.push(BurgundyPage);
  } 
       ///navigation
     navigateToChampagne() {
   	  this.navCtrl.push(ChampagnePage);
  } 


}
