import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) { }

  movieUrl = 'http://www.omdbapi.com/?s=dead&apikey=7a5427d6';

  topHead():Observable<any> {
    return this._http.get(this.movieUrl);
  }

  getMovieByName(name: string):Observable<any> {
    const url = `http://www.omdbapi.com/?s=${name}&apikey=7a5427d6`;
    return this._http.get(url);
  }
}
