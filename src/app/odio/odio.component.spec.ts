import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdioComponent } from './odio.component';

describe('OdioComponent', () => {
  let component: OdioComponent;
  let fixture: ComponentFixture<OdioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
