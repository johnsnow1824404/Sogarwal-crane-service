export enum AppView {
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  EMERGENCY = 'EMERGENCY',
  GALLERY = 'GALLERY',
  CONTACT = 'CONTACT'
}

export interface User {
  phoneNumber: string;
  isVerified: boolean;
}

export interface LocationData {
  latitude: number | null;
  longitude: number | null;
  address: string;
  loading: boolean;
  error: string | null;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface EmergencyRequest {
  phone: string;
  location: LocationData;
  photos: File[];
  description: string;
  vehicleType: string;
}