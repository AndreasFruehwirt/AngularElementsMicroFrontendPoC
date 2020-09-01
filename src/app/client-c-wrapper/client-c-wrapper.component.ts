import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-c-wrapper',
  templateUrl: './client-c-wrapper.component.html',
  styleUrls: ['./client-c-wrapper.component.css']
})
export class ClientCWrapperComponent implements OnInit {

  config = {
    c1: 10,
    c2: 20,
  };

  state = {
    s1: 100,
    s2: 200,
    s3: 300,
  }

  changeState() {
    this.state = {
      s1: this.state.s1 + 1,
      s2: this.state.s2 + 1,
      s3: this.state.s3 + 1,
    }
  }

  message(msg) {
    console.debug('Angular Host: Get Message', msg);
  }
  
  constructor() { }


  ngOnInit(): void {
  }

}
