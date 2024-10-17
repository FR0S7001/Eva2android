import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('cardAnimation', [
      state('inactive', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('active', style({
        transform: 'scale(1.1)',
        opacity: 0.7
      })),
      transition('inactive <=> active', [
        animate('300ms ease-in-out')
      ]),
    ])
  ]
})

export class HomePage implements OnInit {
  username: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.username = navigation.extras.state['username'];
      localStorage.setItem('username', this.username); // Guarda el username en localStorage
    } else {
      this.username = localStorage.getItem('username') || ''; // Recupera el username de localStorage
    }
  }

  animationState = 'inactive';

  animateCard() {
    this.animationState = this.animationState === 'inactive' ? 'active' : 'inactive';}



  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ngOnInit(): void {
  }

}
