import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressComponent } from './press.component';
import { SharedModule } from '../../shared/shared.module';
import { PressRoutingModule } from './press-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [PressComponent],
  imports: [
    CommonModule,
    SharedModule,
    PressRoutingModule,
    CarouselModule
  ]
})
export class PressModule { }
