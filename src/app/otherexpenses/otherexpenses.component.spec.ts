import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherexpensesComponent } from './otherexpenses.component';

describe('OtherexpensesComponent', () => {
  let component: OtherexpensesComponent;
  let fixture: ComponentFixture<OtherexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
