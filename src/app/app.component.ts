import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ServerCallerService } from '../services/server-caller.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Bike } from '../model/bike.model';
import { Friends } from '../model/friends.model';
import { Students } from '../model/students.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tableArray = [true, false, false];

  friendsdisplayedColumns = ['id', 'name', 'dept'];
  studentsdisplayedColumns = ['rollno', 'name', 'marks'];
  bikedisplayedColumns = ['srNo', 'bikeName', 'engine'];
  friendsdataSource: MatTableDataSource<Friends>;
  studentsdataSource: MatTableDataSource<Students>;
  bikedataSource: MatTableDataSource<Bike>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serverCaller: ServerCallerService) {}

  ngOnInit(): void {
    this.serverCaller.getData('table1', this.friendsTableCallBack, this);
  }

  public friendsTableCallBack = (data) => {
    console.log('Inside Friends callback');
    console.log(data);
    this.friendsdataSource = new MatTableDataSource(data);
    this.friendsdataSource.paginator = this.paginator;
    this.friendsdataSource.sort = this.sort;
  }

  public studentsTableCallBack = (data) => {
    console.log('Inside Students callback');
    console.log(data);
    this.studentsdataSource = new MatTableDataSource(data);
    this.studentsdataSource.paginator = this.paginator;
    this.studentsdataSource.sort = this.sort;
  }

  public bikeTableCallBack = (data) => {
    console.log('Inside Bike callback');
    console.log(data);
    this.bikedataSource = new MatTableDataSource(data);
    this.bikedataSource.paginator = this.paginator;
    this.bikedataSource.sort = this.sort;
  }

  applyFriendsFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.friendsdataSource.filter = filterValue;
  }

  applyStudentsFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.studentsdataSource.filter = filterValue;
  }

  applyBikeFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.bikedataSource.filter = filterValue;
  }

  public showTable = (tableNumber: number) => {
    this.tableArray = [false, false, false];
    this.tableArray[tableNumber] = true;
    if (tableNumber === 0) {
      this.serverCaller.getData('table1', this.friendsTableCallBack, this);
    } else if (tableNumber === 1) {
      this.serverCaller.getData('table2', this.studentsTableCallBack, this);
    } else if (tableNumber === 2) {
      this.serverCaller.getData('table3', this.bikeTableCallBack, this);
    }

  }
}
