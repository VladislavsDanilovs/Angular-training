import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Eduars", "Brauskis", "eduard@inbox.lv", 50000),
    new SalesPerson("John", "Doe", "john@inbox.lv", 40000),
    new SalesPerson("Oleg", "Kartauskis", "oleg@inbox.lv", 20000),
    new SalesPerson("Andris", "Zakrauskis", "andris@inbox.lv", 70000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
