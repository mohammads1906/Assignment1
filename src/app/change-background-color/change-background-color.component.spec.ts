import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBackgroundColorComponent } from './change-background-color.component';

describe('ChangeBackgroundColorComponent', () => {
  let component: ChangeBackgroundColorComponent;
  let fixture: ComponentFixture<ChangeBackgroundColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBackgroundColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBackgroundColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
