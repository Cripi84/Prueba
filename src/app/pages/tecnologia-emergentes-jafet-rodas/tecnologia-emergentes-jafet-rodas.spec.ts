import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaEmergentesJafetRodas } from './tecnologia-emergentes-jafet-rodas';

describe('TecnologiaEmergentesJafetRodas', () => {
  let component: TecnologiaEmergentesJafetRodas;
  let fixture: ComponentFixture<TecnologiaEmergentesJafetRodas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologiaEmergentesJafetRodas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaEmergentesJafetRodas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
