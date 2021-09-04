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
      duration: '12 weeks',
      reward: 'KFC Voucher',
      description: `Budget plan which suitable for all kind level of people
      `,
    },
    {
      plan: 'Premium Savings Account',
      duration: '10 weeks',
      reward: '',
      description: `First of all this account comes with daily interest rates and 
      flexible withdrawals in case you need to have easier access to your cash.`,
    },
  ];
  hlbPlans = [
    {
      plan: 'HLA Wealth Booster Plus',
      duration: '4 weeks',
      reward: 'KFC Voucher',
      description: `Enjoy 5% additional premium allocation on the premium payable for 
      policy year 10 and 15 when you choose a premium payment term of 15 years, 
      while a premium payment term of 20 years gives you 5% additional premium allocation on 
      the premium payable for policy year 10, 15 and 20.`,
    },
    {
      plan: 'Premium Savings Account',
      duration: '10 weeks',
      reward: '',
      description: `First of all this account comes with daily interest rates and 
      flexible withdrawals in case you need to have easier access to your cash.`,
    },
  ];
  userRole: string = 'parent';
  
  mission = [
    {
      mission: 'Ejaan score',
      target: '8/10',
      credit: 20,
      description: `Try your best to score 8 and above, mummy and daddy love you!`,
    },
    {
      mission: 'Math exam core',
      target: 'B+',
      credit: 25,
      description: `If you score B+ and above, 20 credits will be rewarded.`,
    },
  ];

  reward = [
    {
      reward: 'KFC Voucher',
      credit: 50
    },
    {
      reward: '2 Hours Game Time!!',
      credit: 40
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
