import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflRushingStatsComponent } from './nfl-rushing-stats.component';

describe('NflRushingStatsComponent', () => {
  let component: NflRushingStatsComponent;
  let fixture: ComponentFixture<NflRushingStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflRushingStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NflRushingStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
