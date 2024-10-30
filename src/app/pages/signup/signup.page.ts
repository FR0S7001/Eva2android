import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  registro() {
    if (this.signupForm.valid) {
      this.authService.register(this.signupForm.value).subscribe(
        response => {
          console.log('User registered successfully', response);
          // Handle successful registration, e.g., navigate to login
        },
        error => {
          console.error('Error registering user', error);
          // Handle registration error
        }
      );
    }
  }

  ngOnInit() {
  }

}
