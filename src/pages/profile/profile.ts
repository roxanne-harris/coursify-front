import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})


export class ProfilePage {

  firstName: string;
  lastName: string;
  email: string;

  constructor(public navCtrl: NavController) 
  {

  }

  navigateToHomeSetRoot() {
    console.log("Home...");
    this.navCtrl.setRoot(HomePage);
  }

  navigateBack() {
    this.navCtrl.pop();
  }

  navigateToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  

}


/*

*/
