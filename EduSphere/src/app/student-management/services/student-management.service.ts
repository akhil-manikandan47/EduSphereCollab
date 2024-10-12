import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

interface Environment {
  production: boolean;
  baseUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentManagementService {

  private apiUrl = 'https://localhost:7188';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getallstudents`);
  }

  addStudent(student: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/addstudent`, student);
  }

  private baseUrl: string = `${(environment as Environment).baseUrl}/api/teacher`;

  

  // getAllTeachers(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/getallteachers`);
  // }

  // getTeachers(): Observable<any[]> {
  //   return this.http.get<any[]>(`${environment.baseUrl}/api/teacher/getallteachers`);
  // }
}