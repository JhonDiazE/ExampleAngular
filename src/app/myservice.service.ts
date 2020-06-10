import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpClient:HttpClient) { 

  }

  public getComments(){
  		return httpClient.get('https://my-json-server.typicode.com/typicode/demo/comments');
  }
}
