import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Media } from '../model/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  urlBase: string = 'http://localhost:8080/api/media';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(
      msg,
      '', {
        duration: 1000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      }
    );
  }

  calcularMedia(media: Media): Observable<Media> {
    return this.http.post<Media>(this.urlBase, media, this.httpOptions)
      .pipe(
        catchError(this.handleError<Media>('calcularMedia'))
       )
  };

  handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
       // TODO: send the error to remote logging infrastructure
      console.error(error) // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }

}
