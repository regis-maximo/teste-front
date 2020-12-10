import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Media } from 'src/app/model/media';
import { MediaService } from 'src/app/service/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  a!: string;
  b!: string;

  media: Media = {
    a: 0,
    b: 0,
    result: 0
  };
  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
  }

  calcular(): void {
    this.media.a = Number.parseInt(this.a);
    this.media.b = Number.parseInt(this.b);
    this.mediaService.calcularMedia(this.media)
      .subscribe(media => {
        this.mediaService.showMessage('Calculando');
        this.media = media;
      })
  }

  limpar() {
    this.a = '';
    this.b = '';
    this.media.result = 0;
  }
  
}
