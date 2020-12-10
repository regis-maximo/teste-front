import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { CNPJ } from '../model/cnpj';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CnpjService {

  urlBase: string = 'http://localhost:8080/api/cnpj/';

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) { }

    showMessage(msg: string): void {
      this.snackBar.open(
        msg,
        '', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        }
      );
    }

    getCnpj(cnpj: string): Observable<CNPJ> {
      return this.http.get<CNPJ>(`${this.urlBase}${cnpj}`)
        .pipe(
          catchError(this.handleError<CNPJ>('getCnpj'))
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
