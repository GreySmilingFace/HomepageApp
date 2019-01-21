import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HandballServiceService } from './service/handball-service/handball-service.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HandballServiceService
  ],
  declarations: []
})
export class CoreModule { }
