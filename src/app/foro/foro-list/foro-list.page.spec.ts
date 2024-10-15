import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForoListPage } from './foro-list.page';

describe('ForoListPage', () => {
  let component: ForoListPage;
  let fixture: ComponentFixture<ForoListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
