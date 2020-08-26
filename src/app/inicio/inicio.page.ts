import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
        {
          icon: 'search-outline',
          name: 'Buscar por fecha',
        redirectTo: '/buscar'
          },
                {
                icon: 'planet-outline',
                name: 'Imagen del día',
              redirectTo: '/imagen'
                },
                {
                  icon: 'cloudy-night-outline',
                  name: 'Ultimos 8 días',
                  redirectTo: '/dias'
                    },
    ];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
