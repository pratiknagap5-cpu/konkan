import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel.model';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {
  hotels = signal<Hotel[]>([]);
  filteredHotels = signal<Hotel[]>([]);
  searchTerm = '';

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels.set(hotels);
      this.filteredHotels.set(hotels);
    });
  }

  filterHotels() {
    const term = this.searchTerm.toLowerCase();
    this.filteredHotels.set(
      this.hotels().filter(h =>
        h.name.toLowerCase().includes(term) ||
        h.location.toLowerCase().includes(term)
      )
    );
  }

  login() {
    console.log('Login clicked');
  }
}
