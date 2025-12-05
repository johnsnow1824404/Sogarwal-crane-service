
import { ServiceItem } from './types';

export const APP_NAME = "SOGARWAL CRANE SERVICE";
export const CONTACT_PHONE = "+91 95871 61624";
export const CONTACT_WHATSAPP = "919587161624";
export const ADDRESS = "RICCO Road, Near RBM Hospital, Bharatpur, Rajasthan";
export const CONTACT_EMAIL = "bharatsinghsogarwal@gmail.com";

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Accident Recovery',
    description: 'Immediate response for overturned or damaged vehicles on highways.',
    icon: 'fa-car-crash',
    image: 'https://images.unsplash.com/photo-1625238058252-4467c69992c3?q=80&w=800&auto=format&fit=crop' // Tow Truck / Recovery
  },
  {
    id: '2',
    title: 'Heavy Vehicle Lifting',
    description: 'Hydraulic cranes for trucks, buses, and industrial machinery.',
    icon: 'fa-truck-monster',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop' // Yellow Crane
  },
  {
    id: '3',
    title: '24/7 Breakdown Support',
    description: 'Round-the-clock towing and roadside assistance.',
    icon: 'fa-tools',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop' // Mechanic / Service
  },
  {
    id: '4',
    title: 'Machine Shifting',
    description: 'Safe loading and unloading of heavy factory equipment.',
    icon: 'fa-dolly',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop' // Industrial Machine
  }
];

// Specific Crane & Accident Gallery
export const MOCK_GALLERY = [
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop', // Yellow Industrial Crane
  'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop', // Crane Boom
  'https://images.unsplash.com/photo-1517523217961-d70c4b726194?q=80&w=800&auto=format&fit=crop', // Dark Crane Night
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop', // Construction Site
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop', // Industrial Yellow
  'https://images.unsplash.com/photo-1590486803833-1c5dc8ce84ac?q=80&w=800&auto=format&fit=crop', // Excavator/Crane
  'https://images.unsplash.com/photo-1474674556023-efef886fa6b1?q=80&w=800&auto=format&fit=crop', // Construction Silhouette
  'https://images.unsplash.com/photo-1535976562628-87405206c646?q=80&w=800&auto=format&fit=crop', // Scaffolding/Crane
];

// High quality crane images for the cinematic splash screen
export const SPLASH_SEQUENCE = [
  'https://images.unsplash.com/photo-1517523217961-d70c4b726194?q=80&w=1200&auto=format&fit=crop', // Dark Crane
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop', // Yellow Hydraulic
  'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop', // Boom Detail
];
