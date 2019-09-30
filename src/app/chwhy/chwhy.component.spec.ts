import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChwhyComponent } from './chwhy.component';

describe('ChwhyComponent', () => {
  let component: ChwhyComponent;
  let fixture: ComponentFixture<ChwhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChwhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChwhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
