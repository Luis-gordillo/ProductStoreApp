import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { CartComponent } from './views/cart/cart.component';
import { AboutComponent } from './views/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
