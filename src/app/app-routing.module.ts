import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'dias',
    loadChildren: () => import('./dias/dias.module').then( m => m.DiasPageModule)
  },
  {
    path: 'imagen',
    loadChildren: () => import('./imagen/imagen.module').then( m => m.ImagenPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
