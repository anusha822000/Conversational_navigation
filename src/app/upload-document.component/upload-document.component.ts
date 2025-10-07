import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from '../../environments/environments';
 
@Component({
  selector: 'app-upload-document',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent {
  selectedFile: File | null = null;
 
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}
 
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files && input.files.length > 0 ? input.files[0] : null;
  }
 
  onUpload() {
    if (!this.selectedFile) {
      this.snackBar.open('No file selected!', 'Close', { duration: 3000 });
      return;
    }
 
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('type', 'File');
 
    this.http.post(`${environment.apiBaseUrl}/api/links/file`, formData)
      .subscribe({
        next: () => {
          this.snackBar.open('File uploaded successfully!', 'Close', { duration: 3000 });
          this.selectedFile = null;
        },
        error: err => {
          console.error(err);
          this.snackBar.open('Upload failed. Try again.', 'Close', { duration: 3000 });
        }
      });
  }
}
 
 