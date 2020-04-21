import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MickeyImageViewerComponent } from './mickey-image-viewer.component';

describe('MickeyImageViewerComponent', () => {
  let component: MickeyImageViewerComponent;
  let fixture: ComponentFixture<MickeyImageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MickeyImageViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MickeyImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
