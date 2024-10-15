import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForoAddPage } from './foro-add.page';

describe('ForoAddPage', () => {
  let component: ForoAddPage;
  let fixture: ComponentFixture<ForoAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
