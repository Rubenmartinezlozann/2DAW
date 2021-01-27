import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDetallesComponent } from './boton-detalles.component';

describe('BotonDetallesComponent', () => {
  let component: BotonDetallesComponent;
  let fixture: ComponentFixture<BotonDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
