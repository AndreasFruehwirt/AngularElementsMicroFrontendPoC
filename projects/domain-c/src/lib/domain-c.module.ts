import { NgModule } from '@angular/core';
import { DomainCComponent } from './domain-c.component';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { DOMAIN_C_ROUTES } from './domain-c.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(DOMAIN_C_ROUTES, { initialNavigation: true, useHash: false })
    // TODO: Check for forChild
  ],
  declarations: [
    DomainCComponent,
    Page1Component,
    Page2Component,
    NotFoundComponent
  ],
  exports: [
    DomainCComponent
  ]
})
export class DomainCModule { }
