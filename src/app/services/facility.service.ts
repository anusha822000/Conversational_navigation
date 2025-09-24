import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Facility {
  facilityId: number;
  facilityName: string;
  isSingleEntity: boolean;
  parentFacilityId?: number;
  organisationId?: number;
  children: Facility[];
  selected?: boolean;
}

@Injectable({ providedIn: 'root' })
export class FacilityService {
  constructor(private http: HttpClient) {}

  getFacilityHierarchy(): Observable<Facility[]> {
    return this.http.get<Facility[]>('http://localhost:5110/api/facility/hierarchy')
      .pipe(
        map(data => data.map(f => this.addSelectedFlag(f)))
      );
  }

  private addSelectedFlag(facility: Facility): Facility {
    return {
      ...facility,
      selected: false,
      children: facility.children?.map(c => this.addSelectedFlag(c)) || []
    };
  }
}
