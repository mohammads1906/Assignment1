import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFavouriteRainbowColorsComponent } from './choose-favourite-rainbow-colors.component';

describe('ChooseFavouriteRainbowColorsComponent', () => {
  let component: ChooseFavouriteRainbowColorsComponent;
  let fixture: ComponentFixture<ChooseFavouriteRainbowColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseFavouriteRainbowColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFavouriteRainbowColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
