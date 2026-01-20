import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArea } from './blog-area';

describe('BlogArea', () => {
  let component: BlogArea;
  let fixture: ComponentFixture<BlogArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
