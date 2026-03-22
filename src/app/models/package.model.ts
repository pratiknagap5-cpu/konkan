export interface Package {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  itinerary: string[];
  inclusions: string[];
  highlights: string[];
  hotels: string[];
}

