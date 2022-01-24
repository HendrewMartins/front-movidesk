import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {


  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.router.navigate(['chart'], { relativeTo: this.route.parent });
  }

}
