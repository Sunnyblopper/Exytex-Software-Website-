import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSectionArea } from './service-section-area';

describe('ServiceSectionArea', () => {
  let component: ServiceSectionArea;
  let fixture: ComponentFixture<ServiceSectionArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSectionArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSectionArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
