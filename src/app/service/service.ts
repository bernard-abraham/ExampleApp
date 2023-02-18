import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models';
import { forkJoin, Observable } from 'rxjs';
import { APIResponse } from '../models';

@Injectable({
    providedIn: 'root'
  })
  export class HttpService {

constructor(private http: HttpClient) { }
// showConfigResponse() {
//     console.log("hi");
// const req = this.http.get<Joke>('https://official-joke-api.appspot.com/random_joke');
// // 0 requests made - .subscribe() not called.
// console.log(req)
// req.subscribe(resp => {
//     this.
//     // display its headers
//     // const keys = resp.headers.keys();
//     // this.headers = keys.map(key =>
//     //   `${key}: ${resp.headers.get(key)}`);

//     // // access the body directly, which is typed as `Config`.
//     // this.config = { ...resp.body! };
//   });
//   }

  getJokes(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Joke>> {
    // let params = new HttpParams().set('ordering', ordering);

    // if (search) {
    //   params = new HttpParams().set('ordering', ordering).set('search', search);
    // }

    return this.http.get<APIResponse<Joke>>(`https://official-joke-api.appspot.com/random_joke`, {
    //   params: params,
    });
  }

}