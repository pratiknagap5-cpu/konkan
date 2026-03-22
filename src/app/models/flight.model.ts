export interface Flight {
  id: number;
  airline: string;
  flightNumber: string;
  departure: string;  // e.g. 'Mumbai (BOM)'
  arrival: string;    // e.g. 'Ratnagiri (RTI)'
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
}
