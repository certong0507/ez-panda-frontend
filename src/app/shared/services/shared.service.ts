/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomErrorHandler } from 'app/utils/custom-error-handler';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Set the http options
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'c31z',
      'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  serverUrl = environment.baseUrl;
  plans = [
    {
      plan: 'Plan Budget',
      duration: 10,
      reward: 'KFC Voucher',
      description: `From rocky mountains to crystal clear lakes, these are the places you must
      see and enjoy. In summers you can bring your food and have a little picnic on top of the
      amazing grasslands.`,
    },
    {
      plan: 'Plan Premium',
      duration: 10,
      reward: '',
      description: `Rocky mountains to crystal clear lakes, these are the places you must
      see and enjoy. In summers you can bring your food and have a little picnic on top of the
      amazing grasslands.`,
    },
  ];
  hlbPlans = [
    {
      plan: 'Plan Budget',
      duration: 10,
      reward: 'KFC Voucher',
      description: `From rocky mountains to crystal clear lakes, these are the places you must
      see and enjoy. In summers you can bring your food and have a little picnic on top of the
      amazing grasslands.`,
    },
    {
      plan: 'Plan Premium',
      duration: 10,
      reward: '',
      description: `Rocky mountains to crystal clear lakes, these are the places you must
      see and enjoy. In summers you can bring your food and have a little picnic on top of the
      amazing grasslands.`,
    },
  ];

  constructor(
    private http: HttpClient,
  ) { }

  GetAPIMethod(getObject: any): Observable<any> {
    const url = this.serverUrl + '/api' + getObject.urlPath;
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(CustomErrorHandler.handleError)
    );
}

  PostAPIMethod(postObject: any): Observable<any> {
    const url = this.serverUrl + '/api' + postObject.urlPath;
    return this.http.post(url, postObject, httpOptions).pipe(
        map(this.extractData),
        catchError(CustomErrorHandler.handleError)
    );
  }

  private extractData(res: Response): Response | unknown {
    const body = res;
    return body || {};
  }
}
