import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.page.html',
  styleUrls: ['./imagen.page.scss'],
})
export class ImagenPage {

  date: Date;
  explanation: string;
  title: string;
  url: string;
  mimeType: string;

  constructor(private apiService: ApiService) {
    this.apiService.getPosts(`Q7VqPfBT7urh0em0rxYcq6i9GUA8ABGXgoW3OldD`).subscribe(
      (res: any) => {
        this.date = res.date;
        this.explanation = res.explanation;
        this.title = res.title;
        this.url = res.url;
        this.mimeType = res.media_type;
  }
  );
}

}
