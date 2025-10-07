import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenlinkComponent } from './brokenlink.component';

describe('BrokenlinkComponent', () => {
  let component: BrokenlinkComponent;
  let fixture: ComponentFixture<BrokenlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokenlinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokenlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
