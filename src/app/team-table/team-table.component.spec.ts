import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTableComponent } from './team-table.component';

describe('TeamTableComponent', () => {
  let component: TeamTableComponent;
  let fixture: ComponentFixture<TeamTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
