import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionRewardComponent } from './mission-reward.component';

describe('MissionRewardComponent', () => {
  let component: MissionRewardComponent;
  let fixture: ComponentFixture<MissionRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionRewardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
