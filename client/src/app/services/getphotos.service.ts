import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GetPhotosService {
  PHOTOS_API_URL = 'https://frosted-glass-api.azurewebsites.net/images';

  constructor(private httpClient: HttpClient) {}

  getPhotos(): Observable<any> {
    return this.httpClient.get(this.PHOTOS_API_URL).pipe(
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
}
