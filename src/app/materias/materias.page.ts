import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
  providers: [InAppBrowser]
})
export class MateriasPage implements OnInit {

  constructor(private inAppBrowser: InAppBrowser, private platform: Platform) { }

  ngOnInit() {}

  abrirEnNavegador(url: string) {
    console.log("URL original: ", url);

    if (this.platform.is('android') || this.platform.is('ios')) {
      // Usamos '_system' para abrir el enlace en el navegador predeterminado del sistema
      const browser = this.inAppBrowser.create(url, '_system');
      
      // Manejo de errores o salidas si fuera necesario
      browser.on('exit').subscribe(() => {
        console.log('El navegador ha cerrado');
      });
    } else {
      // En caso de no ser un dispositivo móvil, abre el enlace en el navegador predeterminado del sistema
      const browser = this.inAppBrowser.create(url, '_system');
    }
  }
}
