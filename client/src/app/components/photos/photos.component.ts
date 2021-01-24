import { Component, OnInit } from '@angular/core';
import { sharedRouteTransitionFade } from '@animations/shared-route-transition-fade.animations';
import { GetPhotosService } from '@services/getphotos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  animations: sharedRouteTransitionFade,
})
export class PhotosComponent implements OnInit {
  isError = false;
  isLoading = false;
  photosArray: string[];
  errorStatus: any;
  errorStatusText: any;
  blurImage = 'assets/images/blurred-loading.jpg';

  constructor(private getPhotosService: GetPhotosService) {}

  getPhotoOnLoad(): void {
    this.isLoading = true;
    this.errorStatus = false;
    this.getPhotosService.getPhotos().subscribe(
      (res: any) => {
        this.photosArray = res;
        this.isLoading = false;
        this.errorStatus = false;
      },
      (err: any) => {
        this.isError = true;
        this.isLoading = false;
        this.errorStatus = err.status;
        this.errorStatusText = err.statusText;
      }
    );
  }

  ngOnInit() {
    this.getPhotoOnLoad();
  }
}
