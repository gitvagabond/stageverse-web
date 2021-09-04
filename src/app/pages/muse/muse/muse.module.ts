import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MuseRouterModule } from '../router/muse-router/muse-router.module';
import { MuseComponent } from '../components/muse/muse.component';
import {MatExpansionModule} from '@angular/material/expansion';

import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [MuseComponent],
  imports: [
    CommonModule,
    MuseRouterModule,
    SharedModule,
    CarouselModule,
    MatExpansionModule
  
   
  ]

})
export class MuseModule { }
