import { Component } from '@angular/core';
import { NavController, NavParams,ToastController  } from 'ionic-angular';

@Component({
  selector: 'page-burgundy',
  templateUrl: 'burgundy.html'
})
export class BurgundyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurgundyPage');
    this.showToastWithCloseButton();
  }
//uses Ionic-Toast componenet to add popup to the page
    showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Buying Tip: Look for the Côte de Beaune Village and Premier Cru wine from Chassagne-Montratchet, Santenay or Meursault',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
     toast.present();
  }
}
