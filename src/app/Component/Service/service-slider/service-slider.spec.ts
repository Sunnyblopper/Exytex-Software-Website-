import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSlider } from './service-slider';

describe('ServiceSlider', () => {
  let component: ServiceSlider;
  let fixture: ComponentFixture<ServiceSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
