export interface Link {
  linkId: number;
  url?: string;
  type: string;
  status: string;
  lastCheckedAt?: string;
  fileName?: string;
  filePath?: string;
  contentType?: string;
}
 
export interface LinkCreateDto {
  url: string;
  type: string; // "Internal" | "External"
}
 
export interface FileUploadDto {
  file: File;
  type: string; // always "File"
}
 
 