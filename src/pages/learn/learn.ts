import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FrancePage } from '../france/france';
import { LexiconPage } from '../lexicon/lexicon';
//import { NewWorldPage } from '../new-world/new-world';
/*
  Generated class for the Learn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnPage');
  }

    navigateToFrancePage() {
   	  this.navCtrl.push(FrancePage);
  } 

    navigateToLexiconPage() {
    	this.navCtrl.push(LexiconPage);
  } 


}
