import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatlistComponent } from './matlist.component';

describe('MatlistComponent', () => {
  let component: MatlistComponent;
  let fixture: ComponentFixture<MatlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
