import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../../services/package.service';
import { Package } from '../../models/package.model';

@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './package-detail.component.html',
  styleUrl: './package-detail.component.css'
})
export class PackageDetailComponent {
  package = signal<Package | null>(null);

  constructor(
    private route: ActivatedRoute, 
    private packageService: PackageService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.packageService.getPackages().subscribe(packages => {
      this.package.set(packages.find(p => p.id === id) || null);
    });
  }
}


