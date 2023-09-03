import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWebPageComponent } from './sample-web-page.component';

describe('SampleWebPageComponent', () => {
  let component: SampleWebPageComponent;
  let fixture: ComponentFixture<SampleWebPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleWebPageComponent]
    });
    fixture = TestBed.createComponent(SampleWebPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
