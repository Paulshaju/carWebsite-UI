import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carsDetails } from './data-model.model';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  getAllDetails(): Observable<carsDetails[]>{
    return this.http.get<carsDetails[]>('https://paulshaju.github.io/carData/carData.json')
  }


}
