import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export class CustomErrorHandler {
  static handleError(error: HttpErrorResponse): Observable<string> {
    let errorMessageDT: any = [];
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      errorMessageDT = [
        {
          message: error.error.error.message
        }
      ];
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      //console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      if (error.status === 0) {
        errorMessageDT = [
          {
            message: error.error.error.message
          }
        ];
      } else if (error.status === 400) {
        if (error.error.error.validationErrors.length > 0) {
          errorMessageDT = error.error.error.validationErrors;
        }
      } else {
        errorMessageDT = [
          {
            message: error.error.error.message
          }
        ];
      }
    }
    // return an observable with a user-facing error message
    return throwError(errorMessageDT);
  }
}
