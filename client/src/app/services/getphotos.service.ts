import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "@env/environment.prod"
@Injectable({
  providedIn: 'root',
})
export class GetPhotosService {
  BASE_URL = environment.BASE_URL;

  constructor(private httpClient: HttpClient) {}

  getPhotos(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/photos`).pipe(
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
}
