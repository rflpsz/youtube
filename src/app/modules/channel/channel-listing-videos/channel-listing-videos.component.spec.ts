import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelListingVideosComponent } from './channel-listing-videos.component';

describe('ChannelListingVideosComponent', () => {
  let component: ChannelListingVideosComponent;
  let fixture: ComponentFixture<ChannelListingVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelListingVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelListingVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
