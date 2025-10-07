import { Component, OnInit } from '@angular/core';
import { LinkService } from '../services/link.service';
import { Link } from '../models/link.models';
 
// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
 
@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [MatCardModule, MatTableModule, DatePipe],
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  links: Link[] = [];
  displayedColumns = ['linkId', 'url', 'type', 'status', 'lastCheckedAt'];
 
  constructor(private linkService: LinkService) {}
 
  ngOnInit(): void {
    this.loadLinks();
  }
 
  loadLinks() {
    this.linkService.getAllLinks().subscribe(res => (this.links = res));
  }
}
 
 