import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { WithOrWithoutComponent } from './with-or-without/with-or-without.component';
import { EnfantComponent } from './finances/enfant/enfant.component';
import { ParentComponent } from './finances/parent/parent.component';
import { FinancesComponent } from './finances/finances.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CocktailComponent,
    NavBarComponent,
    WithOrWithoutComponent,
    EnfantComponent,
    ParentComponent,
    FinancesComponent,
    CocktailDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
