import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { WelcomeComponent, LogEntryComponent, CalendarComponent } from './components';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [WelcomeComponent, LogEntryComponent, CalendarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PagesModule { }
