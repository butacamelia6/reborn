import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
 

  constructor() { }

  itemDetails = [
    {
      id:1,
      itemName:"Long organza dress with asymmetric bust",
      itemDetails:"organza",
      itemPrice:2000,
      itemImg: '../../../assets/items/green.jpg',
    },
    {
      id:2,
      itemName:"Long organza dress with dropped sleeves",
      itemDetails:"organza",
      itemPrice:3600,
      itemImg:'../../../assets/items/pink.jpg',
    },
    {
      id:3,
      itemName:"Midi dress with satin bands on the bust",
      itemDetails:"satin",
      itemPrice:1490,
      itemImg:'../../../assets/items/blue.jpg',
    },
    {
      id:4,
      itemName:"Tulle dress with lace on the bust",
      itemDetails:"tulle,lace",
      itemPrice:2000,
      itemImg:'../../../assets/items/purple.jpg',
    },
    {
      id:5,
      itemName:"Long sleeve veil dress",
      itemDetails:"veil",
      itemPrice:5000,
      itemImg:'../../../assets/items/bride.jpg',
    },
    {
      id:6,
      itemName:"Lace midi dress",
      itemDetails:"lace",
      itemPrice:2190,
      itemImg:'../../../assets/items/lace.jpg',
    },
    {
      id:7,
      itemName:"Maxi corset train dress",
      itemDetails:"satin",
      itemPrice:2300,
      itemImg:'../../../assets/items/black.jpg',
    },
    {
      id:8,
      itemName:"Satin dress with crystal cord details",
      itemDetails:"satin, cristal",
      itemPrice:2500,
      itemImg:'../../../assets/items/red.jpg',
    }
  ]

}
