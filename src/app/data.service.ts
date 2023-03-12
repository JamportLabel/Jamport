import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonData: any;

  constructor(private http: HttpClient) { }

  public getJsonData(): Observable<any> {
    if (this.jsonData) {
      // If we've already fetched the data, return it as an Observable
      return new Observable(observer => {
        observer.next(this.jsonData);
        observer.complete();
      });
    } else {
      // If we haven't fetched the data yet, fetch it and store it
      return this.http.get('/data/artists.json').pipe(
        map(data => {
          this.jsonData = data;
          return data;
        })
      );
    }
  }
}
