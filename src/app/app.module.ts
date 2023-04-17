import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { PokemonsTableComponent } from './components/pokemons-table/pokemons-table.component';
import { PokemonsDetailsComponent } from './components/pokemons-details/pokemons-details.component';
import { MaterialModule } from 'src/shared/material.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { pokemonReducer } from './store/reducers/app.reducer';
import { PokemonsByLetterComponent } from './components/pokemons-by-letter/pokemons-by-letter.component';

pokemonReducer

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonsTableComponent,
    PokemonsDetailsComponent,
    PokemonsByLetterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({ pokemon: pokemonReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(effects),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
