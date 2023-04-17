import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsByLetterComponent } from './pokemons-by-letter.component';

describe('PokemonsByLetterComponent', () => {
  let component: PokemonsByLetterComponent;
  let fixture: ComponentFixture<PokemonsByLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsByLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsByLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
