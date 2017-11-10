import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-champagne',
  templateUrl: 'champagne.html'
})
export class ChampagnePage {

private showlist= true;

//array of items with description 
 items = [
    { title: "", description: "" }
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChampagnePage');
  }

//array list of items with description to create drop down menu
 initializeItems() {
      this.items = [
          { title: "Non-Vintage (NV) ", description: "Non-vintage Champagne is a blend of multiple varieties and vintages of wine. Minimum aging is 1.5 years.  " },
          { title: "Vintage Millésime", description: "Vintage Champagnes are aged a minimum of 3 years prior to release.  " },
          { title: "Cuvée de prestige ", description: "This is the tête de cuvée or “Grande Cuvee” of a Champagne house–the very best wine a house produces.  " },
          { title: "Blanc de Blancs ", description: "A Champagne made completely of white grapes like Chardonnay. " },
           { title: "Blanc de Noirs ", description: "A Champagne made completely with black grapes, such as Pinot Noir and Pinot Meunier. " },
          { title: "Rosé ", description: " Typically a blend of white and red wine to create a pink wine prior to secondary fermentation. " }       
      ]
    }

    ///show item expanded 
  shownGroup = null;

//check if drop down is clicked to show item description
    toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  };
  isGroupShown(group) {
      return this.shownGroup === group;
  };

}
