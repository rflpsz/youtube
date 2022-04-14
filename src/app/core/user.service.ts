import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<SocialUser | null> = new BehaviorSubject<SocialUser | null>(null);
  public user$: Observable<SocialUser | null> = this.userSubject.asObservable();

  public authToken!: string;

  constructor() { }

  setUser(user: SocialUser | null) {
    this.userSubject.next(user);
  }

}
