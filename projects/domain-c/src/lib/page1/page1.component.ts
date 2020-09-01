import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async execAdd() {
    const add = await import('../my-lib').then(m => m.add);
    console.debug('add', add(1,2));
  }

}
