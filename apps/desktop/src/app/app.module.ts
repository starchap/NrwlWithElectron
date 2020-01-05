import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DesktopTabMenuFeatureModule} from '../../../../libs/desktop/tab-menu/feature/src/lib/desktop-tab-menu-feature.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    DesktopTabMenuFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
