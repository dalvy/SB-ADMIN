import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { ICountry } from '../../models/country_model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  animations: [routerTransition()]
})

export class CountryComponent implements OnInit {
    countryArray : ICountry[];
    editState: boolean = false;
    countryEditArray : ICountry[];

    constructor(public countryService : CountryService) { }

    ngOnInit() {
       this.countryService.getCountrys().subscribe(country=>{this.countryArray = country});
    }


  deleteCountry(event, country){
    const response = confirm('Estas seguro de eliminar');
    if (response) {
     this.countryService.deleteCountry(country);
    } 
  }

  editCountry(event, country) {
    this.editState = !this.editState;
    this.countryEditArray = country;
  }

   updateCountry(country){
     console.log(country.countrY_CODE);
     this.countryService.updateCountry(country);
     this.editState= false;
     this.countryEditArray = null;
  }
}

