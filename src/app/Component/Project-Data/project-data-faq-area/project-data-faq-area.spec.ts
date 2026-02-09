import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDataFaqArea } from './project-data-faq-area';

describe('ProjectDataFaqArea', () => {
  let component: ProjectDataFaqArea;
  let fixture: ComponentFixture<ProjectDataFaqArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDataFaqArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDataFaqArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
