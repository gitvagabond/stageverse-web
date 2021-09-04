import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { EarlyAccessRoutingModule } from './early-access-routing.module';
import { EarlyAccessComponent } from './early-access.component';

@NgModule({
  declarations: [EarlyAccessComponent],
  imports: [
    CommonModule,
    SharedModule,
    EarlyAccessRoutingModule
  ]
})
export class EarlyAccessModule { }
