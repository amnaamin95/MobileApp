import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PickupComponent } from './pickup/pickup.component';
import { PickupDetailsComponent } from './pickup-details/pickup-details.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PickupComponent,
    PickupDetailsComponent,
    DeliveryComponent,
    DeliveryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
