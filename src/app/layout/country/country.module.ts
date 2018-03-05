import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { PageHeaderModule } from './../../shared';

//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';

import { CountryService } from './../../services/country.service';
import { AddCountryComponent } from './../add-country/add-country.component';

@NgModule({
    imports: [CommonModule, CountryRoutingModule, PageHeaderModule, FormsModule],
    declarations: [CountryComponent, AddCountryComponent],
   providers: [CountryService]
})
export class CountryModule {}
