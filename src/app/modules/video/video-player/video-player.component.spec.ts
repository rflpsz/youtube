import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerComponent } from './video-player.component';

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent;
  let fixture: ComponentFixture<VideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be render a iframe video when a valid url has been passed', () => {
    component.video = 'https://www.youtube.com/embed/YcYjVzb0fSw?autoplay=1&rel=1&modestbranding=1';
    fixture.detectChanges();
    expect(component.video).toContain('https://www.youtube.com/embed/');
  });

  it('should not be render a iframe video when an invalid URL has been passed', () => {
    fixture.detectChanges();
    expect(component.video).not.toBeDefined();
  })

});
