import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAltaComponent } from './boton-alta.component';

describe('BotonAltaComponent', () => {
  let component: BotonAltaComponent;
  let fixture: ComponentFixture<BotonAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
