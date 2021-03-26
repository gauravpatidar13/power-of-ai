import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavWithSubmenuComponent } from './sidenav-with-submenu.component';

describe('SidenavWithSubmenuComponent', () => {
  let component: SidenavWithSubmenuComponent;
  let fixture: ComponentFixture<SidenavWithSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavWithSubmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavWithSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
