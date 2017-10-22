import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllConnectionsComponent } from './get-all-connections.component';

describe('GetAllConnectionsComponent', () => {
  let component: GetAllConnectionsComponent;
  let fixture: ComponentFixture<GetAllConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
