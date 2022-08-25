import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMoreAboutYourNameComponent } from './know-more-about-your-name.component';

describe('KnowMoreAboutYourNameComponent', () => {
  let component: KnowMoreAboutYourNameComponent;
  let fixture: ComponentFixture<KnowMoreAboutYourNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowMoreAboutYourNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMoreAboutYourNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
