import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  todoList = [{
    itemName : 'Class',
    itemDueDate: '13-10-21',
    itemPriority: 'high',
    itemCategory: 'Personal'
  },
  {
    itemName : 'Design',
    itemDueDate: '13-12-21',
    itemPriority: 'low',
    itemCategory: 'Word'
  }
]

  today : number = Date.now()

  constructor( ) { }
  ngOnInit() {
  }
}

  

