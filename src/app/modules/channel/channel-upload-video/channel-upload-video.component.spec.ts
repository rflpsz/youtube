import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelUploadVideoComponent } from './channel-upload-video.component';

describe('ChannelUploadVideoComponent', () => {
  let component: ChannelUploadVideoComponent;
  let fixture: ComponentFixture<ChannelUploadVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelUploadVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelUploadVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
