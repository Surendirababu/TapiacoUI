import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivationteamComponent } from './cultivationteam.component';

describe('CultivationteamComponent', () => {
  let component: CultivationteamComponent;
  let fixture: ComponentFixture<CultivationteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultivationteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultivationteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
