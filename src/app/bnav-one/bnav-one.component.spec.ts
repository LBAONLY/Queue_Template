/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BnavOneComponent } from './bnav-one.component';

describe('BnavOneComponent', () => {
  let component: BnavOneComponent;
  let fixture: ComponentFixture<BnavOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnavOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnavOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
