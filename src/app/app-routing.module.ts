import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SponsorenComponent } from './sponsoren/sponsoren.component';
import { HomeComponent } from './home/home.component';
import { Male1Component } from './teams/male1/male1.component';
import { Male2Component } from './teams/male2/male2.component';
import { Male3Component } from './teams/male3/male3.component';
import { Female1Component } from './teams/female1/female1.component';
import { Female2Component } from './teams/female2/female2.component';
import { JuniorComponent } from './teams/junior/junior.component';
import { TeenEComponent } from './teams/teen-e/teen-e.component';
import { TeenAComponent } from './teams/teen-a/teen-a.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'maenner1', component: Male1Component },
  { path: 'maenner2', component: Male2Component },
  { path: 'maenner3', component: Male3Component },
  { path: 'damen1', component: Female1Component },
  { path: 'damen2', component: Female2Component },
  { path: 'a-jugend', component: TeenAComponent },
  { path: 'e-jugend', component: TeenEComponent },
  { path: 'minis', component: JuniorComponent },
  { path: 'sponsoren', component: SponsorenComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
