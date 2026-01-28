import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFaqArea } from './marketing-faq-area';

describe('MarketingFaqArea', () => {
  let component: MarketingFaqArea;
  let fixture: ComponentFixture<MarketingFaqArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingFaqArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingFaqArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
