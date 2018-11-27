import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCenterComponent } from './player-center.component';

describe('PlayerCenterComponent', () => {
  let component: PlayerCenterComponent;
  let fixture: ComponentFixture<PlayerCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
