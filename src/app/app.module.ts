import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { LetterBarComponent } from './letter-bar/letter-bar.component';
import { HomeComponent } from './home/home.component';
import { WithOrWithoutComponent } from './with-or-without/with-or-without.component';
import { PasswordComponent } from './observables-page/password/password.component';
import { EnfantComponent } from './finances/enfant/enfant.component';
import { ParentComponent } from './finances/parent/parent.component';
import { FinancesComponent } from './finances/finances.component';
import { ObservablesPageComponent } from './observables-page/observables-page.component';
import { ListenerComponent } from './observables-page/listener/listener.component';
import { ProducerComponent } from './observables-page/producer/producer.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { AutoCompleteComponent } from './observables-page/auto-complete/auto-complete.component';
import { StartStopComponent } from './observables-page/start-stop/start-stop.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailsByLetterComponent } from './cocktails-by-letter/cocktails-by-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CocktailComponent,
    LetterBarComponent,
    WithOrWithoutComponent,
    PasswordComponent,
    EnfantComponent,
    ParentComponent,
    FinancesComponent,
    ObservablesPageComponent,
    ListenerComponent,
    ProducerComponent,
    CocktailDetailComponent,
    AutoCompleteComponent,
    StartStopComponent,
    CocktailsListComponent,
    CocktailsByLetterComponent
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
