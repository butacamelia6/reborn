import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  constructor(private param:ActivatedRoute, 
              private service:OrderDetailsService) { }

  getItemId:any;
  itemData:any;
  ngOnInit(): void {
    this.getItemId= this.param.snapshot.paramMap.get('id');
    console.log(this.getItemId,'getitem');

    if(this.getItemId)
    {
       this.itemData = this.service.itemDetails.filter((value) =>{
            return value.id == this.getItemId;
        })
    }
  }
}
