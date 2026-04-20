import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  priceDisplay: string;
  status: 'Active' | 'Pending' | 'Sold';
  type: string;
  badge?: string;
  description: string;
  sqm: number;
  rooms: number;
  baths: number;
  garage: number;
  yearBuilt: number;
  image: string;
  images: string[];
  features: string[];
  views: number;
  inquiries: number;
  createdAt: string;
}

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  property: string;
  propertyId?: number;
  interest: string;
  message: string;
  date: string;
  status: 'New' | 'Replied';
  createdAt: string;
}

interface DataContextType {
  properties: Property[];
  inquiries: Inquiry[];
  addProperty: (property: Omit<Property, 'id' | 'views' | 'inquiries' | 'createdAt'>) => void;
  updateProperty: (id: number, property: Partial<Property>) => void;
  deleteProperty: (id: number) => void;
  getProperty: (id: number) => Property | undefined;
  incrementPropertyViews: (id: number) => void;
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'createdAt'>) => void;
  updateInquiry: (id: number, inquiry: Partial<Inquiry>) => void;
  deleteInquiry: (id: number) => void;
  getStats: () => {
    totalProperties: number;
    activeProperties: number;
    totalInquiries: number;
    newInquiries: number;
    totalViews: number;
  };
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const initialProperties: Property[] = [
  {
    id: 1,
    title: 'Sunset Boulevard Estate',
    location: 'Beverly Hills, CA',
    price: 8500000,
    priceDisplay: '$8,500,000',
    status: 'Active',
    type: 'Villa',
    badge: 'Exclusive',
    description: 'Experience unparalleled luxury in this magnificent modern estate situated in the prestigious Beverly Hills neighborhood.',
    sqm: 620,
    rooms: 7,
    baths: 6,
    garage: 3,
    yearBuilt: 2022,
    image: 'https://images.unsplash.com/photo-1706808849827-7366c098b317?w=1920&q=85',
    images: [
      'https://images.unsplash.com/photo-1706808849827-7366c098b317?w=800&q=80',
      'https://images.unsplash.com/photo-1706855203772-c249b75fe016?w=800&q=80',
      'https://images.unsplash.com/photo-1706808886508-e21834b4672c?w=800&q=80'
    ],
    features: [
      'Smart home automation system',
      'Infinity pool with spa',
      'Private home theater',
      'Wine cellar',
      'Gourmet chef\'s kitchen',
      'Master suite with panoramic views',
      'Home gym and sauna',
      'Landscaped gardens'
    ],
    views: 234,
    inquiries: 12,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Malibu Ocean View',
    location: 'Malibu, CA',
    price: 12750000,
    priceDisplay: '$12,750,000',
    status: 'Active',
    type: 'Villa',
    badge: 'New',
    description: 'Stunning oceanfront villa with breathtaking Pacific views and world-class amenities.',
    sqm: 850,
    rooms: 8,
    baths: 7,
    garage: 4,
    yearBuilt: 2023,
    image: 'https://images.unsplash.com/photo-1706855203772-c249b75fe016?w=1920&q=85',
    images: [
      'https://images.unsplash.com/photo-1706855203772-c249b75fe016?w=800&q=80',
      'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=800&q=80'
    ],
    features: ['Ocean views', 'Private beach access', 'Infinity pool', 'Modern kitchen', 'Home office'],
    views: 189,
    inquiries: 8,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: 'Miami Beach Residence',
    location: 'Miami Beach, FL',
    price: 9200000,
    priceDisplay: '$9,200,000',
    status: 'Pending',
    type: 'Estate',
    description: 'Contemporary estate in the heart of Miami Beach with stunning architecture.',
    sqm: 720,
    rooms: 6,
    baths: 5,
    garage: 2,
    yearBuilt: 2021,
    image: 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=1920&q=85',
    images: ['https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=800&q=80'],
    features: ['Rooftop terrace', 'Smart home', 'Pool', 'Wine room'],
    views: 156,
    inquiries: 5,
    createdAt: new Date().toISOString()
  }
];

export function DataProvider({ children }: { children: ReactNode }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProperties = localStorage.getItem('rixar_properties');
    const savedInquiries = localStorage.getItem('rixar_inquiries');

    if (savedProperties) {
      setProperties(JSON.parse(savedProperties));
    } else {
      setProperties(initialProperties);
    }

    if (savedInquiries) {
      setInquiries(JSON.parse(savedInquiries));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (properties.length > 0) {
      localStorage.setItem('rixar_properties', JSON.stringify(properties));
    }
  }, [properties]);

  useEffect(() => {
    if (inquiries.length > 0) {
      localStorage.setItem('rixar_inquiries', JSON.stringify(inquiries));
    }
  }, [inquiries]);

  const addProperty = (property: Omit<Property, 'id' | 'views' | 'inquiries' | 'createdAt'>) => {
    const newProperty: Property = {
      ...property,
      id: Math.max(0, ...properties.map(p => p.id)) + 1,
      views: 0,
      inquiries: 0,
      createdAt: new Date().toISOString()
    };
    setProperties([...properties, newProperty]);
  };

  const updateProperty = (id: number, updates: Partial<Property>) => {
    setProperties(properties.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProperty = (id: number) => {
    setProperties(properties.filter(p => p.id !== id));
  };

  const getProperty = (id: number) => {
    return properties.find(p => p.id === id);
  };

  const incrementPropertyViews = (id: number) => {
    setProperties(properties.map(p =>
      p.id === id ? { ...p, views: p.views + 1 } : p
    ));
  };

  const addInquiry = (inquiry: Omit<Inquiry, 'id' | 'createdAt'>) => {
    const newInquiry: Inquiry = {
      ...inquiry,
      id: Math.max(0, ...inquiries.map(i => i.id)) + 1,
      createdAt: new Date().toISOString()
    };
    setInquiries([newInquiry, ...inquiries]);

    // Increment inquiry count for the property
    if (inquiry.propertyId) {
      setProperties(properties.map(p =>
        p.id === inquiry.propertyId ? { ...p, inquiries: p.inquiries + 1 } : p
      ));
    }
  };

  const updateInquiry = (id: number, updates: Partial<Inquiry>) => {
    setInquiries(inquiries.map(i => i.id === id ? { ...i, ...updates } : i));
  };

  const deleteInquiry = (id: number) => {
    setInquiries(inquiries.filter(i => i.id !== id));
  };

  const getStats = () => {
    const totalProperties = properties.length;
    const activeProperties = properties.filter(p => p.status === 'Active').length;
    const totalInquiries = inquiries.length;
    const newInquiries = inquiries.filter(i => i.status === 'New').length;
    const totalViews = properties.reduce((sum, p) => sum + p.views, 0);

    return {
      totalProperties,
      activeProperties,
      totalInquiries,
      newInquiries,
      totalViews
    };
  };

  return (
    <DataContext.Provider value={{
      properties,
      inquiries,
      addProperty,
      updateProperty,
      deleteProperty,
      getProperty,
      incrementPropertyViews,
      addInquiry,
      updateInquiry,
      deleteInquiry,
      getStats
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
}
