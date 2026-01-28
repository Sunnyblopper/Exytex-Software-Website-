import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSlide } from './side-slide';

describe('SideSlide', () => {
  let component: SideSlide;
  let fixture: ComponentFixture<SideSlide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideSlide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideSlide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
