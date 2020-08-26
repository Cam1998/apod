import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = `https://api.nasa.gov/planetary`;
  apikey = `api_key=Q7VqPfBT7urh0em0rxYcq6i9GUA8ABGXgoW3OldD`;

  constructor(private http: HttpClient) { }

  getPosts(id) {
    return this.http.get(`${this.apiURL}/apod?api_key=${id}`);
  }
  generarFecha(fecha) {
    return this.http.get(`${this.apiURL}/apod?date=${fecha}&${this.apikey}`);
  }
}
