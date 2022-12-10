import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithOrWithoutComponent } from './with-or-without/with-or-without.component';
import { PasswordComponent } from './observables-page/password/password.component';
import { FinancesComponent } from './finances/finances.component';
import { ObservablesPageComponent } from './observables-page/observables-page.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { CocktailsByLetterComponent } from './cocktails-by-letter/cocktails-by-letter.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'cocktails/:letter/list', component: CocktailsByLetterComponent },
    { path: 'with', component: WithOrWithoutComponent },
    { path: 'without', component: WithOrWithoutComponent },
    { path: 'cocktails/:id/detail', component: CocktailDetailComponent },
    { path: 'password', component: PasswordComponent },
    { path: 'finances', component: FinancesComponent },
    { path: 'observables', component: ObservablesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
