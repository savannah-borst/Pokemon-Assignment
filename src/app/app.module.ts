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
import { TrainerInfoComponent } from './components/trainer-info/trainer-info.component';
import { TrainerCollectionComponent } from './components/trainer-collection/trainer-collection.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [ //components
    AppComponent,
    LandingPage,
    TrainerPage,
    CataloguePage,
    InputUsernameComponent,
    TrainerInfoComponent,
    TrainerCollectionComponent,
    NavbarComponent,
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
