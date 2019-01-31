import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {
    constructor(private http: HttpClient) { }

    async registers(body: string) {
        console.log("1");
            let apiURL = `localhost:5000/testget`;
            // const res = (await this.http.get(apiURL).catch((err: HttpErrorResponse) => {
            //     // simple logging, but you can do a lot more, see below
            //     console.error('An error occurred:', err.error);
            //   }).toPromise();
            // console.log("res");
            // console.log(res);
            // //return res;
            //return "rr";
    }

    register(body:string) {
        let apiURL = "localhost:5000/testget";
        this.http.get<string>(apiURL,{responseType: 'json'}).toPromise().then(data => {
          //this.promiseResult = data;
          console.log('Promise resolved.');
        });
        console.log('I will not wait until promise is resolved..');
      }
}
      
