import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './core/components/shell/shell.component';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';

const routes: Routes = [
  { path: '', component: ShellComponent, canActivate: [AuthenticatedGuard], },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
