import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  isLoading: BehaviorSubject<boolean>;
  //booleanLoading: boolean;

  constructor() {
    this.isLoading = new BehaviorSubject<boolean>(false);
    //this.booleanLoading = false;
  }

  show(): void {
    this.isLoading.next(true);
    console.log('show() this.isLoading:');
    console.log(this.isLoading);
    //this.booleanLoading = true;
    //console.log(this.booleanLoading);
  }

  hide() {
    this.isLoading.next(false);
    console.log('hide() this.isLoading:');
    console.log(this.isLoading);
    //this.booleanLoading = false;
    //console.log(this.booleanLoading);
  }
}
