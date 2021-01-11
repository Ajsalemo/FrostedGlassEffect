import { Component, OnInit } from '@angular/core';
import { GetSpecificationsService } from '@services/getspecifications.service.ts';
@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
})
export class SpecsComponent implements OnInit {
  carImageFront = 'assets/images/m235i_front.png';
  errorStatus = '';
  errorStatusText = '';
  isError = false;
  isLoading = false;

  constructor(private getSpecificationsService: GetSpecificationsService) {}

  getSpecificationsOnLoad() {
    this.isError = false;
    this.isLoading = true;
    this.getSpecificationsService.getSpecifications().subscribe(
      (res: object) => {
        this.isError = false;
        this.isLoading = true;
        console.log(res);
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
    this.getSpecificationsOnLoad();
  }
}
