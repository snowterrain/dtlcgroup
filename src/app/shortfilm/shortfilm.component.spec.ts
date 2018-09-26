import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortfilmComponent } from './shortfilm.component';

describe('ShortfilmComponent', () => {
  let component: ShortfilmComponent;
  let fixture: ComponentFixture<ShortfilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortfilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
