import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent} from './heroes.component';
import { DashboardComponent} from './dashboard.component';

import { CultivationteamComponent } from './cultivationteam/cultivationteam.component';
import { OtherexpensesComponent } from './otherexpenses/otherexpenses.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    CultivationteamComponent,
    OtherexpensesComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
   {
    path: 'heroes',
    component: HeroesComponent
   },
   {
    path: 'dashboard',
    component: DashboardComponent
   }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
