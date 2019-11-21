import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


// to jest model danych
// to pojdzie jako request na server
export class PersonModel{
 firstName :string;
 lastName = '';
 age: number;
 id = 0;
}


@Component({
  selector: 'app-formatka',
  templateUrl: './formatka.component.html',
  styleUrls: ['./formatka.component.css']
})
export class FormatkaComponent implements OnInit {


 // struktura danych reprezentujaca formatke
  personForm: FormGroup;

  constructor(
    private builder:FormBuilder,
    private http: HttpClient) { }
 // oncomponentLoad
  ngOnInit() {
    //this.personForm = this.createPersonForm();
    this.personForm = this.createPersonFormWithBuilder();
  }

  createPersonFormWithBuilder():FormGroup{
    return this.builder.group({
      firstName: ['',Validators.required],
      lastName:['',[Validators.required,this.dummyValidator]],
      age:[0,Validators.required]
    });
  }


  createPersonForm():FormGroup{
    return new FormGroup({
      firstName: new FormControl('imie',Validators.required),
      lastName: new FormControl('',[
             Validators.required,
             Validators.minLength(3),
             Validators.maxLength(13),
             this.dummyValidator
      ]),
      age:new FormControl('0',[
        Validators.required,
        Validators.pattern('[0-9][0-9]')
      ])

    });
  }


//wlasny validator
  dummyValidator(control:FormControl){
    console.log('checking...');    

    // nie moze byc np. slowo kicha
    if (control.value ==='kicha'){
      return {'wartosc':true};
    }
    // jak zwracamy null to jest OK
    return null;

  }



  onSubmit() {

  console.log('dane z formatki');
  console.log(this.personForm.value);

  //let poleFirstName = this.personForm.controls['firstName'].value;

  const person: PersonModel = {...this.personForm.value}; //spreadsyntax
  
  console.log(person);


  const uri = '/person';
  this.http
  .post(uri,person)
  .subscribe(
    r=> {console.log('OK');},
    err => {console.warn(err);}    
  );

  }


}
