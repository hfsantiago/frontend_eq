import { Component } from '@angular/core';
import { IndicatorService } from '../indicator.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-indicator-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './indicator-list.component.html',
  styleUrl: './indicator-list.component.css'
})
export class IndicatorListComponent {
  items: any[] = [];  // Replace `any` with the correct type if available

  constructor(private indicator: IndicatorService, private router: Router) {}

  ngOnInit(): void {
    this.indicator.getItems().subscribe(
      data => this.items = data,
      error => console.error('Error fetching items', error)
    );
  }

  navigateToNewIndicator() {
    this.router.navigate(['/indicators/new']);
  }
}
