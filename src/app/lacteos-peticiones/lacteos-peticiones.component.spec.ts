import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacteosPeticionesComponent } from './lacteos-peticiones.component';

describe('LacteosPeticionesComponent', () => {
  let component: LacteosPeticionesComponent;
  let fixture: ComponentFixture<LacteosPeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacteosPeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacteosPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
