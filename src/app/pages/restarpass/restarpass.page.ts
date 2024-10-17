import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-restarpass',
  templateUrl: './restarpass.page.html',
  styleUrls: ['./restarpass.page.scss'],
})
export class RestarpassPage implements OnInit {
  email: string = '';  // Variable para almacenar el correo
  username: string = ''; // Variable para almacenar el nombre de usuario

  constructor(private alertController: AlertController, private authService: AuthService) {}

  // Función para validar el email
  validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  // Función para mostrar alertas
  async enviar() {
    if (this.validateEmail(this.email)) {
      this.authService.checkUserExists(this.email, this.username).subscribe(async exists => {
        if (exists) {
          // Si el usuario existe
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Revise su bandeja de entrada.',
            buttons: ['OK']
          });
          await alert.present();
        } else {
          // Si el usuario o correo no existe
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Usuario o correo incorrecto.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    } else {
      // Si el email no es válido
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese un correo electrónico válido.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  ngOnInit() {}
}
