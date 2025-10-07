import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../environments/environments';
 
@Component({
  selector: 'app-view-documents',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule],
  templateUrl: './view-documents.component.html',
  styleUrls: ['./view-documents.component.css']
})
export class ViewDocumentsComponent implements OnInit {
  documents: any[] = [];
  displayedColumns = ['fileName', 'path', 'status', 'lastChecked', 'actions'];
 
  constructor(private http: HttpClient) {}
 
  ngOnInit() {
    this.loadDocuments();
  }
 
  loadDocuments() {
    this.http.get<any[]>(`${environment.apiBaseUrl}/api/links/documents`)
      .subscribe(res => {
        this.documents = res.map(doc => ({
          ...doc,
          // ✅ normalize into lastChecked (camelCase)
          lastChecked: doc.lastCheckedAt ? new Date(doc.lastCheckedAt).toISOString() : null
        }));
      });
  }
 
  viewDocument(doc: any) {
    const link = document.createElement('a');
    link.href = `${environment.apiBaseUrl}${doc.filePath}`;
    link.download = doc.fileName;
    link.click();
  }
 
  deleteDocument(doc: any) {
    if (!confirm(`Delete ${doc.fileName}?`)) return;
 
    this.http.delete(`${environment.apiBaseUrl}/api/links/${doc.linkId}`)
      .subscribe({
        next: () => {
          alert('Deleted successfully');
          this.loadDocuments(); // refresh the list
        },
        error: err => console.error(err)
      });
  }
}
 
 