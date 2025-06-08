import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderNameControl: new FormControl('', Validators.required),
    senderEmailControl: new FormControl('', [Validators.required, Validators.email]),
    senderMessageControl:  new FormControl('', [Validators.required, Validators.minLength(4)])

  })
  

  submitForm(){
    console.log('hi')
  }
}
