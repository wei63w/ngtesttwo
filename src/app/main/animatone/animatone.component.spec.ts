import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatoneComponent } from './animatone.component';

describe('AnimatoneComponent', () => {
  let component: AnimatoneComponent;
  let fixture: ComponentFixture<AnimatoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
