import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingSlider } from './marketing-slider';

describe('MarketingSlider', () => {
  let component: MarketingSlider;
  let fixture: ComponentFixture<MarketingSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
