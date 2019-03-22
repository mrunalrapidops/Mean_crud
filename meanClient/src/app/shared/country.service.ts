import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Country} from '../country';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private country:Country;
  private baseUri:String = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }
  
  createCountry(country){
    return this.http.post(this.baseUri+'/create',country,{headers:this.headers});
  }

  readCounties(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }

  updateCountry(country:Country){
    return this.http.put(this.baseUri+'/update',country,{headers:this.headers});
  }

  deleteCountry(id:String){
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }
  setter(country:Country){
    this.country = country;
  }
  getter(){
    return this.country;
  }
}
