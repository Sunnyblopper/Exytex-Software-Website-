import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioArea } from './portfolio-area';

describe('PortfolioArea', () => {
  let component: PortfolioArea;
  let fixture: ComponentFixture<PortfolioArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
