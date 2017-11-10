import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider';
import { SignupPage } from '../signup/signup'
import { ResetPasswordPage } from '../reset-password/reset-password'
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  error: any;
  signupPage = SignupPage; 
  resetPasswordPage = ResetPasswordPage
 
 constructor(private navCtrl: NavController, private fb: FormBuilder, private auth: AuthProvider) {
    this.loginForm = this.fb.group({  
            'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
        });
  
    this.email = this.loginForm.controls['email'];     
    this.password = this.loginForm.controls['password'];
  }
 //method to login with facebook
  loginWithFacebook(): void{
    this.auth.loginWithFacebook().subscribe((success) => {
      console.log(success);
       //alert('Successful Login');
    }, err => {
      console.log(err);
       //alert('error on login');
    });
  }
  //method to login with email
  login(): void { 
    if(this.loginForm.valid) {
      var credentials = ({email: this.email.value, password: this.password.value});
      this.auth.loginWithEmail(credentials).subscribe(data => {
       // alert('Successful Login');
        console.log(data);
      }, error=>{
        console.log(error);
        if (error.code == 'auth/user-not-found')
        {
          //alert('User not found');
        }
      });
    }
  }
 
  logout(): void {
    this.auth.logout();
  }
}