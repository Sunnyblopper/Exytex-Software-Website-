import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicFaqArea } from './graphic-faq-area';

describe('GraphicFaqArea', () => {
  let component: GraphicFaqArea;
  let fixture: ComponentFixture<GraphicFaqArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicFaqArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicFaqArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
