import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../../local.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  kinds: [];
  items: any = [];
  items_kinds: {} = {
    "Camera & Photo": false,
    "Computers" : false,
    "Wearable Technology": false,
    "Male": false,
    "Female" : false,
    "Kids": false,
    "Action figures": false,
    "Animals": false,
    "Cars and radio controlled": false,
    "Dolls": false,
    "Creative toys": false,
    "camping": false,
    "Hunting and fishing": false,
    "Biking": false,
    "Rock Climbing": false,
  }
  constructor(private local: LocalService) {}

  ngOnInit(): void {
    
  }
  ngDoCheck() {
this.local.items_list.subscribe(items => this.items = items);
    console.log('items_list in filter', this.items);
    
    console.log('<<<',this.items,this.items_kinds)
  }

  filterItems(){
    for (var i = 0; i < this.items.length; i++){
      if(!this.items_kinds[this.items[i].itemKind]){
        this.items.splice(i, 1);
      }
    }
  }
  checkCheckBoxvalue(event){
    console.log('test filter',event.checked)
  }

}
