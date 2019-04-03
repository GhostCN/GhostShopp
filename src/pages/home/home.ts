import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../models/Interface-product";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  Article:Product[];

  constructor(public navCtrl:NavController,public navParams: NavParams){

    this.Article=[
      {title : "Jacket",
        description :"Jacket Nike original",
        price:10000,
        category:"Vetement",
        created_at: new Date(),
        state:"Neuf",
        city:"Dakar",
        id:"1",
        averagStar:4,
        avaibility:{
          availabe:true,
          type:"livraison",
          feed: 10

        }
        ,
        pictures:[

          'assets/imgs/jacket.jpg','assets/imgs/jacketJean.jpg','assets/imgs/jacketCuir.jpg'
        ]
      },
      {title : "Iphone",
        description :"Iphone xmax 256 GB couleur Gold ",
        price:800000,
        category:"Telephone",
        created_at: new Date(),
        state:"Neuf",
        city:"Dakar",
        id:"2",
        averagStar:5,
        avaibility:{
          availabe:true,
          type:"livraison",
          feed: 5

        }
        ,
        pictures:[
          'assets/imgs/iphone.jpg','assets/imgs/xmax.jpeg','assets/imgs/iphoneMax.jpg','assets/imgs/iphonex.jpg'
        ]
      },
      {title : "kaki",
        description :"kaki original",
        price:10000,
        category:"pantalon",
        created_at: new Date(),
        state:"Neuf",
        city:"Dakar",
        id:"5",
        averagStar:4,
        avaibility:{
          availabe:true,
          type:"livraison",
          feed: 10

        }
        ,
        pictures:[
          'assets/imgs/kaki.jpg','assets/imgs/pantalon.jpg','assets/imgs/pantalonClass.jpg',
        ]
      },
      {title : "Jacket",
        description :"Jacket Nike original",
        price:10000,
        category:"Vetement",
        created_at: new Date(),
        state:"Neuf",
        city:"Dakar",
        id:"1",
        averagStar:4,
        avaibility:{
          availabe:true,
          type:"livraison",
          feed: 10

        }
        ,
        pictures:[

          'assets/imgs/jacket.jpg','assets/imgs/jacketJean.jpg','assets/imgs/jacketCuir.jpg'
        ]
      },
      {title : "Iphone",
        description :"Iphone xmax 256 GB couleur Gold ",
        price:800000,
        category:"Telephone",
        created_at: new Date(),
        state:"Neuf",
        city:"Dakar",
        id:"2",
        averagStar:5,
        avaibility:{
          availabe:true,
          type:"livraison",
          feed: 5

        }
        ,
        pictures:[
          'assets/imgs/iphone.jpg','assets/imgs/xmax.jpeg','assets/imgs/iphoneMax.jpg','assets/imgs/iphonex.jpg'
        ]
      },
      {title : "kaki",
        description :"kaki original",
        price:10000,
        category:"pantalon",
        created_at: new Date(),
        state:"Neuf",
        city:"Dakar",
        id:"5",
        averagStar:4,
        avaibility:{
          availabe:true,
          type:"livraison",
          feed: 10

        }
        ,
        pictures:[
          'assets/imgs/kaki.jpg','assets/imgs/pantalon.jpg','assets/imgs/pantalonClass.jpg'
        ]
      }


    ]
  }

  showDetails(article:Product){
    this.navCtrl.push("DetailPage",{data:article })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
