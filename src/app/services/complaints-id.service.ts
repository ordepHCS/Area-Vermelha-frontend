import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaint } from '../models/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  private apiUrl = 'http://localhost:8080/api/complaints';

  constructor(private http: HttpClient) {}

  getComplaintsByUserId(userId: number): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.apiUrl}/user/${userId}`);
  }
}
