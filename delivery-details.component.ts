import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute) {
   
   }

  ngOnInit() {
    this.getid();
  }
  getid(): void{
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
  }
}
