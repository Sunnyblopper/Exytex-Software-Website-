import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSlider } from './web-slider';

describe('WebSlider', () => {
  let component: WebSlider;
  let fixture: ComponentFixture<WebSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
