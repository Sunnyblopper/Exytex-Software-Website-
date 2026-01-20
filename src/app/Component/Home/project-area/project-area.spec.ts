import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectArea } from './project-area';

describe('ProjectArea', () => {
  let component: ProjectArea;
  let fixture: ComponentFixture<ProjectArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
