import { Component } from '@angular/core';
import { ShipapiService } from '../shared/shipapi.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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

  constructor(private api: ShipapiService, private builder: FormBuilder){}

  ngOnInit(){
    this.getShipments();
    this.shipmentForm = this.builder.group({
      shipmentId: ['', Validators.required],
      sentDate: ['', Validators.required],
      endDate: ['', Validators.required],
      addressee: ['', Validators.required],
      targetCity: ['', Validators.required]    
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
    const newShipment = {
      shipmentId: this.shipmentForm.value.shipmentId,
      sentDate: this.shipmentForm.value.sentDate,
      endDate: this.shipmentForm.value.endDate,
      addressee: this.shipmentForm.value.addressee,
      targetCity: this.shipmentForm.value.targetCity
    }
    this.api.createShipment$(newShipment).subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.getShipments();
        this.shipmentForm.reset();
    },
      error: (err: any) => {
        console.log(err);
      }
    });

    event.preventDefault();
  }
}
