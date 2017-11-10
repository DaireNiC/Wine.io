import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Lexicon page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lexicon',
  templateUrl: 'lexicon.html'
})
export class LexiconPage {
private searchQuery: string = '';
//private items: string[];
private showlist= true;
//an array of items 
 items = [
    { title: "", description: "" }
];


  constructor(private navCtrl: NavController) {
    //initilaises items in the array
    this.initializeItems();
    
  }

  initializeItems() {
//initialises items in list 
//items have the term as title and the definition of Each term as description
//ng for is used to display each item

this.items = [
    { title: "AOP ", description: "Appellation d’Origine Protégée. Indicates that the wine came from a delimited region (such as Burgundy) or a smaller more specific area (such as Gevrey-Chambertin in Burgundy) Each area will have specific laws regarding allowed grape varieties and growing conditions etc.  " },
    { title: "Biologique", description: "This wine is organically produced  " },
    { title: "Blanc", description: "white " },
    { title: "Blanc de Blancs", description: "(‘white from whites’): A white wine made exclusively from white grapes. Often seen on Champagne bottles.  " },
    { title: "Blanc de Noirs", description: "(‘white from blacks’) A white sparkling wine made only from black grapes. " },
    { title: "Brut", description: "A dry style sparkling wine. " },
    { title: "Cépage", description: "The grape variety used. " },
    { title: "Château", description: "A winery/ estate " },
    { title: "Clos", description: "A walled vineyard. Often seen on Burgundy labels. " },
    { title: "Côtes", description: "The vineyard is situated on a slope or hillside   " },
    { title: "Coteaux", description: "Wine comes from a group of slopes/ hillsides." },
    { title: "Cru", description: "(‘growth’) A wine from a recognised high quality vineyard." },
    { title: "Cuvée", description: "A specific wine blend." },
    { title: "Crémant", description: "A sparkling wine from a region outside Champagne." },
    { title: "Demi-Sec", description: "Off-dry." },
    { title: "Domaine", description: "A vineyard and winery." },
    { title: "Doux", description: "Sweet" },
    { title: "Élevé en fûts de chêne", description: "Aged in oak." },
    { title: "Grand Vin", description: "A labelling term used in Bordeaux to distinguish the best wine the winery makes." },
    { title: "Grand Cru", description: "(‘Great Growth’)Labelling term used in Burgundy and Champagne to indicate their finest vineyards. ." },
    { title: "IGP ", description: "(Indication Geographique Protégée): IGP wines are not as strictly regulated as AOP wines. They can be from a larger area, and the rules regarding quality are not as strict." },
    { title: "Millésime", description: "Vintage/ year of the harvest." },
    { title: "Mis en bouteille au château/domaine", description: "Bottled at the winery/estate" },
    { title: "Moelleux", description: "Sweet." },
    { title: "Mousseux", description: "Sparkling" },
    { title: "Non-filtré: ", description: "The wine is unfiltered." },
    { title: "Pétillant", description: "Lightly sparkling." },
    { title: "Première Cru (1er Cru", description: "(‘First Growth’) A labelling term used in Burgundy and Champagne to indicate the second best vineyards after ‘Grand Cru’. " },
    { title: "Propriétaire", description: "The winery owner.  " },
    { title: "Sec", description: "dry " },
    { title: "Supérieur", description: "A Bordeaux labelling term used to indicate wines with a higher minimum alcohol and aging requirements than regular Bordeaux AOP.  " },
    { title: "Sur Lie", description: "This wine is aged on the lees, or dead yeast particles. This imparts on the wine a creamy, yeasty flavour, and more body.  " },
    { title: "Vendangé à la main", description: "Hand harvested " },
    { title: "Vieille Vignes", description: "An unregulated term meaning old vines " },
    { title: "Vignoble", description: "Vineyard " },
    { title: "Vin de France", description: "The most basic quality labeling term for a wine from France. This wine can come from anywhere in the country, and can even be a blend of grapes from different regions. " }
];

  }

  
  ///show item expanded 
shownGroup = null;

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

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
  this.items = this.items.filter((item: any) => {
    return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
  })
    }
  }
}