import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Property {
  id: number;
  title: string; // Titlu proprietate
  location: string; // Adresa
  price: number; // Pret de vanzare
  priceDisplay: string;
  status: 'Active' | 'Pending' | 'Sold';
  type: string;
  badge?: string;
  description: string;

  // Basic Details
  yearBuilt: number; // An constructie
  yearRenovated?: number; // An renovare
  ownerPhone?: string; // Proprietar + nr. de telefon

  // Room Details
  rooms: number; // Nr. Camere
  heightRegime?: string; // Regim inaltime (S,D,P,E,M, pod)
  bedrooms?: number; // Nr. dormitoare
  baths: number; // Nr. bai
  kitchens?: number; // Nr. bucatarii
  kitchenModel?: string; // model bucatarie
  balconies?: string; // Balcoane sau terase (+supraf.)

  // Surface Areas
  usableSurface?: number; // Suprafata utila
  totalSurface?: number; // Suprafata totala
  sqm: number; // kept for compatibility
  landSurface?: number; // Suprafata teren
  yardSurface?: number; // Suprafata curte
  yardType?: string; // Tip curte: comuna/individuala

  // Construction Materials
  windows?: string; // Ferestre: termopan/pvc/aluminiu/lemn
  doors?: string; // Usi: lemn/pvc
  masonry?: string; // Zidarie: caramida
  roof?: string; // Acoperis: tigla/tabla
  walls?: string; // Pereti: faianta/lavabil/glet/var
  floors?: string; // Podele: parchet/gresie/beton/marmura
  thermalInsulation?: string; // Izolatii termice

  // Systems
  heating?: string; // Incalzire
  equipment?: string[]; // Dotari: senzor incendii/sistem alarma/boxa/pivnita/interfon/semineu/aer conditionat
  utilities?: string[]; // Utilitati: curent/trifazic/gaz/put/apa/fosa septica/canalizare/catv/telefon/internet

  // Legacy fields
  garage: number;
  image: string;
  images: string[];
  features: string[];
  views: number;
  inquiries: number;
  createdAt: string;
  otherDetails?: string; // Alte detalii
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
    title: 'Vila Moderna in Zona Rezidentiala',
    location: 'Bucuresti, Sector 1',
    price: 450000,
    priceDisplay: '450.000 RON',
    status: 'Active',
    type: 'Vila',
    badge: 'Exclusiv',
    description: 'Vila moderna cu arhitectura contemporana, situata intr-o zona linistita si exclusivista. Finisaje de calitate superioara si dotari premium.',
    sqm: 320,
    usableSurface: 280,
    totalSurface: 320,
    landSurface: 650,
    yardSurface: 330,
    yardType: 'Individuala',
    rooms: 6,
    heightRegime: 'P+1+M',
    bedrooms: 4,
    baths: 3,
    kitchens: 1,
    kitchenModel: 'Moderna, open-space',
    balconies: '2 balcoane (15 m², 12 m²), 1 terasa (45 m²)',
    garage: 2,
    yearBuilt: 2022,
    yearRenovated: 2024,
    ownerPhone: '+40 722 123 456',
    windows: 'Termopan PVC',
    doors: 'Lemn masiv',
    masonry: 'Caramida',
    roof: 'Tigla ceramica',
    walls: 'Vopsea lavabila, faianta in bai',
    floors: 'Parchet stejar, gresie portelanata',
    thermalInsulation: 'Exterior 10cm polistiren expandat',
    heating: 'Centrala termica pe gaz, pardoseala radianta',
    equipment: ['Sistem alarma', 'Interfon video', 'Aer conditionat', 'Semineu', 'Boxa', 'Pivnita'],
    utilities: ['Curent electric', 'Trifazic', 'Gaz metan', 'Apa', 'Canalizare', 'Internet fibra optica', 'Telefon', 'CATV'],
    image: 'https://images.unsplash.com/photo-1706808849827-7366c098b317?w=1920&q=85',
    images: [
      'https://images.unsplash.com/photo-1706808849827-7366c098b317?w=800&q=80',
      'https://images.unsplash.com/photo-1706855203772-c249b75fe016?w=800&q=80',
      'https://images.unsplash.com/photo-1706808886508-e21834b4672c?w=800&q=80'
    ],
    features: [
      'Sistem alarma si supraveghere',
      'Incalzire pardoseala',
      'Aer conditionat in toate camerele',
      'Bucatarie complet echipata',
      'Gradina amenajata',
      'Loc parcare 2 masini',
      'Zona linistita'
    ],
    views: 234,
    inquiries: 12,
    createdAt: new Date().toISOString(),
    otherDetails: 'Proprietatea se afla intr-o zona exclusivista cu acces rapid la scolile internationale si facilitati comerciale.'
  },
  {
    id: 2,
    title: 'Apartament Lux 3 Camere',
    location: 'Cluj-Napoca, Centru',
    price: 185000,
    priceDisplay: '185.000 RON',
    status: 'Active',
    type: 'Apartament',
    badge: 'Nou',
    description: 'Apartament spatios in cladire noua, cu finisaje moderne si pozitie centrala. Ideal pentru familii sau investitie.',
    sqm: 95,
    usableSurface: 85,
    totalSurface: 95,
    rooms: 3,
    heightRegime: 'P+4',
    bedrooms: 2,
    baths: 2,
    kitchens: 1,
    balconies: '1 balcon (8 m²)',
    garage: 1,
    yearBuilt: 2023,
    ownerPhone: '+40 744 987 654',
    windows: 'Termopan aluminiu',
    doors: 'PVC',
    masonry: 'Caramida',
    walls: 'Glet, vopsea lavabila',
    floors: 'Gresie portelanata, parchet laminat',
    heating: 'Centrala termica condensatie',
    equipment: ['Interfon', 'Lift', 'Senzor incendiu'],
    utilities: ['Curent electric', 'Gaz metan', 'Apa', 'Canalizare', 'Internet', 'CATV'],
    image: 'https://images.unsplash.com/photo-1706855203772-c249b75fe016?w=1920&q=85',
    images: [
      'https://images.unsplash.com/photo-1706855203772-c249b75fe016?w=800&q=80',
      'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=800&q=80'
    ],
    features: ['Pozitie centrala', 'Cladire noua', 'Lift', 'Bucatarie moderna', 'Balcon'],
    views: 189,
    inquiries: 8,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: 'Casa P+1 Zona Linistita',
    location: 'Timisoara, Girocului',
    price: 275000,
    priceDisplay: '275.000 RON',
    status: 'Pending',
    type: 'Casa',
    description: 'Casa familiala spatioasa cu curte generoasa, situata intr-o zona linistita cu acces facil la toate utilitatile.',
    sqm: 180,
    usableSurface: 160,
    totalSurface: 180,
    landSurface: 420,
    yardSurface: 240,
    yardType: 'Individuala',
    rooms: 5,
    heightRegime: 'P+1',
    bedrooms: 3,
    baths: 2,
    garage: 1,
    yearBuilt: 2018,
    ownerPhone: '+40 755 321 789',
    windows: 'Termopan PVC',
    doors: 'Lemn',
    masonry: 'Caramida',
    roof: 'Tabla',
    walls: 'Vopsea lavabila',
    floors: 'Gresie, parchet',
    heating: 'Centrala gaz',
    equipment: ['Interfon', 'Garaj'],
    utilities: ['Curent electric', 'Gaz', 'Apa', 'Canalizare', 'Internet'],
    image: 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=1920&q=85',
    images: ['https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=800&q=80'],
    features: ['Curte spatioasa', 'Zona linistita', 'Garaj', 'Pivnita'],
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
