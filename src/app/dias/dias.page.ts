import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../api.service';
import * as moment from 'moment';


@Component({
  selector: 'app-dias',
  templateUrl: 'dias.page.html',
  styleUrls: ['dias.page.scss'],
})
export class DiasPage implements OnInit {

 fechaGene: Date = new Date();
  customPickerOptions;
  date: Date;
  explanation: string;
  title: string;
  url: string;
  mimeType: string;
  public maxDate = moment().format();
  public minDate = moment().subtract(7,'d').format();

  constructor(private apiService: ApiService) {
    this.customPickerOptions = {
      buttons: [{
        text: 'Ir',
        handler: ( evento ) => {

          const year = evento.year.value;
          const month = evento.month.value;
          const day = evento.day.value;
          const fechaAMD = year+"-"+month+"-"+day;

          this .apiService.generarFecha(fechaAMD).subscribe(
            (res: any) => {
              this.date = res.date;
              this.explanation = res.explanation;
              this.title = res.title;
              this.url = res.url;
              this.mimeType = res.media_type;
            }
          );
        }
      }, {
        text: 'Cancelar',
        handler: () => {
      }
    }]
    }
  }

  ngOnInit() {
  }

}
