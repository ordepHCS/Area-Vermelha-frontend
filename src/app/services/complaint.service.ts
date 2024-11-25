import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaint } from '../models/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private apiUrl = 'http://localhost:8080/api/complaints';

  constructor(private http: HttpClient) {}

  createComplaint(userId: number, complaint: Complaint): Observable<Complaint> {
    return this.http.post<Complaint>(`${this.apiUrl}/${userId}`, complaint);
  }

  getAllComplaints(): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.apiUrl}/all`);
  }

  getAllComplaintsByUser(userId: number): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.apiUrl}/user/${userId}`);
  }

  getDangerousAreasRanking(): Observable<Map<string, any>[]> {
    return this.http.get<Map<string, any>[]>(`${this.apiUrl}/dangerous-areas-ranking`);
  }
}
