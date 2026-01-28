import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoSlider } from './seo-slider';

describe('SeoSlider', () => {
  let component: SeoSlider;
  let fixture: ComponentFixture<SeoSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
