import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Simulate a 3 second delay
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  }

}
