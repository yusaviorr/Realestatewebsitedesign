import { useState } from 'react';
import { Property } from '../contexts/DataContext';

interface PropertyFormProps {
  property?: Property;
  onSave: (propertyData: Omit<Property, 'id' | 'views' | 'inquiries' | 'createdAt'>) => void;
  onCancel: () => void;
}

export default function PropertyForm({ property, onSave, onCancel }: PropertyFormProps) {
  const [formData, setFormData] = useState({
    title: property?.title || '',
    location: property?.location || '',
    price: property?.price || 0,
    status: property?.status || 'Active',
    type: property?.type || 'Villa',
    badge: property?.badge || '',
    description: property?.description || '',
    sqm: property?.sqm || 0,
    rooms: property?.rooms || 0,
    baths: property?.baths || 0,
    garage: property?.garage || 0,
    yearBuilt: property?.yearBuilt || new Date().getFullYear(),
    images: property?.images?.join('\n') || '',
    features: property?.features?.join('\n') || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const propertyData = {
      title: formData.title,
      location: formData.location,
      price: Number(formData.price),
      priceDisplay: `$${Number(formData.price).toLocaleString()}`,
      status: formData.status as 'Active' | 'Pending' | 'Sold',
      type: formData.type,
      badge: formData.badge,
      description: formData.description,
      sqm: Number(formData.sqm),
      rooms: Number(formData.rooms),
      baths: Number(formData.baths),
      garage: Number(formData.garage),
      yearBuilt: Number(formData.yearBuilt),
      images: formData.images.split('\n').filter(img => img.trim()),
      features: formData.features.split('\n').filter(f => f.trim())
    };

    onSave(propertyData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" style={{
      backgroundColor: 'rgba(5,5,4,0.95)'
    }}>
      <div className="border max-w-4xl w-full max-h-[90vh] overflow-auto" style={{
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
          }}>{property ? 'Edit Property' : 'Add New Property'}</h2>
          <button
            onClick={onCancel}
            className="text-2xl"
            style={{ color: '#8a8379' }}
          >×</button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Title */}
            <div className="md:col-span-2">
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Property Title *
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

            {/* Location */}
            <div>
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Location *
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

            {/* Price */}
            <div>
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Price ($) *
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

            {/* Type */}
            <div>
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Property Type *
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
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="Estate">Estate</option>
                <option value="Land">Land</option>
              </select>
            </div>

            {/* Status */}
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
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Sold">Sold</option>
              </select>
            </div>

            {/* Badge */}
            <div className="md:col-span-2">
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Badge (Optional)
              </label>
              <input
                type="text"
                name="badge"
                value={formData.badge}
                onChange={handleChange}
                placeholder="e.g., Exclusive, Featured, New"
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

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
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

            {/* Square Meters */}
            <div>
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Square Meters *
              </label>
              <input
                type="number"
                name="sqm"
                value={formData.sqm}
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

            {/* Rooms */}
            <div>
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Rooms *
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

            {/* Bathrooms */}
            <div>
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Bathrooms *
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

            {/* Garage */}
            <div>
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Garage Spaces *
              </label>
              <input
                type="number"
                name="garage"
                value={formData.garage}
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

            {/* Year Built */}
            <div>
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Year Built *
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

            {/* Images */}
            <div className="md:col-span-2">
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Image URLs (one per line) *
              </label>
              <textarea
                name="images"
                value={formData.images}
                onChange={handleChange}
                required
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

            {/* Features */}
            <div className="md:col-span-2">
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Features (one per line) *
              </label>
              <textarea
                name="features"
                value={formData.features}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Ocean views&#10;Modern kitchen&#10;Private pool"
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

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
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
              {property ? 'Update Property' : 'Add Property'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-4 md:px-6 py-2 md:py-3 text-xs tracking-[2px] uppercase"
              style={{ color: '#8a8379' }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
