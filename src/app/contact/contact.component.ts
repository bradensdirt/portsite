import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Note the plural: 'styleUrls'
})
export class ContactComponent {
  // Form data object to bind to the template
  formData = {
    from_name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSending = false;

  // Going to use EmailJS to send the email. If service gets abused by users online, I will make a new account and update the service ID and template ID.
  // To assist with minimizing abuse, I will be using reCAPTCHA v2 on the form.

  sendEmail() {
    this.isSending = true;
    emailjs.send(
      'service_vn2diwc', // Your EmailJS service ID
      'template_duoz8rg', // Your EmailJS template ID
      this.formData,
      'SFXoEjFZs__Oj539G' // Your EmailJS public user ID
    ).then(
      (result: EmailJSResponseStatus) => {
        alert('Email sent successfully!');
        console.log(result.text);
        this.isSending = false;
        this.resetForm();
      },
      (error) => {
        alert('Failed to send email. Please try again later.');
        console.error(error.text);
        this.isSending = false;
      }
    );
  }

  resetForm() {
    this.formData = {
      from_name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}
