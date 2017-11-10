import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
//used google maps
import { ConnectivityService } from '../../providers/connectivity-service';
import { Geolocation } from 'ionic-native';
//pages
import { FranceRegionsPage } from '../france-regions/france-regions';
import { GrapesPage } from '../grapes/grapes';
import { RedorWhitePage } from '../redorwhite/redorwhite';


declare var google;
 
@Component({
  selector: 'france-page',
  templateUrl: 'france.html'
})
export class FrancePage {
 
  @ViewChild('map') mapElement: ElementRef;
 //Google map configuration & API Key
  map: any;
  mapInitialised: boolean = false;
  apiKey: "AIzaSyAsy-pOxynQ8MwmUnhaVgwIhcRJbmur72U";
 
  constructor(public nav: NavController, public connectivityService: ConnectivityService) {
    this.loadGoogleMaps();
  }
 //Loads Map & Initialises with co ordinates
  loadGoogleMaps(){
 
    this.addConnectivityListeners();
 
  if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
    console.log("Google maps JavaScript needs to be loaded.");
    this.disableMap();
 
    if(this.connectivityService.isOnline()){
      console.log("online, loading map");
 
      //Load the SDK
      //Initialising Map
      window['mapInit'] = () => {
        this.initMap();
        this.enableMap();
      }
 
      let script = document.createElement("script");
      script.id = "googleMaps";
 
      if(this.apiKey){
        script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';       
      }
 
      document.body.appendChild(script);  
 
    } 
  }
  else {
 //uses connectivity service to check if device is online
    if(this.connectivityService.isOnline()){
      console.log("showing map");
      this.initMap();
      this.enableMap();
    }
    else {
      console.log("disabling map");
      this.disableMap();
    }
 
  }
 
  }
 //Initialises App with co-ordinates of France
  initMap(){
 
    this.mapInitialised = true;
 
    Geolocation.getCurrentPosition().then((position) => {
 
 //  Custom co ordinates of France & specified level of Zoom
 let latLng = new google.maps.LatLng(47, 2.349014);
      let mapOptions = {
        center: latLng,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    });
 
  }
 
  disableMap(){
    console.log("disable map");
  }
 
  enableMap(){
    console.log("enable map");
  }
 
  addConnectivityListeners(){
 
    let onOnline = () => {
 
      setTimeout(() => {
        if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
          this.loadGoogleMaps();
 
        } else {
 
          if(!this.mapInitialised){
            this.initMap();
          }
 
          this.enableMap();
        }
      }, 2000);
 
    };
 
    let onOffline = () => {
      this.disableMap();
    };
 
    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);
 
  }

//===Naviagion===//
    navigateToRedWhitePage() {
    	this.nav.push(RedorWhitePage);
  } 
     navigateToFranceRegionsPage() {
   	  this.nav.push(FranceRegionsPage);
  } 
       navigateToGrapesPage() {
   	  this.nav.push(GrapesPage);
  } 
}