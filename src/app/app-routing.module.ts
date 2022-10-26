import { MainComponent } from './main/main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithComponent } from './with/with.component';
import { WithoutComponent } from './without/without.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/all' },
    { path: 'all', component: MainComponent },
    { path: 'all/:letter', component: MainComponent },
    { path: 'with', component: WithComponent },
    { path: 'without', component: WithoutComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
