import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFaqArea } from './web-faq-area';

describe('WebFaqArea', () => {
  let component: WebFaqArea;
  let fixture: ComponentFixture<WebFaqArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebFaqArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebFaqArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
