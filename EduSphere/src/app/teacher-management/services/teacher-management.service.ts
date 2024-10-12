import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherManagementService {

  private apiUrl = 'https://localhost:7188/api/Teacher/getallteachers';

  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
