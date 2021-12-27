import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedaboutComponent } from './nestedabout.component';

describe('NestedaboutComponent', () => {
  let component: NestedaboutComponent;
  let fixture: ComponentFixture<NestedaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
