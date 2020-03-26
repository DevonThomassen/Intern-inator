import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { WelcomeComponent, LogEntryComponent } from './components';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [WelcomeComponent, LogEntryComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PagesModule { }
