import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hotel-detail" *ngIf="hotel()">
      <img [src]="hotel()!.image" [alt]="hotel()!.name" class="detail-image">
      <div class="detail-content">
        <div class="header">
          <h1>{{ hotel()!.name }}</h1>
          <div class="rating">{{ '★'.repeat(hotel()!.stars) }} {{ hotel()!.rating }}/5 ({{ hotel()!.reviews }} reviews)</div>
        </div>
        <p class="location">{{ hotel()!.location }}</p>
        <div class="price-section">
          <span class="price">₹{{ hotel()!.price }}/night</span>
          <button class="book-btn">Book Now</button>
        </div>
        <div class="amenities">
          <h3>Amenities</h3>
          <div class="amenity-tags">
            @for (amenity of hotel()!.amenities; track $index) {
              <span class="tag">{{ amenity }}</span>
            }
          </div>
        </div>
        <div class="description">
          <h3>Description</h3>
          <p>{{ hotel()!.description }}</p>
        </div>
      </div>
    </div>
    <div *ngIf="!hotel()" class="loading">Loading hotel details...</div>
  `,
  styles: [`
    .hotel-detail {
      max-width: 1000px;
      margin: 2rem auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    }
    .detail-image {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
    .detail-content {
      padding: 3rem;
      display: flex;
      flex-direction: column;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
    .header h1 {
      font-size: 2rem;
      margin: 0;
    }
    .rating {
      background: linear-gradient(135deg, #ffd700, #ffed4a);
      color: #333;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: 600;
    }
    .location {
      color: #666;
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
    .price-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rem 0;
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 12px;
    }
    .price {
      font-size: 2.5rem;
      font-weight: 700;
      color: #ff6b35;
    }
    .book-btn {
      background: linear-gradient(135deg, #ff6b35, #ff8e53);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 25px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .book-btn:hover {
      transform: scale(1.05);
    }
    .amenities, .description {
      margin-top: 2rem;
    }
    .amenity-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }
    .tag {
      background: #e3f2fd;
      color: #1976d2;
      padding: 0.4rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }
    .description h3 {
      color: #333;
      border-bottom: 2px solid #eee;
      padding-bottom: 0.5rem;
    }
    @media (max-width: 768px) {
      .hotel-detail {
        grid-template-columns: 1fr;
        margin: 1rem;
      }
    }
  `]
})
export class HotelDetailComponent {
  hotel = signal<Hotel | undefined>(undefined);

  route = inject(ActivatedRoute);
  hotelService = inject(HotelService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hotelService.getHotel(id).subscribe((h: Hotel | undefined) => this.hotel.set(h));
  }
}
