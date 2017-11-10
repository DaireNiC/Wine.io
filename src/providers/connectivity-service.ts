import { Injectable } from '@angular/core';
import { Network } from 'ionic-native';
import { Platform } from 'ionic-angular';
 
declare var Connection;
 /*The purpose of the connectivity service is to check if the devicec is onLine
 /*Allows the user to load map offline
 */
@Injectable()
export class ConnectivityService {
 
  onDevice: boolean;
 //checks if borwser or device
  constructor(public platform: Platform){
    this.onDevice = this.platform.is('cordova');
  }
 //checks connection & returns connetivity status
  isOnline(): boolean {
    if(this.onDevice && Network.type){
      return Network.type !== Connection.NONE;
    } else {
      return navigator.onLine; 
    }
  }
 //checks connection & returns connetivity status
  isOffline(): boolean {
    if(this.onDevice && Network.type){
      return Network.type === Connection.NONE;
    } else {
      return !navigator.onLine;   
    }
  }
}