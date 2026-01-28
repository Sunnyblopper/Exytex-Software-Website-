import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonSlider } from './amazon-slider';

describe('AmazonSlider', () => {
  let component: AmazonSlider;
  let fixture: ComponentFixture<AmazonSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazonSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
