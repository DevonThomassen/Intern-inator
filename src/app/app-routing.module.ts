import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './core/components/shell/shell.component';
import { AuthenticatedGuard, LoggedInGuard } from './core/guards';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthenticatedGuard],
    children: [
      {
        path: 'pages',
        loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: '**',
        redirectTo: 'pages'
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
