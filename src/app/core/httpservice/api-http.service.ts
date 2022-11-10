import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  baseUrl = environment.apiEndpoint
  constructor(    
    private http: HttpClient
  ) { }
  headers = new HttpHeaders({
    
    'Content-Type': 'application/json'
});
  public get<TResult>(url: string, options?: any) : any{
    return this.http.get<TResult>(this.baseUrl+url, options);
  }
  public post<TResult>(url: string, data: any, options?: any) : any {
    return this.http.post<TResult>(this.baseUrl+url, data, options);
  }
  public put<TResult>(url: string, data: any, options?: any) : any{
    return this.http.put<TResult>(this.baseUrl+url, data, options);
  }
  public delete<TResult>(url: string, options? : any) : any{
    // alert(this.baseUrl+url)
    return this.http.delete<TResult>(this.baseUrl+url, options);
  }
}