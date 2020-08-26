import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPageRoutingModule } from './buscar-routing.module';

import { BuscarPage } from './buscar.page';
import { ComponentsModule } from '../components/components.module';
import { SafePipe } from '../pipe/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BuscarPage, SafePipe]
})
export class BuscarPageModule {}
