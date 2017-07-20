import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsejqueryComponent } from './usejquery.component';

describe('UsejqueryComponent', () => {
  let component: UsejqueryComponent;
  let fixture: ComponentFixture<UsejqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsejqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsejqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
