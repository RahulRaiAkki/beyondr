import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProfileComponent } from './complete-profile.component';

describe('CompleteUserDetailsComponent', () => {
  let component: CompleteProfileComponent;
  let fixture: ComponentFixture<CompleteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
