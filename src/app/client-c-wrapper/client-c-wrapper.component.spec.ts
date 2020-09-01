import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCWrapperComponent } from './client-c-wrapper.component';

describe('ClientCWrapperComponent', () => {
  let component: ClientCWrapperComponent;
  let fixture: ComponentFixture<ClientCWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
