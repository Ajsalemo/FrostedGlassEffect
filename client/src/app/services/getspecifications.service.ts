import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetSpecificationsService {
  BASE_URL = environment.BASE_URL;

  constructor(private httpClient: HttpClient) {}

  getSpecifications(): Observable<any> {
    return this.httpClient
      .get(`${this.BASE_URL}/specifications`)
      .pipe(
        catchError((err: any) => {
          return throwError(err);
        })
      );
  }
}
