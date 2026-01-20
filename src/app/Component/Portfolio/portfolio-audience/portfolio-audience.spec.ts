import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAudience } from './portfolio-audience';

describe('PortfolioAudience', () => {
  let component: PortfolioAudience;
  let fixture: ComponentFixture<PortfolioAudience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioAudience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioAudience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
