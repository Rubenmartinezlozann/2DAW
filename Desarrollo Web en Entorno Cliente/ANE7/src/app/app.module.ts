import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
//import { AppRoutingModule } from './app-routing.module';
//import { HomeViewComponent } from './home-view/home-view.component';
//import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    //AppRoutingModule,
    //HomeViewComponent,
    //ProductViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
