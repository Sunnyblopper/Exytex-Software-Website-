import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAboutComponyArea } from './team-about-compony-area';

describe('TeamAboutComponyArea', () => {
  let component: TeamAboutComponyArea;
  let fixture: ComponentFixture<TeamAboutComponyArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamAboutComponyArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamAboutComponyArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
