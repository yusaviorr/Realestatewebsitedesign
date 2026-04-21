import { useState } from 'react';
import { Property } from '../contexts/DataContext';

interface PropertyFormProps {
  property?: Property;
  onSave: (propertyData: Omit<Property, 'id' | 'views' | 'inquiries' | 'createdAt'>) => void;
  onCancel: () => void;
}

export default function PropertyForm({ property, onSave, onCancel }: PropertyFormProps) {
  const [activeTab, setActiveTab] = useState<'basic' | 'rooms' | 'surfaces' | 'construction' | 'systems'>('basic');

  const [formData, setFormData] = useState({
    // Basic Info
    title: property?.title || '',
    location: property?.location || '',
    price: property?.price || 0,
    status: property?.status || 'Active',
    type: property?.type || 'Casa',
    badge: property?.badge || '',
    description: property?.description || '',
    yearBuilt: property?.yearBuilt || new Date().getFullYear(),
    yearRenovated: property?.yearRenovated || '',
    ownerPhone: property?.ownerPhone || '',

    // Room Details
    rooms: property?.rooms || 0,
    heightRegime: property?.heightRegime || '',
    bedrooms: property?.bedrooms || 0,
    baths: property?.baths || 0,
    kitchens: property?.kitchens || 1,
    kitchenModel: property?.kitchenModel || '',
    balconies: property?.balconies || '',

    // Surface Areas
    usableSurface: property?.usableSurface || 0,
    totalSurface: property?.totalSurface || 0,
    sqm: property?.sqm || 0,
    landSurface: property?.landSurface || 0,
    yardSurface: property?.yardSurface || 0,
    yardType: property?.yardType || '',

    // Construction Materials
    windows: property?.windows || '',
    doors: property?.doors || '',
    masonry: property?.masonry || '',
    roof: property?.roof || '',
    walls: property?.walls || '',
    floors: property?.floors || '',
    thermalInsulation: property?.thermalInsulation || '',

    // Systems
    heating: property?.heating || '',
    equipment: property?.equipment?.join(', ') || '',
    utilities: property?.utilities?.join(', ') || '',

    // Legacy
    garage: property?.garage || 0,
    images: property?.images?.join('\n') || '',
    features: property?.features?.join('\n') || '',
    otherDetails: property?.otherDetails || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const propertyData = {
      title: formData.title,
      location: formData.location,
      price: Number(formData.price),
      priceDisplay: `${Number(formData.price).toLocaleString()} RON`,
      status: formData.status as 'Active' | 'Pending' | 'Sold',
      type: formData.type,
      badge: formData.badge,
      description: formData.description,

      // Basic
      yearBuilt: Number(formData.yearBuilt),
      yearRenovated: formData.yearRenovated ? Number(formData.yearRenovated) : undefined,
      ownerPhone: formData.ownerPhone,

      // Rooms
      rooms: Number(formData.rooms),
      heightRegime: formData.heightRegime,
      bedrooms: Number(formData.bedrooms),
      baths: Number(formData.baths),
      kitchens: Number(formData.kitchens),
      kitchenModel: formData.kitchenModel,
      balconies: formData.balconies,

      // Surfaces
      usableSurface: Number(formData.usableSurface),
      totalSurface: Number(formData.totalSurface),
      sqm: Number(formData.sqm || formData.usableSurface),
      landSurface: Number(formData.landSurface),
      yardSurface: Number(formData.yardSurface),
      yardType: formData.yardType,

      // Construction
      windows: formData.windows,
      doors: formData.doors,
      masonry: formData.masonry,
      roof: formData.roof,
      walls: formData.walls,
      floors: formData.floors,
      thermalInsulation: formData.thermalInsulation,

      // Systems
      heating: formData.heating,
      equipment: formData.equipment.split(',').map(e => e.trim()).filter(e => e),
      utilities: formData.utilities.split(',').map(u => u.trim()).filter(u => u),

      // Legacy
      garage: Number(formData.garage),
      image: formData.images.split('\n').filter(img => img.trim())[0] || '',
      images: formData.images.split('\n').filter(img => img.trim()),
      features: formData.features.split('\n').filter(f => f.trim()),
      otherDetails: formData.otherDetails
    };

    onSave(propertyData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const tabs = [
    { id: 'basic', label: 'Informatii de Baza' },
    { id: 'rooms', label: 'Camere' },
    { id: 'surfaces', label: 'Suprafete' },
    { id: 'construction', label: 'Constructie' },
    { id: 'systems', label: 'Sisteme & Dotari' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" style={{
      backgroundColor: 'rgba(5,5,4,0.95)'
    }}>
      <div className="border max-w-6xl w-full max-h-[90vh] overflow-auto" style={{
        backgroundColor: '#0a0a09',
        borderColor: 'rgba(200,185,154,0.12)'
      }}>
        <div className="px-4 md:px-8 py-4 md:py-6 border-b flex items-center justify-between sticky top-0 z-10" style={{
          backgroundColor: '#0a0a09',
          borderColor: 'rgba(200,185,154,0.12)'
        }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(20px, 4vw, 24px)',
            fontWeight: 400,
            color: '#f2ece4'
          }}>{property ? 'Editeaza Proprietatea' : 'Adauga Proprietate Noua'}</h2>
          <button
            onClick={onCancel}
            className="text-2xl"
            style={{ color: '#8a8379' }}
          >×</button>
        </div>

        {/* Tabs */}
        <div className="border-b flex overflow-x-auto" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className="px-6 py-4 text-xs tracking-wide uppercase whitespace-nowrap transition-all"
              style={{
                backgroundColor: activeTab === tab.id ? 'rgba(200,185,154,0.1)' : 'transparent',
                color: activeTab === tab.id ? '#c8b99a' : '#8a8379',
                borderBottom: activeTab === tab.id ? '2px solid #c8b99a' : '2px solid transparent'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-4 md:p-8">
          {/* Basic Info Tab */}
          {activeTab === 'basic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Titlu Proprietate *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Pret de Vanzare (RON) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Tip Proprietate *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                >
                  <option value="Casa">Casa</option>
                  <option value="Apartament">Apartament</option>
                  <option value="Vila">Vila</option>
                  <option value="Teren">Teren</option>
                  <option value="Spatiu comercial">Spatiu comercial</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  An Constructie *
                </label>
                <input
                  type="number"
                  name="yearBuilt"
                  value={formData.yearBuilt}
                  onChange={handleChange}
                  required
                  min="1800"
                  max={new Date().getFullYear() + 5}
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  An Renovare
                </label>
                <input
                  type="number"
                  name="yearRenovated"
                  value={formData.yearRenovated}
                  onChange={handleChange}
                  min="1800"
                  max={new Date().getFullYear()}
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Adresa *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Proprietar + Nr. Telefon
                </label>
                <input
                  type="text"
                  name="ownerPhone"
                  value={formData.ownerPhone}
                  onChange={handleChange}
                  placeholder="Nume + 0700000000"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Status *
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                >
                  <option value="Active">Activ</option>
                  <option value="Pending">In asteptare</option>
                  <option value="Sold">Vandut</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Descriere
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none resize-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>
            </div>
          )}

          {/* Rooms Tab */}
          {activeTab === 'rooms' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Nr. Camere *
                </label>
                <input
                  type="number"
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Regim Inaltime (S,D,P,E,M, pod)
                </label>
                <input
                  type="text"
                  name="heightRegime"
                  value={formData.heightRegime}
                  onChange={handleChange}
                  placeholder="ex: P+1E"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Nr. Dormitoare
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Nr. Bai *
                </label>
                <input
                  type="number"
                  name="baths"
                  value={formData.baths}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Nr. Bucatarii
                </label>
                <input
                  type="number"
                  name="kitchens"
                  value={formData.kitchens}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Model Bucatarie
                </label>
                <input
                  type="text"
                  name="kitchenModel"
                  value={formData.kitchenModel}
                  onChange={handleChange}
                  placeholder="ex: Americana, Inchisa"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Balcoane sau Terase (+ supraf.)
                </label>
                <input
                  type="text"
                  name="balconies"
                  value={formData.balconies}
                  onChange={handleChange}
                  placeholder="ex: 2 balcoane (10mp), 1 terasa (25mp)"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Nr. Locuri Parcare/Garaj
                </label>
                <input
                  type="number"
                  name="garage"
                  value={formData.garage}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>
            </div>
          )}

          {/* Surfaces Tab */}
          {activeTab === 'surfaces' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Suprafata Utila (mp)
                </label>
                <input
                  type="number"
                  name="usableSurface"
                  value={formData.usableSurface}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Suprafata Totala (mp)
                </label>
                <input
                  type="number"
                  name="totalSurface"
                  value={formData.totalSurface}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Suprafata Teren (mp)
                </label>
                <input
                  type="number"
                  name="landSurface"
                  value={formData.landSurface}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Suprafata Curte (mp)
                </label>
                <input
                  type="number"
                  name="yardSurface"
                  value={formData.yardSurface}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Tip Curte
                </label>
                <select
                  name="yardType"
                  value={formData.yardType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                >
                  <option value="">Selecteaza</option>
                  <option value="comuna">Comuna</option>
                  <option value="individuala">Individuala</option>
                </select>
              </div>
            </div>
          )}

          {/* Construction Tab */}
          {activeTab === 'construction' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Ferestre
                </label>
                <input
                  type="text"
                  name="windows"
                  value={formData.windows}
                  onChange={handleChange}
                  placeholder="termopan/pvc/aluminiu/lemn"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Usi
                </label>
                <input
                  type="text"
                  name="doors"
                  value={formData.doors}
                  onChange={handleChange}
                  placeholder="lemn/pvc"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Zidarie
                </label>
                <input
                  type="text"
                  name="masonry"
                  value={formData.masonry}
                  onChange={handleChange}
                  placeholder="caramida"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Acoperis
                </label>
                <input
                  type="text"
                  name="roof"
                  value={formData.roof}
                  onChange={handleChange}
                  placeholder="tigla/tabla"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Pereti
                </label>
                <input
                  type="text"
                  name="walls"
                  value={formData.walls}
                  onChange={handleChange}
                  placeholder="faianta/lavabil/glet/var"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Podele
                </label>
                <input
                  type="text"
                  name="floors"
                  value={formData.floors}
                  onChange={handleChange}
                  placeholder="parchet/gresie/beton/marmura"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Izolatii Termice
                </label>
                <input
                  type="text"
                  name="thermalInsulation"
                  value={formData.thermalInsulation}
                  onChange={handleChange}
                  placeholder="ex: Polistiren 10cm"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>
            </div>
          )}

          {/* Systems Tab */}
          {activeTab === 'systems' && (
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Incalzire
                </label>
                <input
                  type="text"
                  name="heating"
                  value={formData.heating}
                  onChange={handleChange}
                  placeholder="centrala termica/incalzire in pardoseala/convectoare/sobe/panou/climatizare"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Dotari (separate prin virgula)
                </label>
                <textarea
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleChange}
                  rows={3}
                  placeholder="senzor incendii, sistem alarma, boxa, pivnita, interfon, semineu, aer conditionat"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none resize-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Utilitati (separate prin virgula)
                </label>
                <textarea
                  name="utilities"
                  value={formData.utilities}
                  onChange={handleChange}
                  rows={3}
                  placeholder="curent, trifazic, gaz, put, apa, fosa septica, canalizare, catv, telefon, internet"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none resize-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  URL-uri Imagini (una per linie)
                </label>
                <textarea
                  name="images"
                  value={formData.images}
                  onChange={handleChange}
                  rows={4}
                  placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none resize-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Alte Detalii
                </label>
                <textarea
                  name="otherDetails"
                  value={formData.otherDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none resize-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                />
              </div>
            </div>
          )}

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 pt-6 border-t" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
            <button
              type="submit"
              className="flex-1 px-4 md:px-6 py-2 md:py-3 border text-xs tracking-[2px] uppercase transition-all"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'rgba(200,185,154,0.25)',
                color: '#f2ece4'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#c8b99a';
                e.currentTarget.style.color = '#050504';
                e.currentTarget.style.borderColor = '#c8b99a';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#f2ece4';
                e.currentTarget.style.borderColor = 'rgba(200,185,154,0.25)';
              }}
            >
              {property ? 'Actualizeaza Proprietatea' : 'Adauga Proprietatea'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-4 md:px-6 py-2 md:py-3 text-xs tracking-[2px] uppercase"
              style={{ color: '#8a8379' }}
            >
              Anuleaza
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
