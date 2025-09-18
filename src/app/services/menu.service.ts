// src/app/services/menu.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getMenus(): Observable<any[]> {
    // Replace this with your API endpoint returning LeftMenu rows
    return this.http.get<any[]>('/api/LeftMenu');
  }
}
