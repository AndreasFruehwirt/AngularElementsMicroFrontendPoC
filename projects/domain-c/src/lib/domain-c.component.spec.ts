import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainCComponent } from './domain-c.component';

describe('DomainCComponent', () => {
  let component: DomainCComponent;
  let fixture: ComponentFixture<DomainCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
