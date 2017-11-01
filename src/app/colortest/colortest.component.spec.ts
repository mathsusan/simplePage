import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColortestComponent } from './colortest.component';

describe('ColortestComponent', () => {
  let component: ColortestComponent;
  let fixture: ComponentFixture<ColortestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColortestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColortestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
