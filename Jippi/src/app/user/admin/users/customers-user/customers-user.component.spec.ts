import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersUserComponent } from './customers-user.component';

describe('CustomersUserComponent', () => {
  let component: CustomersUserComponent;
  let fixture: ComponentFixture<CustomersUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
