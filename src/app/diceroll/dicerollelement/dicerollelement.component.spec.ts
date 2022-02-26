import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicerollelementComponent } from './dicerollelement.component';

describe('DicerollelementComponent', () => {
  let component: DicerollelementComponent;
  let fixture: ComponentFixture<DicerollelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicerollelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicerollelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
