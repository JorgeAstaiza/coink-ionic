import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneNumberPage } from './phone-number.page';

describe('PhoneNumberPage', () => {
  let component: PhoneNumberPage;
  let fixture: ComponentFixture<PhoneNumberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhoneNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
