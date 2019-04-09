import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDialogComponent } from './player-dialog.component';

describe('PlayerDialogComponent', () => {
  let component: PlayerDialogComponent;
  let fixture: ComponentFixture<PlayerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
