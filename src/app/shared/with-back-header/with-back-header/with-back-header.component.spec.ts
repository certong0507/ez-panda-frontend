import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithBackHeaderComponent } from './with-back-header.component';

describe('WithBackHeaderComponent', () => {
  let component: WithBackHeaderComponent;
  let fixture: ComponentFixture<WithBackHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithBackHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithBackHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
