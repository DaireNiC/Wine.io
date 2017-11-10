import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import toast for popup
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-bordeaux',
  templateUrl: 'bordeaux.html'
})
export class BordeauxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BordeauxPage');
    this.showToastWithCloseButton();
  }

//uses Ionic-Toast componenet to add popup to the page
    showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: '  Top Tip: A wine labeled Bordeaux Superieur AC is a great place to start when trying Bordeaux wines.',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    //show popup
     toast.present();
  }

}
