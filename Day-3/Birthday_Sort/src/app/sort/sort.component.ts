import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  
  constructor() { }
  @Output() choice = new EventEmitter<string>();

  ngOnInit(): void {
  }

  sort_name(){
    this.choice.emit("By_name")
  }

  sort_age(){
    this.choice.emit("By_age")
  }

}
