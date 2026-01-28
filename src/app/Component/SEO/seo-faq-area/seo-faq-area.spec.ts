import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoFaqArea } from './seo-faq-area';

describe('SeoFaqArea', () => {
  let component: SeoFaqArea;
  let fixture: ComponentFixture<SeoFaqArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoFaqArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoFaqArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
