/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BnavThreeComponent } from './bnav-three.component';

describe('BnavThreeComponent', () => {
  let component: BnavThreeComponent;
  let fixture: ComponentFixture<BnavThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnavThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnavThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
