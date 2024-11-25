import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: number | null = null;

  constructor() {}

  setUserId(id: number): void {
    this.userId = id;
  }

  getUserId(): number | null {
    return this.userId;
  }

  isLoggedIn(): boolean {
    return this.userId !== null;
  }
}
