import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent]
    });
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show book info', () => {

    const fixture = TestBed.createComponent(BookComponent);
    const component = fixture.componentInstance;
    const debugElement = fixture.debugElement;

    component.book = {
      title: 'eXtreme Programming Explained',
      description: 'Coucou'
    };

    fixture.detectChanges();

    expect(debugElement.nativeElement.querySelector('h1').textContent)
      .toEqual('eXtreme Programming Explained');
  });
});
