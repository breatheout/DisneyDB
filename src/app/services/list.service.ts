import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from '../models/detail.interface';
import { Response } from '../models/response.interface';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  getAllDetail(): Observable<Response> {
    return this.http.get<Response>('https://api.disneyapi.dev/characters/');
  }

  getDetailByID(id: string): Observable<Detail> {
    return this.http.get<Detail>('https://api.disneyapi.dev/characters/' + id);
  }
}
