import { Component, OnInit } from '@angular/core';

import {
 FormBuilder,
 FormGroup,
 Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pren',
  templateUrl: './pren.component.html',
  styleUrls: ['./pren.component.css']
})
export class PrenComponent implements OnInit {
 myForm: FormGroup;
 constructor(fb: FormBuilder) {
   this.myForm = fb.group({
     'utente': ['', Validators.required],
     'email': ['', Validators.required],
     'password': ['', Validators.required]
     
   });
 }
 ngOnInit() {
  
 }

 onSubmit(value: string): void {
   console.log('you submitted value: ', value);
 }
}
