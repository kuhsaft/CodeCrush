import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';

import { HomeComponent } from './home.component';
import { ProblemsHeroComponent } from './problems-hero/problems-hero.component';
import { BannerHeroComponent } from './banner-hero/banner-hero.component';
import { TournamentsHeroComponent } from './tournaments-hero/tournaments-hero.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ProblemsHeroComponent,
    BannerHeroComponent,
    TournamentsHeroComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
