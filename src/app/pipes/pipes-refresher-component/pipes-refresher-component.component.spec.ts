import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesRefresherComponentComponent } from './pipes-refresher-component.component';

describe('PipesRefresherComponentComponent', () => {
  let component: PipesRefresherComponentComponent;
  let fixture: ComponentFixture<PipesRefresherComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesRefresherComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesRefresherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
