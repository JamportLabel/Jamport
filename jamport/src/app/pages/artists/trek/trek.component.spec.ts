import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekComponent } from './trek.component';

describe('TrekComponent', () => {
  let component: TrekComponent;
  let fixture: ComponentFixture<TrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
