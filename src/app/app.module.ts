import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { WithComponent } from './with/with.component';
import { WithoutComponent } from './without/without.component';
import { PasswordComponent } from './password/password.component';
import { EnfantComponent } from './enfant/enfant.component';
import { ParentComponent } from './parent/parent.component';
import { SoldeComponent } from './solde/solde.component';
import { FinancesComponent } from './finances/finances.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CocktailComponent,
    NavBarComponent,
    MainComponent,
    WithComponent,
    WithoutComponent,
    PasswordComponent,
    EnfantComponent,
    ParentComponent,
    SoldeComponent,
    FinancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
