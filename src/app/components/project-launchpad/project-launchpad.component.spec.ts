import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLaunchpadComponent } from './project-launchpad.component';

describe('ProjectLaunchpadComponent', () => {
  let component: ProjectLaunchpadComponent;
  let fixture: ComponentFixture<ProjectLaunchpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLaunchpadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLaunchpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
