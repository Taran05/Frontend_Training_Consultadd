import { Component, OnInit } from '@angular/core';
import { Child } from './child';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  child: Child[] = [];
  userData: any = [];

  constructor(private appService : AppService) { }

  ngOnInit(): void {
    this.appService.getData().subscribe((data) => {
      this.userData=data;
    }
    )
  }

}
