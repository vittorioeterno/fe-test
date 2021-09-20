import { Component, OnInit, ViewChild } from '@angular/core';

// imorting environment SETTINGS
import { environment } from '../../environments/environment';

// importing filter steps
import { SETTINGS } from './product-filter.component.config';

// importing product list
import { PRODUCT_LIST } from './product-list';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})

export class ProductFilterComponent implements OnInit {

  // setting data from static product list
  private productList: any = PRODUCT_LIST

  // setting the filter steps from the static json from separate file
  public setting: any = SETTINGS;
  public stepCounter: number = 0;
  public currencyCode = 'EUR';
  public pointerMax = 600;
  public filterParam: any = {
    "price": [],
    "cpu": [],
    "memory": [],
    "disk_space": [],
    "brand": []
  };
  slideValue: any;
  rangeSliderComponent: any;
  filteredData: any;


  // Default setting for the required vars
  constructor() {
    this.filteredData = this.productList;
  }

  ngOnInit() { }



}
