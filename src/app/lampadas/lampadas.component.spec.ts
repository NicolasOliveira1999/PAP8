import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampadasComponent } from './lampadas.component';

describe('LampadasComponent', () => {
  let component: LampadasComponent;
  let fixture: ComponentFixture<LampadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LampadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LampadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
