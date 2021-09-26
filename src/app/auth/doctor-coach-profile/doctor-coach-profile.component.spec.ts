import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCoachProfileComponent } from './doctor-coach-profile.component';

describe('DoctorCoachProfileComponent', () => {
  let component: DoctorCoachProfileComponent;
  let fixture: ComponentFixture<DoctorCoachProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorCoachProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorCoachProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
