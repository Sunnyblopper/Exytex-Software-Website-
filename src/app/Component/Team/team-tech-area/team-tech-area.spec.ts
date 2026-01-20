import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTechArea } from './team-tech-area';

describe('TeamTechArea', () => {
  let component: TeamTechArea;
  let fixture: ComponentFixture<TeamTechArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamTechArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamTechArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
