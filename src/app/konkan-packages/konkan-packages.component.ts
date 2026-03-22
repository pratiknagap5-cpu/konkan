import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PackageService } from '../services/package.service';
import { Package } from '../models/package.model';
import { HttpClientModule } from '@angular/common/http'; // later
import { Router } from '@angular/router';

@Component({
  selector: 'app-konkan-packages',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './konkan-packages.component.html',
  styleUrl: './konkan-packages.component.css'
})
export class KonkanPackagesComponent {
  packages = signal<Package[]>([]);
  filteredPackages = signal<Package[]>([]);
  searchTerm = signal('');
  selectedDuration = signal('');

  constructor(private packageService: PackageService, private router: Router) {
    this.loadPackages();
  }

  loadPackages() {
    this.packageService.getPackages().subscribe(p => {
      this.packages.set(p);
      this.filteredPackages.set(p);
    });
  }

  filterPackages() {
    let filtered = this.packages();
    if (this.searchTerm()) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(this.searchTerm().toLowerCase()) ||
        p.subtitle.toLowerCase().includes(this.searchTerm().toLowerCase()) ||
        p.hotels.some(h => h.toLowerCase().includes(this.searchTerm().toLowerCase()))
      );
    }
    if (this.selectedDuration()) {
      filtered = filtered.filter(p => p.duration === this.selectedDuration());
    }
    this.filteredPackages.set(filtered);
  }

  onSearchKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.filterPackages();
    }
  }
  
  login() {
    window.open('/login', '_blank');
  }
}

