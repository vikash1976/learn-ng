import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDiComponent } from './explore-di.component';

describe('ExploreDiComponent', () => {
  let component: ExploreDiComponent;
  let fixture: ComponentFixture<ExploreDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
