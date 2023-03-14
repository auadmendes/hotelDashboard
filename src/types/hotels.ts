export interface NewHotelType {
  country?: string;
  description?: string;
  id?: string;
  location?: string;
  perNight?: string;
  region?: string;
  review?: string;
  stars?: string;
  title?: string;
  totalPrice?: string;
  feature?: string
}

export interface AddHotelType {
  country: string;
  description: string;
  location: string;
  perNight: string;
  region: string;
  review: string;
  stars: string;
  title: string;
  totalPrice: string;
  feature: string
}