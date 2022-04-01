import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPage } from './pages/landing/landing.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { InputUsernameComponent } from './components/input-username/input-username.component';
import { TrainerInfoComponent } from '../app/components/trainer-info/trainer-info.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { PokemonListComponent } from '../app/components/pokemon-list/pokemon-list.component';
import { CatchButtonComponent } from '../app/components/catch-button/catch-button.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';



@NgModule({
  declarations: [ //components
    AppComponent,
    LandingPage,
    TrainerPage,
    CataloguePage,
    InputUsernameComponent,
    TrainerInfoComponent,
    NavbarComponent,
    PokemonListComponent,
    CatchButtonComponent,
    PokemonListItemComponent,
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
