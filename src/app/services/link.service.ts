import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Link } from '../models/link.models';
import { LinkCreateDto } from '../models/link.models';
import { FileUploadDto } from '../models/link.models';
import { environment } from '../../environments/environments';
 
@Injectable({ providedIn: 'root' })
export class LinkService {
  private apiUrl = `${environment.apiBaseUrl}/api/links`;
 
  constructor(private http: HttpClient) {}
 
  getAllLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this.apiUrl);
  }
 
  addLink(link: LinkCreateDto): Observable<Link> {
    return this.http.post<Link>(this.apiUrl, link);
  }
 
  uploadFile(fileDto: FileUploadDto): Observable<Link> {
    const formData = new FormData();
    formData.append('File', fileDto.file);
    formData.append('Type', fileDto.type);
    return this.http.post<Link>(`${this.apiUrl}/file`, formData);
  }
 
  getDocuments(): Observable<Link[]> {
    return this.http.get<Link[]>(`${this.apiUrl}/documents`);
  }
}
 
 