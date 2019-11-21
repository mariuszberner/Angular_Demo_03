import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatkaComponent } from './formatka.component';

describe('FormatkaComponent', () => {
  let component: FormatkaComponent;
  let fixture: ComponentFixture<FormatkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
