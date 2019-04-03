import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../models/Interface-product";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  productDetail:Product;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productDetail=this.navParams.get("data");
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
