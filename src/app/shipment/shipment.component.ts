import { Component } from '@angular/core';
import { ShipapiService } from '../shared/shipapi.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css'
})
export class ShipmentComponent {
  shipments:any;

  shipmentForm: any;
  // shipmentList:any[] = []

  constructor(private api: ShipapiService, private builder: FormBuilder){}

  ngOnInit(){
    this.getShipments();
    this.shipmentForm = this.builder.group({
      shipmentId: [''],
      sentDate: [''],
      endDate: [''],
      addressee: [''],
      targetCity: ['']    
    })
  }

  getShipments(){
    this.api.getShipments$().subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.shipments = res.data;
    },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
  createShipment(event: SubmitEvent) {
    console.log('Létrehozás...')

    console.log(this.shipmentForm.value)

    //Küldés REST API végpontra

    event.preventDefault();
  }

}
