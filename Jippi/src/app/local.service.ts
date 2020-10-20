import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
private userType = new BehaviorSubject('visiteur');
userTy = this.userType.asObservable();
private userid = new BehaviorSubject(null);
user_id = this.userid.asObservable();

  constructor() { }

changeType(type: string){
  this.userType.next(type);
}

getUserId(id: number){
this.userid.next(id);
}

}
