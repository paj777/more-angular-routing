import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiddlerContainerComponent } from './fiddler-container.component';

describe('FiddlerContainerComponent', () => {
  let component: FiddlerContainerComponent;
  let fixture: ComponentFixture<FiddlerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiddlerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiddlerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
