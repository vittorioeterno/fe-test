import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFilterComponent,
    ProductListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
