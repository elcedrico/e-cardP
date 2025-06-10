export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  whatsapp: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  github?: string;
  youtube?: string;
  tiktok?: string;
  calendly?: string;
  portfolio?: string;
}

export interface CardTheme {
  id: string;
  name: string;
  background: string;
  text: string;
  accent: string;
  secondary: string;
  gradient?: string;
  pattern?: string;
}

export interface ECard {
  id: string;
  name: string;
  templateId: string;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  profileImage?: string;
  companyLogo?: string;
  theme: CardTheme;
  customUrl: string;
  isPublic: boolean;
  enableAnalytics: boolean;
  allowDownloads: boolean;
  views: number;
  clicks: number;
  downloads: number;
  uniqueVisitors: number;
  conversionRate: number;
  createdAt: Date;
  updatedAt: Date;
  qrCodeUrl?: string;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  preview: string;
  isPremium: boolean;
  description: string;
  features: string[];
  uses: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: 'free' | 'premium' | 'business';
  cardsCount: number;
  maxCards: number;
  customBranding: boolean;
  analyticsEnabled: boolean;
  createdAt: Date;
  subscription?: {
    status: 'active' | 'canceled' | 'past_due';
    currentPeriodEnd: Date;
    cancelAtPeriodEnd: boolean;
  };
}

export interface Analytics {
  cardId: string;
  totalViews: number;
  totalClicks: number;
  totalDownloads: number;
  uniqueVisitors: number;
  conversionRate: number;
  topLocations: Array<{
    country: string;
    views: number;
    percentage: number;
  }>;
  recentActivity: Array<{
    action: string;
    timestamp: Date;
    location: string;
    device: string;
  }>;
  clicksByPlatform: Array<{
    platform: string;
    clicks: number;
    percentage: number;
  }>;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
  maxCards: number;
  customBranding: boolean;
  analytics: boolean;
  priority: boolean;
}