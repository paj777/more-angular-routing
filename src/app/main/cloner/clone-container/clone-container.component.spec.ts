import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneContainerComponent } from './clone-container.component';

describe('CloneContainerComponent', () => {
  let component: CloneContainerComponent;
  let fixture: ComponentFixture<CloneContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
