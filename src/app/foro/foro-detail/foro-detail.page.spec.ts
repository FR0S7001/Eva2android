import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForoDetailPage } from './foro-detail.page';

describe('ForoDetailPage', () => {
  let component: ForoDetailPage;
  let fixture: ComponentFixture<ForoDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
