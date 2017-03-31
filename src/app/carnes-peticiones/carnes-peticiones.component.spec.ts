import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnesPeticionesComponent } from './carnes-peticiones.component';

describe('CarnesPeticionesComponent', () => {
  let component: CarnesPeticionesComponent;
  let fixture: ComponentFixture<CarnesPeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnesPeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnesPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
