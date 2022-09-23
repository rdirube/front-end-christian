import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryViewComponent } from './recovery-view.component';

describe('RecoveryViewComponent', () => {
  let component: RecoveryViewComponent;
  let fixture: ComponentFixture<RecoveryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
