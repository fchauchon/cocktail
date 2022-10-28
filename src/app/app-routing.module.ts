import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithOrWithoutComponent } from './with-or-without/with-or-without.component';
import { PasswordComponent } from './password/password.component';
import { FinancesComponent } from './finances/finances.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'home/:letter', component: HomeComponent },
    { path: 'with', component: WithOrWithoutComponent },
    { path: 'without', component: WithOrWithoutComponent },
    { path: 'password', component: PasswordComponent },
    { path: 'finances', component: FinancesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
