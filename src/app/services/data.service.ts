import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http:HttpClient) {}

  
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

  getProjects(){
    return this.http.get('http://localhost:3000/jira/project');
  }

  getDashboardData(projectKey:any){
    console.log(`http://localhost:3000/jira/dashboard?key=${projectKey}`);
    return this.http.get(`http://localhost:3000/jira/dashboard?key=${projectKey}`);
  }
}