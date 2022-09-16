import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsNursesComponent } from './doctors-nurses.component';

describe('DoctorsNursesComponent', () => {
  let component: DoctorsNursesComponent;
  let fixture: ComponentFixture<DoctorsNursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsNursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
