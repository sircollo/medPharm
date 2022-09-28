import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedpharmComponent } from './medpharm.component';

describe('MedpharmComponent', () => {
  let component: MedpharmComponent;
  let fixture: ComponentFixture<MedpharmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedpharmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedpharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
