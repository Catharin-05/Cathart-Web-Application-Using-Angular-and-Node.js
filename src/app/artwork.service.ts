import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  private apiUrl = 'http://localhost:5000/api/artworks';

  constructor(private http: HttpClient) { }

  getArtworksByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${category}`);
  }
}
