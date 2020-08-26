import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DiasPage } from './dias.page';

import { DiasPageRoutingModule } from './dias-routing.module';
import { ComponentsModule } from '../components/components.module';
import { SafePipe } from '../pipe/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiasPage, SafePipe]
})
export class DiasPageModule {}
