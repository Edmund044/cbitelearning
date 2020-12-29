import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTutorialCardComponent } from './quick-tutorial-card.component';

describe('QuickTutorialCardComponent', () => {
  let component: QuickTutorialCardComponent;
  let fixture: ComponentFixture<QuickTutorialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickTutorialCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickTutorialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
