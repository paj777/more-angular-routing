import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  clickerMe(){
    console.log('naviagating to actions');
    this.router.navigate([{outlets: {actionsbar:'actions'}}], { relativeTo: this.activatedRoute.parent});
  }
}
