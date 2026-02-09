import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDataSlider } from './project-data-slider';

describe('ProjectDataSlider', () => {
  let component: ProjectDataSlider;
  let fixture: ComponentFixture<ProjectDataSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDataSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDataSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
