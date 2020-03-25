import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IconsProviderModule } from '../icons-provider.module';
import { NZ_I18N, nl_NL } from 'ng-zorro-antd';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import nl from '@angular/common/locales/nl';
import { ShellComponent } from './components/shell/shell.component';
import { SharedModule } from '../shared';
import { environment } from 'src/environments/environment';
import { BaseInterceptor } from './interceptors/base.interceptor';

registerLocaleData(nl);

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    BrowserModule,
    IconsProviderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: nl_NL },
    { provide: 'BASE_API_URL', useValue: environment.API_URL },
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
  ],
  exports: [ShellComponent]
})
export class CoreModule { }
