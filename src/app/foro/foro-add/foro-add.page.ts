import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CLForo } from 'src/app/model/CLForo';

import { ForoService } from '../foro.service';


@Component({
  selector: 'app-foro-add',
  templateUrl: './foro-add.page.html',
  styleUrls: ['./foro-add.page.scss'],
})
export class ForoAddPage implements OnInit {

  foroForm!: FormGroup;
  foro: CLForo = {
    id: 0,
    nombre: '',
    descripcion: ''
  };

  constructor(private formBuilder: FormBuilder,
    // Injectamos las librerías necesarias
    private loadingController: LoadingController,
    private restApi: ForoService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.foroForm = this.formBuilder.group({
      "prod_name": [null, Validators.required],
      'prod_desc': [null, Validators.required]
    });
  }

  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit del Product ADD")

    // Creamos un Loading Controller, Ojo no lo muestra
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    // Muestra el Loading Controller
    await loading.present();
    await this.restApi.addForo(this.foro)
    .subscribe({
      next: (res: any) => {
        console.log("Next AddForo Page",res)
        loading.dismiss(); //Elimina la espera
        if (res== null){ // No viene respuesta del registro
          console.log("Next No Agrego, Ress Null ");
          return
        }
        // Si viene respuesta
        console.log("Next Agrego SIIIIII Router saltaré ;",this.router);
        this.router.navigate(['/foro-list']);
      }
      , complete: () => { }
      , error: (err: any) => {
        console.log("Error AddProduct Página", err);
        loading.dismiss(); //Elimina la espera
      }
    });
  console.log("Observe que todo lo del suscribe sale después de este mensaje")
}

}
