import { Component, ElementRef, NgZone, ViewChild,Renderer2 } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('loadingScreen') loadingElement: ElementRef

  title = 'carsfusion'
  isLoading = true

  constructor(private router: Router) {
    this.router.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }
  navigationInterceptor(event: RouterEvent): void {

    const loader = document.getElementById('loadingContainer')
    const main = document.getElementById('mainBody')
    if (event instanceof NavigationStart) {
      loader.style.opacity = "1"
      loader.style.display = "block"
      main.style.display = "none"
      main.style.opacity = "0"
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        loader.style.opacity = "0"
        loader.style.display = "none"
        main.style.display = "block"
        setTimeout(()=>{
          main.style.opacity = "1"
        },50)
      }, 2000);
    }
    if (event instanceof NavigationCancel) {
      setTimeout(() => { 
        this.isLoading = false;
      }, 2000);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => { 
        this.isLoading = false;
      }, 2000);
    }
  }
}
