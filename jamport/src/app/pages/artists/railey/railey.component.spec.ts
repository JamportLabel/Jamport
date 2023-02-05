import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaileyComponent } from './railey.component';

describe('RaileyComponent', () => {
  let component: RaileyComponent;
  let fixture: ComponentFixture<RaileyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaileyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaileyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
