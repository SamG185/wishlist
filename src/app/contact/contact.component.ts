import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'yahoo.com'])
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderNameControl: new FormControl('', Validators.required),
    senderEmailControl: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessageControl:  new FormControl('', [Validators.required, Validators.minLength(4)])

  })
  submitForm(){
    console.log('hi')
  }
}
