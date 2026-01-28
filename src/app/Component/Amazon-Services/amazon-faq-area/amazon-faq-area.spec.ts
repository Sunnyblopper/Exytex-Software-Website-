import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonFaqArea } from './amazon-faq-area';

describe('AmazonFaqArea', () => {
  let component: AmazonFaqArea;
  let fixture: ComponentFixture<AmazonFaqArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazonFaqArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonFaqArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
