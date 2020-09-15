import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DomainCState, DomainCMessage, DomainCConfig } from './model';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-domain-c',
  template: `
    <div class="domain-c-boarder">
      <h1>Domain C</h1>
      <pre>{{ this.state | json }}</pre>
      <pre>{{ this.config | json }}</pre>
      <button (click)="doStuff()">DoStuff</button>
    </div>

    <div>
      <a routerLink="domain-c/page1">Page 1</a> |
      <a routerLink="domain-c/page2">Page 2</a> |
      <a routerLink="domain-c/lazy">Lazy</a> 
    </div>

    <div>
      <router-outlet></router-outlet>
    </div>

  `,
  styles: [`
    .domain-c-boarder {
      border: 5px darkred solid;
      padding: 20px;
    }
  `]
})
export class DomainCComponent implements OnInit, OnChanges {

  @Input() config: DomainCConfig;
  @Input() state: DomainCState;

  @Output() message = new EventEmitter<DomainCMessage>();

  constructor(private router: Router) { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('Domainc::ngOnChanged', this.state, this.config)
  }


  activateRoute() {
    const idx = location.href.indexOf('domain-c/');
    const route = location.href.substr(idx);
    this.router.navigateByUrl(route);
  }

  ngOnInit(): void {

    this.activateRoute();
    window.addEventListener('popstate', () => {
      this.activateRoute();
    });

  }

  doStuff() {
    console.debug('doStuff');
      const obj = {
        a: 1,
        b: 2,
        c: 3,
      }
    this.message.emit({ type: 'stuff', payload: obj });
  }

}
