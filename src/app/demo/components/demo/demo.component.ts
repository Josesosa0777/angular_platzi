import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';

  items = ['Jose', 'John', 'Kram'];
  objeto = {}
  power = 10;

  ngOnInit(): void {
    // code
  }
  
  addItem() { 
    this.items.push('nuevo item'); 
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
