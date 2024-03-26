import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss'],
})
export class PhoneNumberPage implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private route: Router ) { }

  ngOnInit() {
    this.form = this.fb.group({
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }


  toUserForm() {
    if (this.form.valid) {
      this.route.navigate(['/form-user']);
    }
  }

}
