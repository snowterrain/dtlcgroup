import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksreadComponent } from './booksread.component';

describe('BooksreadComponent', () => {
  let component: BooksreadComponent;
  let fixture: ComponentFixture<BooksreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
