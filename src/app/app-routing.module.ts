import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithOrWithoutComponent } from './with-or-without/with-or-without.component';
import { FinancesComponent } from './finances/finances.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'cocktails/:letter', component: CocktailDetailComponent },
    { path: 'with', component: WithOrWithoutComponent },
    { path: 'without', component: WithOrWithoutComponent },
    { path: 'finances', component: FinancesComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
