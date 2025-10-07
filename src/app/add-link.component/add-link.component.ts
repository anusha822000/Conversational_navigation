import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { LinkService } from '../services/link.service';
 
@Component({
  selector: 'app-add-link',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent {
  linkForm;
  types = ['Internal', 'External'];
 
  constructor(private fb: FormBuilder, private linkService: LinkService) {
    this.linkForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      type: ['', Validators.required]
    });
  }
 
  submit() {
    if (this.linkForm.invalid) return;
    const payload = {
      url: this.linkForm.value.url!.trim(),
      type: this.linkForm.value.type!.trim()
    };
    this.linkService.addLink(payload).subscribe({
      next: () => {
        alert('Link added successfully!');
        this.linkForm.reset();
      },
      error: err => console.error(err)
    });
  }
}
 
 