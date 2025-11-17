import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var UIkit: any;

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class Form {

  isSubmitting = false;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company_name: ['', Validators.required],
      job_title: ['', Validators.required],
      country: ['', Validators.required],
      challenge: ['', Validators.required],
      message: ['']
    });

  }

  submitForm(event: Event) {
    event.preventDefault();

    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      UIkit.modal('#validation-modal').show();
      return;
    }

    this.isSubmitting = true;
    UIkit.modal('#loading-modal').show();

    const formData = this.contactForm.value;

    emailjs.send(
      'service_6rmxx4t',
      'template_oubu6qv',
      formData,
      { publicKey: 'MfGtUz8Dmwb8AnZHw' }
    )
    .then(() => {
      UIkit.modal('#loading-modal').hide();
      UIkit.modal('#success-modal').show();
      this.contactForm.reset();
      this.isSubmitting = false;
    })
    .catch((error: EmailJSResponseStatus) => {
      console.error('Erro no envio:', error.text);
      UIkit.modal('#loading-modal').hide();
      UIkit.modal('#error-modal').show();
      this.isSubmitting = false;
    });
  }
}
