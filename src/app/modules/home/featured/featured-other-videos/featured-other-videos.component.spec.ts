import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedOtherVideosComponent } from './featured-other-videos.component';

describe('FeaturedOtherVideosComponent', () => {
  let component: FeaturedOtherVideosComponent;
  let fixture: ComponentFixture<FeaturedOtherVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedOtherVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedOtherVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
