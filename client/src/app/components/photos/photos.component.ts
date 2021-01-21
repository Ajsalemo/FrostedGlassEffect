import { Component, OnInit } from '@angular/core';
import { sharedRouteTransitionFade } from '@animations/shared-route-transition-fade.animations';
import { GetPhotosService } from '@services/getphotos.service';
// This component can potentially be refactored into a reusable component with specs.component
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  animations: sharedRouteTransitionFade,
})
export class PhotosComponent implements OnInit {
  isError = false;
  isLoading = false;
  photosArray: string[];

  constructor(private getPhotosService: GetPhotosService) {}

  getPhotoOnLoad(): void {
    this.isLoading = true;
    this.getPhotosService.getPhotos().subscribe((res: any) => {
      this.photosArray = res;
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.getPhotoOnLoad();
  }
}
