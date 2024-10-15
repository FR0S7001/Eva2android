import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForoEditPage } from './foro-edit.page';

describe('ForoEditPage', () => {
  let component: ForoEditPage;
  let fixture: ComponentFixture<ForoEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
