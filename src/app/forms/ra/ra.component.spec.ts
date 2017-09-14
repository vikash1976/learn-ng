import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaComponent } from './ra.component';

describe('RaComponent', () => {
  let component: RaComponent;
  let fixture: ComponentFixture<RaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
