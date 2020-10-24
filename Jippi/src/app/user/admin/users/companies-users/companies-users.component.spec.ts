import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesUsersComponent } from './companies-users.component';

describe('CompaniesUsersComponent', () => {
  let component: CompaniesUsersComponent;
  let fixture: ComponentFixture<CompaniesUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
