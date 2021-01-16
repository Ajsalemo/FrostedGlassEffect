import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { GetSpecificationsService } from '@services/getspecifications.service.ts';
@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(1000)),
    ]),
  ],
})
export class SpecsComponent implements OnInit {
  carImageFront = 'assets/images/m235i_front.png';
  filteredCarSpecifications = [];
  Object = Object;
  errorStatus = '';
  errorStatusText = '';
  isError = false;
  isLoading = false;

  constructor(private getSpecificationsService: GetSpecificationsService) {}

  getSpecificationsOnLoad(): void {
    this.isError = false;
    this.isLoading = true;
    this.getSpecificationsService.getSpecifications().subscribe(
      (res: any) => {
        this.isError = false;
        this.isLoading = false;
        this.filterSpecificationResponse(res[0]);
      },
      (err: any) => {
        this.isError = true;
        this.isLoading = false;
        this.errorStatus = err.status;
        this.errorStatusText = err.statusText;
      }
    );
  }

  // Function that removes any uneeded properties, underscores and 'prettifies' the response in terms of capitalization.
  filterSpecificationResponse(res: any): void {
    const { id, ...rest } = res;
    const keys = Object.keys(rest);
    keys.forEach((key) => {
      // Replace all occurrences of the underscore symbol
      const replaceKeys = key.replace(/_/g, ' ');
      // Capitalize the first letter in the string
      const caps = replaceKeys.charAt(0).toUpperCase();
      // Add the rest of the string to the capitalized letter
      const filteredKeys = `${caps}${replaceKeys.slice(1)}`;
      // Push the newly constructed data into the array
      this.filteredCarSpecifications.push(`${filteredKeys}: ${rest[key]}`);
    });
  }

  ngOnInit() {
    this.getSpecificationsOnLoad();
  }
}
