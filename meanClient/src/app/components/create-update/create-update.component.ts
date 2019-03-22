import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CountryService} from '../../shared/country.service';
import {Country} from '../../country';
import { TouchSequence } from 'selenium-webdriver';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
//country:Country;

temp:any
username:string;
capital:string;

constructor(private countryService:CountryService,private router:Router) { }

  ngOnInit() {

  }

  createOrUpdate(){
let country=new Country(this.username,this.capital);
console.log(country)
    this.countryService.createCountry(country).subscribe(
      data=>{
          console.log(data);
          this.router.navigate(['/']);
      },error=>{
        console.log("error in create new record")
      }
    )
  }
}
