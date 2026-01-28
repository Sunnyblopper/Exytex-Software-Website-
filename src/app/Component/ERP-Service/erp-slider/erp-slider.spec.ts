import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpSlider } from './erp-slider';

describe('ErpSlider', () => {
  let component: ErpSlider;
  let fixture: ComponentFixture<ErpSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErpSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
