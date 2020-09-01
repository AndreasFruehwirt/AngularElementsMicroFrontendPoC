import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef, Injector } from '@angular/core';
import { DomainCModule, DomainCComponent } from 'domain-c';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule,
    DomainCModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    
    const elm = createCustomElement(
      DomainCComponent, 
      { injector: this.injector });

    customElements.define('xsc-domain-c', elm);

  } 

}
