import { Component } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

constructor(private http: HttpClient ){}

superGet() {

  // robimy url
  // robimy get request
  // ' - backtick 
const data1 = '12-12-2019';
const data2 = '12-15-2019';
const filter = 'bez filtra';

const url = `/person/test?data1=${data1}&data2=${data2}&filter=${filter}`;

this.http.get(url).
  subscribe(
    res => console.log('jest ok'),
    err => console.log(err)  
  );


}



}
