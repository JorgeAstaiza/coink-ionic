import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormUserPage } from './form-user.page';

describe('FormUserPage', () => {
  let component: FormUserPage;
  let fixture: ComponentFixture<FormUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
