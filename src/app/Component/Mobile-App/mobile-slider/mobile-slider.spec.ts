import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSlider } from './mobile-slider';

describe('MobileSlider', () => {
  let component: MobileSlider;
  let fixture: ComponentFixture<MobileSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
