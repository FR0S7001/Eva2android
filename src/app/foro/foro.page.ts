import { Component, OnInit } from '@angular/core';
import { ForoService } from './foro.service';
import { Topic } from './foro.model'; // Importa la interfaz
import { Camera, CameraResultType, CameraSource, CameraPermissionType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
})
export class ForoPage implements OnInit {
  isModalOpen = false;
  isEditMode = false;
  currentTopicId: number | null = null;
  newTopic: Topic = {
    id: 0, // Inicializa con un valor por defecto
    title: '',
    description: ''
  };
  topics: Topic[] = [];
  profileImage: string | null = null;

  constructor(private foroService: ForoService, private actionSheetController: ActionSheetController) {}

  ngOnInit() {
    this.loadTopics();
  }

  loadTopics() {
    this.foroService.getTopics().subscribe(data => {
      this.topics = data;
    });
  }

  openModal(editMode = false, topic: Topic | null = null) {
    this.isEditMode = editMode;
    if (editMode && topic) {
      this.currentTopicId = topic.id;
      this.newTopic = { ...topic };
    } else {
      this.newTopic = { id: 0, title: '', description: '' };
    }
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isEditMode = false;
    this.currentTopicId = null;
  }

  saveTopic() {
    if (this.isEditMode) {
      this.foroService.updateTopic(this.currentTopicId!, this.newTopic).subscribe(() => {
        this.loadTopics();
        this.closeModal();
      });
    } else {
      this.foroService.addTopic(this.newTopic).subscribe(() => {
        this.loadTopics();
        this.closeModal();
      });
    }
  }

  deleteTopic(id: number) {
    this.foroService.deleteTopic(id).subscribe(() => {
      this.loadTopics();
    });
  }

  async requestCameraPermissions() {
    if (Capacitor.getPlatform() !== 'web') {
      const permissions = await Camera.requestPermissions({
        permissions: ['camera', 'photos']
      });

      if (permissions.camera === 'granted' && permissions.photos === 'granted') {
        console.log('Permisos concedidos');
      } else {
        console.log('Permisos denegados');
      }
    } else {
      console.log('La cámara no está disponible en la web.');
    }
  }

  async selectImage() {
    await this.requestCameraPermissions();
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccionar Acción:',
      buttons: [
        {
          text: 'Tomar Foto',
          handler: () => {
            this.getImage(CameraSource.Camera);
          }
        },
        {
          text: 'Seleccionar de la Galería',
          handler: () => {
            this.getImage(CameraSource.Photos);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async getImage(source: CameraSource) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: source // Aquí se especifica la fuente de la imagen
    });

    if (image.dataUrl) {
      this.profileImage = image.dataUrl;
    }
  }
  
}
