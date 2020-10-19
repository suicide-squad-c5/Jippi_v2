import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentiCompComponent } from './authenti-comp.component';

describe('AuthentiCompComponent', () => {
  let component: AuthentiCompComponent;
  let fixture: ComponentFixture<AuthentiCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentiCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
