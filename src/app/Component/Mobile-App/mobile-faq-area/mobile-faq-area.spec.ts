import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFaqArea } from './mobile-faq-area';

describe('MobileFaqArea', () => {
  let component: MobileFaqArea;
  let fixture: ComponentFixture<MobileFaqArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileFaqArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileFaqArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
