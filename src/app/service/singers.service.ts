import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SingersService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://ws.audioscrobbler.com/2.0/';
  private apiKey = '07770e52722264221d5106c3abb20e0c';

  getSearchArtists(artistName: string): Observable<any> {
    const params = {
      method: 'artist.search',
      artist: artistName,
      api_key: this.apiKey,
      format: 'json'
    };
    return this.http.get<any>(this.apiUrl, { params });
  }

  getSearchAlbums(albumsName: string): Observable<any> {
    const params = {
      method: 'album.search',
      album: albumsName,
      api_key: this.apiKey,
      format: 'json'
    };
    return this.http.get<any>(this.apiUrl, { params });
  }
}
