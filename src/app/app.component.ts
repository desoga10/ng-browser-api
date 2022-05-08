import { Component, OnInit, Self, SkipSelf } from '@angular/core';
import { BROWSER_STORAGE, StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  providers: [
    StorageService,
    { provide: BROWSER_STORAGE, useFactory: () => sessionStorage },
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'browser';

  constructor(
    @Self() private sessionStorageService: StorageService,
    @SkipSelf() private localStorageService: StorageService
  ) {}

  ngOnInit() {}

  setSession() {
    this.sessionStorageService.set('hero', 'Dr Nice - Session');
  }

  clearSession() {
    this.sessionStorageService.removeSession();
  }

  setLocal() {
    this.localStorageService.set('hero', 'Dr Nice - Local');
  }

  clearLocal() {
    this.localStorageService.removeLocal();
  }
}
