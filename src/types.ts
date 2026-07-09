/**
 * Types and interfaces for Włoska Motoryzacja website.
 */

export interface OfferItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  bullets?: string[];
  brandColor?: string;
}

export interface WhyUsItem {
  id: string;
  text: string;
  description: string;
}

export interface OpeningHourRow {
  day: string;
  hours: string;
  isSpecial?: boolean;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
