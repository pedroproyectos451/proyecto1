import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Historico2Component } from './historico2.component';

describe('Historico2Component', () => {
  let component: Historico2Component;
  let fixture: ComponentFixture<Historico2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Historico2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Historico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
