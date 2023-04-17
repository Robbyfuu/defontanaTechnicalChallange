import { Component, DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { AppState } from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  pokemonFavorite: any;
  constructor(
    private store: Store<AppState>
  ) {


  this.store.select(fromStore.getState).subscribe((data) => {
    this.pokemonFavorite = data.pokemon.data.slice(-1).pop();

  })
  }

}
