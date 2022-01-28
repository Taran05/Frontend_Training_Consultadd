import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private appService : AppService) { }
  choice=''
  tabledata: any=[]

  ngOnInit(): void {
    this.appService.getdata().subscribe((data)=>{
      this.tabledata=data;
    })
  }

  receiveVal($event: any){
    this.choice=$event
    this.sortData()
  }

  sortData(){
    if(this.choice=="By_name"){
      console.log(this.choice)
      this.tabledata.sort((a : any, b : any) => (a.name > b.name) ? 1 : -1)
    }

    if(this.choice=="By_age"){
      console.log(this.choice)
      this.tabledata.sort((a : any, b : any) => (new Date(a.birthDate).valueOf()- new Date(b.birthDate).valueOf()))
    }
  }

  

  




}
