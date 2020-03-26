import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IconsProviderModule } from '../icons-provider.module';
import { NZ_I18N, nl_NL } from 'ng-zorro-antd';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import nl from '@angular/common/locales/nl';
import { ShellComponent } from './components';
import { SharedModule } from '../shared';
import { environment } from 'src/environments/environment';
import { BaseInterceptor, ErrorInterceptor, TokenInterceptor } from './interceptors';
import { JwtModule } from '@auth0/angular-jwt';

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
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => '',
        whitelistedDomains: [environment.API_URL]
      }
    }),

  ],
  providers: [
    { provide: NZ_I18N, useValue: nl_NL },
    { provide: 'BASE_API_URL', useValue: environment.API_URL },
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  exports: [ShellComponent]
})
export class CoreModule { }
