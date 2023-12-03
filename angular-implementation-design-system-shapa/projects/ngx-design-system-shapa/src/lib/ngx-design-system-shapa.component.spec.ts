import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDesignSystemShapaComponent } from './ngx-design-system-shapa.component';

describe('NgxDesignSystemShapaComponent', () => {
  let component: NgxDesignSystemShapaComponent;
  let fixture: ComponentFixture<NgxDesignSystemShapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDesignSystemShapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxDesignSystemShapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
