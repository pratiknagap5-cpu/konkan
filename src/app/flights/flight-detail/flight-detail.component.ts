import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';

import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="flight-detail" *ngIf="flight()">
      <div class="detail-header">
        <h1>{{ flight()?.airline }} - {{ flight()?.flightNumber }}</h1>
        <div class="route-summary">
          <div class="city">{{ flight()?.departure }}</div>
          <div class="arrow">→</div>
          <div class="city">{{ flight()?.arrival }}</div>
        </div>
      </div>
      <div class="detail-body">
        <div class="flight-info">
          <div class="time">{{ flight()?.departureTime }}</div>
          <div class="duration">{{ flight()?.duration }}</div>
          <div class="time">{{ flight()?.arrivalTime }}</div>
        </div>
        @if (flight()?.stops === 0) {
          <p>Non-stop flight</p>
        }
        <div class="price-section">
          <div class="price">₹{{ flight()?.price }}</div>
          <button class="book-now">Book This Flight</button>
        </div>
      </div>
    </div>
    <div *ngIf="!flight()" class="loading">Loading flight details...</div>
  `,
  styles: [`
    .flight-detail {
      max-width: 800px;
      margin: 2rem auto;
      background: white;
      border-radius: 20px;
      padding: 3rem;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    }
    .detail-header h1 {
      margin: 0 0 1rem 0;
      color: #333;
    }
    .route-summary {
      display: flex;
      align-items: center;
      gap: 2rem;
      justify-content: center;
    }
    .city {
      font-size: 1.5rem;
      font-weight: 600;
    }
    .arrow {
      font-size: 2rem;
      color: #ff6b35;
    }
    .flight-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rem 0;
      padding: 2rem;
      background: #f8f9fa;
      border-radius: 12px;
    }
    .time {
      font-size: 2.5rem;
      font-weight: 700;
      color: #ff6b35;
    }
    .duration {
      text-align: center;
      font-size: 1.1rem;
      color: #666;
    }
    .price-section {
      text-align: center;
      margin-top: 2rem;
    }
    .price {
      font-size: 3rem;
      font-weight: 700;
      color: #ff6b35;
      margin-bottom: 1rem;
    }
    .book-now {
      background: linear-gradient(135deg, #ff6b35, #ff8e53);
      color: white;
      border: none;
      padding: 1.5rem 3rem;
      border-radius: 12px;
      font-size: 1.2rem;
      font-weight: 600;
      cursor: pointer;
    }
  `]
})
export class FlightDetailComponent {
  flight = signal<Flight | undefined>(undefined);

  route = inject(ActivatedRoute);
  flightService = inject(FlightService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flightService.getFlight(id).subscribe((f: Flight | undefined) => this.flight.set(f));
  }
}
