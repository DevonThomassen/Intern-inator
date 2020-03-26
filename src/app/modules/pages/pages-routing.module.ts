import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent, LogEntryComponent, WelcomeComponent } from './components';


const routes: Routes = [
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'log-entry',
    component: LogEntryComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
