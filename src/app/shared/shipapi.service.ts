import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipapiService {

  constructor(private http: HttpClient) { }

  getShipments$(){
    const url = 'http://localhost:8000/api/shipments';
    return this.http.get(url);
  }
  // createShipment$(shipment: any){
  //   const url = 'http://localhost:8000/api/shipments';
  //   return this.http.post(url, shipment);
  // }
}
