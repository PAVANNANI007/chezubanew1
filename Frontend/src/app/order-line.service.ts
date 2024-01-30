import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderLineService {
  private apiUrl = 'http://localhost:3000/api/orderlines';

  constructor(private http: HttpClient) {}  
  getOrderLines(type_id: number, quantity?: number): Observable<any[]> {
    let params = new HttpParams();

    params = params.set('type_id', type_id.toString());

    
    
    if (quantity !== undefined) {
      params = params.set('quantity', quantity.toString());
    }
    // return this.http.get<any[]>(this.apiUrl, { params, body: { type_id: type_id } });

    return this.http.get<any[]>(this.apiUrl, { params });
  }
  
}
