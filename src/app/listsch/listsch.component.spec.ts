import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListschComponent } from './listsch.component';

describe('ListschComponent', () => {
  let component: ListschComponent;
  let fixture: ComponentFixture<ListschComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListschComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
