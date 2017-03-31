import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PescadosPeticionesComponent } from './pescados-peticiones.component';

describe('PescadosPeticionesComponent', () => {
  let component: PescadosPeticionesComponent;
  let fixture: ComponentFixture<PescadosPeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PescadosPeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PescadosPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
