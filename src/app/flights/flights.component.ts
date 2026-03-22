import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';

import { FlightService } from '../services/flight.service';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css'
})
export class FlightsComponent {
  flights = signal<Flight[]>([]);
  filteredFlights = signal<Flight[]>([]);
  searchTerm = '';

  login() {
    // TODO: Implement login modal - reuse from login component
    console.log('Login clicked');
  }

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.loadFlights();
  }

  loadFlights() {
    this.flightService.getFlights().subscribe({
      next: (flights) => {
        this.flights.set(flights);
        this.filteredFlights.set(flights);
      }
    });
  }

  filterFlights() {
    const term = this.searchTerm.toLowerCase();
    this.filteredFlights.set(
      this.flights().filter(f =>
        f.airline.toLowerCase().includes(term) ||
        f.flightNumber.toLowerCase().includes(term) ||
        f.departure.toLowerCase().includes(term)
      )
    );
  }
}
