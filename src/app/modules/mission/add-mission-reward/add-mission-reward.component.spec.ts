import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMissionRewardComponent } from './add-mission-reward.component';

describe('AddMissionRewardComponent', () => {
  let component: AddMissionRewardComponent;
  let fixture: ComponentFixture<AddMissionRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMissionRewardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMissionRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
