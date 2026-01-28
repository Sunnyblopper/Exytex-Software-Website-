import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicSlider } from './graphic-slider';

describe('GraphicSlider', () => {
  let component: GraphicSlider;
  let fixture: ComponentFixture<GraphicSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
