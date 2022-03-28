import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflPlayerStatsComponent } from './nfl-player-stats.component';

describe('NflPlayerStatsComponent', () => {
  let component: NflPlayerStatsComponent;
  let fixture: ComponentFixture<NflPlayerStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflPlayerStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NflPlayerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
