import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagenPageRoutingModule } from './imagen-routing.module';

import { ImagenPage } from './imagen.page';
import { SafePipe } from '../pipe/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagenPageRoutingModule
  ],
  declarations: [ImagenPage, SafePipe]
})
export class ImagenPageModule {}
