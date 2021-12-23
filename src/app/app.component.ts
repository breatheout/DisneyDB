import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-pwa';
  loading: boolean = true;

  constructor(private _spinnerService: SpinnerService) {
    this.loading = true;
  }

  ngOnInit() {
    this.listenToLoading();
  }

  listenToLoading(): void {
    console.log('spinner works');
    this._spinnerService.isLoading
      .pipe(delay(300)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((isLoading: any) => {
        this.loading = isLoading;
        console.log('APP.COMPONENT isLoading:' + isLoading);
      });
  }
}
