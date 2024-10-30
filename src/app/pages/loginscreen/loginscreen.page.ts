import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        const navigationExtras: NavigationExtras = {
          state: {
            username: this.username
          }
        };
        this.router.navigate(['/home'], navigationExtras); // Ensure this path is correct
      } else {
        alert('Usuario o contraseña incorrectos.');
      }
    });
  }
}
