import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDeatilsComponent } from './client-deatils.component';

describe('ClientDeatilsComponent', () => {
  let component: ClientDeatilsComponent;
  let fixture: ComponentFixture<ClientDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
