import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clone-container',
  templateUrl: './clone-container.component.html',
  styleUrls: ['./clone-container.component.css']
})
export class CloneContainerComponent implements OnInit, AfterViewInit {
  loading = true;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  ngOnInit() {      
      
  }

  clickerMe(){
    //alert('clicker me');
    console.log('naviagating to actions' + this.activatedRoute);
    this.router.navigate([{outlets: 
      {actionsbar:['actions']
    }
    }],
    {
      relativeTo: this.activatedRoute
    } );
  }

  ngAfterViewInit() {
    //this.router.navigate([{outlets: {actionsbar:['actions']}}]);
  }
  
}
