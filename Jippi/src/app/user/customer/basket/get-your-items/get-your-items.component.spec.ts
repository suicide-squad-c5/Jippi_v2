import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetYourItemsComponent } from './get-your-items.component';

describe('GetYourItemsComponent', () => {
  let component: GetYourItemsComponent;
  let fixture: ComponentFixture<GetYourItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetYourItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetYourItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
