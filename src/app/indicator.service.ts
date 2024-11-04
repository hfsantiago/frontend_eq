import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  private apiUrl = 'http://localhost:8000/api/indicators';  // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getIndicatorById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createIndicator(itemData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, itemData);
  }

  updateIndicator(id: string, itemData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, itemData);
  }

  deleteIndicator(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }


}
