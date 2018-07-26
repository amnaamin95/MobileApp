import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PickupComponent } from './pickup/pickup.component';
import { PickupDetailsComponent } from './pickup-details/pickup-details.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pickup', component: PickupComponent },
  { path: 'pickup/:id', component: PickupDetailsComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'delivery/:id', component: DeliveryDetailsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}