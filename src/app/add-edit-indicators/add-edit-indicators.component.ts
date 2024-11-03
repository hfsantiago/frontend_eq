import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IndicatorService } from '../indicator.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-indicators',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-edit-indicators.component.html',
  styleUrl: './add-edit-indicators.component.css'
})
export class AddEditIndicatorsComponent {
  itemForm: FormGroup;
  isEditMode = false;
  id: string | null = null;

  constructor(
    private fb: FormBuilder,
    private indicatorService: IndicatorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      expected_value: ['', Validators.required, Validators.min(0)],
      min_value: ['', [Validators.required, Validators.min(0)]],
      max_value: ['', [Validators.required, Validators.min(0)]] 
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.id;

    if (this.isEditMode) {
      this.indicatorService.getIndicatorById(this.id!).subscribe(
        data => this.itemForm.patchValue(data),
        error => console.error('Error loading item', error)
      );
    }
  }

  onSubmit(): void {
    if (this.itemForm.invalid) {
      return;
    }

    const itemData = this.itemForm.value;

    if (this.isEditMode) {
      this.indicatorService.updateIndicator(this.id!, itemData).subscribe(
        () => this.router.navigate(['/indicators']),
        error => console.error('Error updating item', error)
      );
    } else {
      this.indicatorService.createIndicator(itemData).subscribe(
        () => this.router.navigate(['/indicators']),
        error => console.error('Error creating item', error)
      );
    }
  }


}
