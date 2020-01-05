import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuComponent } from './tab-menu/tab-menu.component';

import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatBadgeModule} from '@angular/material/badge'; 

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatBadgeModule
  ],
  declarations: [TabMenuComponent],
  exports: [TabMenuComponent]
})
export class DesktopTabMenuFeatureModule {}
