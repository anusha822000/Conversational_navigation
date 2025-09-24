import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityService, Facility } from '../services/facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.html',
  styleUrls: ['./facility.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FacilityComponent implements OnInit {
  facilities: Facility[] = [];
  loading = false;
  error: string | null = null;

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.loadFacilities();
  }

  loadFacilities(): void {
    this.loading = true;
    this.error = null;

    this.facilityService.getFacilityHierarchy().subscribe({
      next: (data) => {
        this.facilities = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching facilities', err);
        this.error = 'Failed to load facilities';
        this.loading = false;
      }
    });
  }
}
