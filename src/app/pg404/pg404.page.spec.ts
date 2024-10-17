import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg404Page } from './pg404.page';

describe('Pg404Page', () => {
  let component: Pg404Page;
  let fixture: ComponentFixture<Pg404Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pg404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
