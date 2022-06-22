import { StoreData } from './../../Views/store-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  storeData:StoreData;
  constructor() { 
    this.storeData=new StoreData("NgShop",['assuit'],'./');

  }

  ngOnInit(): void {
  }

}
