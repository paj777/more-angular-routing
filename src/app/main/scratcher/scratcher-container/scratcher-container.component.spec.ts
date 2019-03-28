import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratcherContainerComponent } from './scratcher-container.component';

describe('ScratcherContainerComponent', () => {
  let component: ScratcherContainerComponent;
  let fixture: ComponentFixture<ScratcherContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScratcherContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScratcherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
