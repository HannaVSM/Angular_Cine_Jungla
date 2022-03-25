import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionPeliculaComponent } from './funcion-pelicula.component';

describe('FuncionPeliculaComponent', () => {
  let component: FuncionPeliculaComponent;
  let fixture: ComponentFixture<FuncionPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
