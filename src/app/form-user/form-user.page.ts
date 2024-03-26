import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormOptionsService } from '../api/form-options.service';
import { DocumentType } from '../interfaces/form-options.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.page.html',
  styleUrls: ['./form-user.page.scss'],
})
export class FormUserPage implements OnInit {
  formulario!: FormGroup;
  documentTypes: DocumentType[] = [];
  errorEmail!: string;

  constructor(private fb: FormBuilder, private formOptions: FormOptionsService, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.getDocumentTypes();
  }

  createForm() {
    this.formulario = this.fb.group({
      documents: ['', Validators.required],
      idNumber: ['', Validators.required],
      expeditionDate: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', Validators.required],
      pin: ['', Validators.required],
      confirmPin: ['', Validators.required],
    });
  }
  private getDocumentTypes() {
    this.formOptions.documentTypes().subscribe((data) => {
      this.documentTypes = data;
    });
  }

  public submit() {
    if (this.formulario.valid) {
      this.router.navigate(['/contrato']);
    }
  }
  
  verifyEmails(e: any) {
    if (e.target.value !== this.formulario.get('email')?.value) {
      this.formulario.get('confirmEmail')?.setErrors({ email: true });
    }
  }

  verifyPins(e: any) {
    if (e.target.value !== this.formulario.get('pin')?.value) {
      this.formulario.get('confirmPin')?.setErrors({ pin: true });
    }
  }

  showPin() {
    const password = document.getElementById('password') as HTMLInputElement;
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }


  showConPin() {
    const password = document.getElementById('conPassword') as HTMLInputElement;
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }
}
