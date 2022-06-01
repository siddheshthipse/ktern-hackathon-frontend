import { Injectable } from '@angular/core';
import fetch from 'node-fetch';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  
  // fetch function
  // async fetchData() {
  //   const res = await fetch(
  //     'https://https://teampredators.atlassian.net/rest/api/3/dashboard',
  //     {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Basic ${Buffer.from(
  //           'siddheshthipse@gmail.com:aJjCPBLZBDGmO6uoOib59B3A'
  //         ).toString('base64')}`,
  //         Accept: 'application/json',
  //       },
  //     }
  //   );

  //   console.log(res);
  // }
}