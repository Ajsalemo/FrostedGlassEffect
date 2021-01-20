import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GetSpecificationsService {
  SPECIFICATIONS_API_URL = 'https://frosted-glass-api.azurewebsites.net/specifications';

  constructor(private httpClient: HttpClient) {}

  getSpecifications(): Observable<any> {
    return this.httpClient.get(this.SPECIFICATIONS_API_URL).pipe(
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
}
