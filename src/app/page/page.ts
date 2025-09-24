import { Component } from '@angular/core';
import { FacilityService, Facility } from '../services/facility.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCheckboxModule],
  templateUrl: './page.html',
  styleUrls: ['./page.css']
})
export class PageComponent {
  title = '';
  path = '';
  facilities: Facility[] = [];
  selectedFacilities: Facility[] = [];
  showFacilityPopup = false;

  constructor(
    private facilityService: FacilityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      this.path = urlSegments.map(seg => seg.path).join('/');
      this.title = this.path || 'Home';
    });
  }

  openFacilityPopup() {
    this.showFacilityPopup = true;
    this.facilityService.getFacilityHierarchy().subscribe({
      next: (data: Facility[]) => {
        this.facilities = data;
      },
      error: err => {
        console.error(err);
        this.facilities = [];
      }
    });
  }

  closeFacilityPopup() {
    this.showFacilityPopup = false;
  }

  toggleSelection(facility: Facility) {
    facility.selected = !facility.selected;

    if (facility.selected) {
      if (!this.selectedFacilities.find(f => f.facilityId === facility.facilityId)) {
        this.selectedFacilities.push(facility);
      }
    } else {
      this.selectedFacilities = this.selectedFacilities.filter(f => f.facilityId !== facility.facilityId);
    }
  }
}
