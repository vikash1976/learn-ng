import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnotherCompComponent } from './my-another-comp.component';

describe('MyAnotherCompComponent', () => {
  let component: MyAnotherCompComponent;
  let fixture: ComponentFixture<MyAnotherCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAnotherCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAnotherCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
