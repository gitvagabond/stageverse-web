import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { PubSubService } from './core/pub-sub.service';
import { CartService } from './services/cart/cart.service';
import { GeoIPService} from './services/geoip/geoip.service';
import { ScrollService} from './services/scroll/scroll.service';
import { EmailService } from './services/email/email.service';

// Shared
import { SharedModule } from './shared/shared.module';

// Pages
import { HomeModule } from './pages/home/home.module';
// import { CreatorsModule } from './pages/creators/creators.module';
// import { StageModule } from './pages/stage/stage.module';
// import { EventModule } from './pages/event/event.module';
// import { EnterModule } from './pages/enter/enter.module';
import { CompanyModule } from './pages/company/company.module';
import { TermsModule } from './pages/terms/terms.module';
import { PrivacyModule } from './pages/privacy/privacy.module';
import { EarlyAccessModule } from './pages/early-access/early-access.module';
import { PressModule } from './pages/press/press.module';
import { NotFoundModule } from './pages/notfound/notfound.module';

// Analytics / GTM
import { Angulartics2Module } from 'angulartics2';
import { AnalyticsService } from './services/analytics/analytics.service';

import { CreatorsModule } from './pages/creators/creators/creators.module';
import { MuseModule } from './pages/muse/muse/muse.module';




@NgModule({
  declarations: [
    AppComponent,
   
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    // CreatorsModule,
    // StageModule,
    // EventModule,
    // EnterModule,
    CompanyModule,
    TermsModule,
    PrivacyModule,
    CreatorsModule,
  
    EarlyAccessModule,
    PressModule,
    NotFoundModule,
    MuseModule,
    Angulartics2Module.forRoot()
  ],
  providers: [PubSubService, CartService, AnalyticsService, ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
