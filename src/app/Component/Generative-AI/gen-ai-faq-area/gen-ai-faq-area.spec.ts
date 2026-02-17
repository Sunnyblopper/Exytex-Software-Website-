import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpFaqArea } from './erp-faq-area';

describe('ErpFaqArea', () => {
  let component: ErpFaqArea;
  let fixture: ComponentFixture<ErpFaqArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpFaqArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErpFaqArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
