import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/core/youtube.service';
import { Global } from 'src/app/core/global.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-channel-upload-video',
  templateUrl: './channel-upload-video.component.html',
  styleUrls: ['./channel-upload-video.component.scss']
})
export class ChannelUploadVideoComponent implements OnInit {

  public categories: any = [];

  public entity: any = {};
  public onLoading = false;
  public category!: any;

  public videoSource!: any;

  videoForm!: FormGroup;
  percentageUpload = 0;
  subscription!: Subscription;
  videoUrl!: string;
  loading = false;

  constructor(
    private youtubeService: YoutubeService,
    public global: Global
  ) { }

  ngOnInit(): void {
    this.getVideoCategories();
  }

  openSearchFile(): void {
    document.getElementById("upload-file-label")!.click();
  }

  getVideoCategories() {
    this.youtubeService.getVideoCategories().subscribe((response: any) => {
      console.log("response de categorias:", response);
      if (response.items) {
        this.categories = response.items;
      }
    }, (error: any) => {
      console.log('error while searching categories of video:', error);
    });
  }

  uploadVideo(): void {

    this.onLoading = true;

    var fileStream;
    var file = this.videoSource;
    console.log("file sendo enviado:", file);
    console.log("Nombre: " + file.name);
    var r = new FileReader();
    r.onload = function () {
      console.log("fileStream creado");
      fileStream = r.result;
      console.log("FileStream: " + fileStream);
    };

    console.log("Creando fileStream..");
    r.readAsBinaryString(file);

    let body = {
      snippet: {
        title: this.entity.title,
        description: this.entity.description,
        categoryId: +this.entity.category
      },
      status: {
        privacyStatus: "private",
        embeddable: true
      }
    };

    this.youtubeService.uploadVideo(this.videoSource, body).subscribe((data: any) => {
      if (data.type === HttpEventType.UploadProgress) {
        this.percentageUpload = Math.round(100 * data.loaded / data.total);
      } else if (data instanceof HttpResponse) {
        const response: any = data.body;
        this.videoUrl = 'https://www.youtube.com/watch?v=' + response.id;
        this.loading = false;
        console.log('video is uploaded to youtube successfully');
      }
    }, ((error: any) => {
      this.loading = false;
      if (error instanceof Error) {
        console.log("error:", error.message);
      } else {
        const errorObject = JSON.parse(error.error);
        if (errorObject.error.errors[0].reason === 'youtubeSignupRequired') {
          console.log("You need to create a youtube channel");
        } else {
          console.log("error:", errorObject.error.message);
        }
      }
    }));

  }

  selectedVideo(files: any) {

    console.log("entrei aqui");

    if (files.length === 0) {
      this.global.toaster.error('Nenhuma mídia escolhida, tente novamente!');
      return;
    }

    if (files[0].type.match('video.*') == null) {
      this.global.toaster.error('Mídia escolhida não é um vídeo, escolha outra!');
      return;
    }

    if (this.global.bytesToMegaBytes(files[0].size) > 5.00) {
      this.global.toaster.error('Escolha um vídeo menor que 5MB');
      return;
    }

    console.log(files[0]);

    this.videoSource = files[0];
  }

}
