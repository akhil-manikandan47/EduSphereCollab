import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  
  constructor(private http: HttpClient) { }

  // Fetch all country reports
  public covid19Reports(): Observable<any> {
    return this.http.get("https://disease.sh/v3/covid-19/countries");
  }

  // Fetch report by country
  public covid19ReportsByCountry(country: string): Observable<any> {
    return this.http.get(`https://disease.sh/v3/covid-19/countries/${country}`);
  }
}
