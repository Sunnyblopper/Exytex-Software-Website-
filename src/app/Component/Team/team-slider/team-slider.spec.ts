import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSlider } from './team-slider';

describe('TeamSlider', () => {
  let component: TeamSlider;
  let fixture: ComponentFixture<TeamSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
