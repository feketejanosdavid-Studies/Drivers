import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent {
  drivers:any
  oszlopok=[
    {key:"id", text:"#", type:"plain"},
    {key:"name", text:"Név", type:"text"},
    {key: "age", text: "Kor", type: "number"},
    {key: "phoneNum", text: "Telefonszám", type: "tel"},
  ]

  newDriver:any={}
  constructor(private base:BaseService){
    this.base.getAll().subscribe(
      (adatok)=>this.drivers=adatok
    )
  }

  addDriver() {
    this.base.newDriver(this.newDriver)
    this.newDriver={}
  }

  deleteDriver(driver:any) {
    this.base.deleteDriver(driver)
  }

  editDriver(driver:any) {
    this.base.editDriver(driver)
  }
}
