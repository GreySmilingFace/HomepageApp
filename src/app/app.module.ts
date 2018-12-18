import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SponsorenComponent } from './sponsoren/sponsoren.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TeamsModule } from './teams/teams.module';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeamsModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SponsorenComponent,
    PageNotFoundComponent,
    HomeComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
