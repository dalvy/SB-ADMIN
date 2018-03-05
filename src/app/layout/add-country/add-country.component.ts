import { Component, OnInit } from '@angular/core';

import { ICountry } from '../../models/country_model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
  countryArray : ICountry = { countrY_ID:0, countrY_CODE:'', countrY_NAME:''};

  constructor(public countryService : CountryService) { }

  ngOnInit() {
  }

  onSubmit() {
    //console.log(this.countryArray.countrY_CODE);
    //console.log(this.countryArray.countrY_NAME);
    if(this.countryArray.countrY_CODE != '' && this.countryArray.countrY_NAME != '' ){
      this.countryService.addCountry(this.countryArray);
      this.countryArray.countrY_CODE ='';
      this.countryArray.countrY_NAME='';
    }
  }
}
