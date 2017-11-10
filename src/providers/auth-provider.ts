import { Injectable, EventEmitter, Inject } from '@angular/core';
import { AuthProviders, AngularFire, FirebaseAuthState, AuthMethods, FirebaseApp } from 'angularfire2'; //Added for authentication
import { Observable } from "rxjs/Observable";
import { Platform } from 'ionic-angular';
import { Facebook } from 'ionic-native';//Facebook Native plugin
import { auth } from 'firebase'; //needed for the FacebookAuthProvider
 
@Injectable()
export class AuthProvider {
  private authState: FirebaseAuthState;
  public onAuth: EventEmitter<FirebaseAuthState> = new EventEmitter();
  public firebase : any;
   
  constructor(private af: AngularFire, @Inject(FirebaseApp)firebase: any,private platform: Platform) { //Add reference to native firebase SDK
    this.firebase = firebase; 
    this.af.auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      this.onAuth.emit(state);
    });
  }
 
//Login with Facebook on Native platform
  loginWithFacebook() {
    return Observable.create(observer => {
      if (this.platform.is('cordova')) {
        //Info I am pulling from FB
        return Facebook.login(['email']).then(res => {
          const facebookCredential = auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          this.firebase.auth().signInWithCredential(facebookCredential).then(()=>{
            observer.next();
          }).catch(error => {
            //console.log(error);
            observer.error(error);
          });
        });
      } else {
        return this.af.auth.login({
          provider: AuthProviders.Facebook,
          method: AuthMethods.Popup
          }).then(()=>{
            observer.next();
          }).catch(error => {
            console.log(error);
            observer.error(error);
        });
      }
    });
  }

 _FBUserProfile() {
//pulling information and stringify
    return new Promise((resolve, reject) => {
      Facebook.api('me?fields=id,name,email,first_name,last_name,picture.width(600).height(600).as(picture_small),picture.width(360).height(360).as(picture_large)', [])
        .then((profileData) => {
          profileData.picture="https://graph.facebook.com/"+profileData.id+"/picture?width=1024&height=1024";
          
          console.log(JSON.stringify(profileData));
          return resolve(profileData);
        }, (err) => {
          console.log(JSON.stringify(err));
          return reject(err);
        });
    });
  }



   //Logs in with Facebook
   //auth provider authorises login
  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this.af.auth.login(credentials, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((authData) => {
        //console.log(authData);
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

    //Registers New user
   //auth provider authorises user creation
  registerUser(credentials: any) {
    return Observable.create(observer => {
      this.af.auth.createUser(credentials).then(authData => {
        observer.next(authData);
      }).catch(error => {
        //console.log(error);
        observer.error(error);
      });
    });
  }
   
  resetPassword(emailAddress:string){
    return Observable.create(observer => {
      this.firebase.auth().sendPasswordResetEmail(emailAddress).then(function(success) {
          observer.next(success);
        }, function(error) {
          observer.error(error);
        });
     });
  }
 
 //Logs user out from application
  logout() {
    this.af.auth.logout();
  }
 //thid method gets FB email
  get currentUser():string{
    return this.authState?this.authState.auth.email:'';
  }
  //this method retreives user name from FB 
 get currentUsername():string{
   return this.authState?this.authState.auth.displayName:'';
  } 
   get currentUserphoto():string{
    return this.authState?this.authState.auth.photoURL:'';
  } 
}