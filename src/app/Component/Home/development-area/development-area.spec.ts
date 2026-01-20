import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentArea } from './development-area';

describe('DevelopmentArea', () => {
  let component: DevelopmentArea;
  let fixture: ComponentFixture<DevelopmentArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopmentArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
