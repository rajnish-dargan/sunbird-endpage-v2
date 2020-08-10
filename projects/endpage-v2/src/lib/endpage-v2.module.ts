import { NgModule } from '@angular/core';
import { EndpageV2Component } from './endpage-v2.component';
import { EndPageComponent } from './endpage/endpage.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EndpageV2Component, EndPageComponent],
  imports: [
    CommonModule
  ],
  exports: [EndpageV2Component, EndPageComponent ]
})
export class EndPageV2Module { }
