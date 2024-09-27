import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private dataSubject = new Subject();
  private url="https://localhost:7051/api/Drivers/"

  constructor(private http:HttpClient) { 
    this.loadAllDrivers()
  }

  private loadAllDrivers() {
    this.http.get(this.url).subscribe(
      (drivers)=>this.dataSubject.next(drivers)
    )
    
  }

  public getAll() {
    return this.dataSubject;
  }

  public newDriver(driver:any) {
    this.http.post(this.url, driver).forEach(
      ()=>this.loadAllDrivers()
    )
  }

  public editDriver(driver:any) {
    this.http.put(this.url+driver.id, driver).forEach(
      ()=>this.loadAllDrivers()
    )
  }

  public deleteDriver(driver:any) {
    this.http.delete(this.url+driver.id).forEach(
      ()=>this.loadAllDrivers()
    )
  }
}
