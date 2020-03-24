import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IconsProviderModule } from '../icons-provider.module';
import { NZ_I18N, nl_NL } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import nl from '@angular/common/locales/nl';
import { ShellComponent } from './components/shell/shell.component';
import { SharedModule } from '../shared';

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
  providers: [{ provide: NZ_I18N, useValue: nl_NL }],
  exports: [ShellComponent]
})
export class CoreModule { }
