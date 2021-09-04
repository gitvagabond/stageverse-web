import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { EnterRoutingModule } from './pages/enter/enter-routing.module';
// import { EventRoutingModule } from './pages/event/event-routing.module';
import { CompanyRoutingModule } from './pages/company/company-routing.module';
import { PrivacyRoutingModule } from './pages/privacy/privacy-routing.module';
// import { StageRoutingModule } from './pages/stage/stage-routing.module';
import { TermsRoutingModule } from './pages/terms/terms-routing.module';
// import { CreatorsRoutingModule } from './pages/creators/creators-routing.module';
import { EarlyAccessRoutingModule } from './pages/early-access/early-access-routing.module';
import { PressRoutingModule } from './pages/press/press-routing.module';
import { HomeRoutingModule } from './pages/home/home-routing.module';

import { HomeComponent } from './pages/home/home.component';

import { NotFoundComponent } from './pages/notfound/notfound.component';
import { MuseRouterModule } from './pages/muse/router/muse-router/muse-router.module';
import { CreatorsRouterModule } from './pages/creators/router/creators-router/creators-router.module';

const routes: Routes = [
  /* define app module routes here, e.g., to lazily load a module
    (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
  */
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];



@NgModule({
  imports: [
    HomeRoutingModule,
    // EnterRoutingModule,
    CompanyRoutingModule,
    // CreatorsRoutingModule,
    // EventRoutingModule,
    PrivacyRoutingModule,
    // StageRoutingModule,
    TermsRoutingModule,
    EarlyAccessRoutingModule,
    CreatorsRouterModule,
    PressRoutingModule,
    MuseRouterModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
