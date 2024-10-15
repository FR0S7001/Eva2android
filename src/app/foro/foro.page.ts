import { Component, OnInit } from '@angular/core';
import { ForoService } from './foro.service';
import { Topic } from './foro.model'; // Importa la interfaz

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

  constructor(private foroService: ForoService) {}

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
}
