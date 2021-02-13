import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwarasComponent } from './swaras.component';

describe('SwarasComponent', () => {
  let component: SwarasComponent;
  let fixture: ComponentFixture<SwarasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwarasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
