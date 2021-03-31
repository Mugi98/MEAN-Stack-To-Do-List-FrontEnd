import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaddashComponent } from './loaddash.component';

describe('LoaddashComponent', () => {
  let component: LoaddashComponent;
  let fixture: ComponentFixture<LoaddashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaddashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaddashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
