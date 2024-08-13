import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderArtisansComponent } from './header-artisans.component';

describe('HeaderArtisansComponent', () => {
  let component: HeaderArtisansComponent;
  let fixture: ComponentFixture<HeaderArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderArtisansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
