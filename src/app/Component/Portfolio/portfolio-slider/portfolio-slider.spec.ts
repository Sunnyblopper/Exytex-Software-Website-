import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSlider } from './portfolio-slider';

describe('PortfolioSlider', () => {
  let component: PortfolioSlider;
  let fixture: ComponentFixture<PortfolioSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
