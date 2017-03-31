import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PescadosComponent } from './pescados.component';

describe('PescadosComponent', () => {
  let component: PescadosComponent;
  let fixture: ComponentFixture<PescadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PescadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PescadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
