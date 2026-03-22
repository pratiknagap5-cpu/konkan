export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  stars: number;
  image: string;
  amenities: string[];
  description: string;
}
