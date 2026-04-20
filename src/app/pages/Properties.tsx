import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { MapPin, Search, SlidersHorizontal } from 'lucide-react';

export default function Properties() {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const [filters, setFilters] = useState({
    type: typeFilter || 'all',
    location: 'all',
    priceMin: '',
    priceMax: '',
    rooms: 'all'
  });

  const allProperties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1706808849827-7366c098b317?w=700&q=80',
      type: 'villa',
      badge: 'Exclusive',
      title: 'Sunset Boulevard Estate',
      location: 'Beverly Hills, CA',
      price: 8500000,
      sqm: 620,
      rooms: 7,
      baths: 6,
      garage: 3
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1706855203772-c249b75fe016?w=700&q=80',
      type: 'villa',
      badge: 'New',
      title: 'Malibu Ocean View',
      location: 'Malibu, CA',
      price: 12750000,
      sqm: 850,
      rooms: 8,
      baths: 7,
      garage: 4
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=700&q=80',
      type: 'estate',
      badge: '',
      title: 'Miami Beach Residence',
      location: 'Miami Beach, FL',
      price: 9200000,
      sqm: 720,
      rooms: 6,
      baths: 5,
      garage: 2
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80',
      type: 'villa',
      badge: 'Luxury',
      title: 'Alpine Mountain Lodge',
      location: 'Aspen, CO',
      price: 15200000,
      sqm: 920,
      rooms: 9,
      baths: 8,
      garage: 4
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
      type: 'apartment',
      badge: '',
      title: 'Manhattan Penthouse',
      location: 'New York, NY',
      price: 6800000,
      sqm: 380,
      rooms: 4,
      baths: 3,
      garage: 2
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=80',
      type: 'apartment',
      badge: 'New',
      title: 'Downtown Luxury Suite',
      location: 'San Francisco, CA',
      price: 4200000,
      sqm: 280,
      rooms: 3,
      baths: 2,
      garage: 1
    }
  ];

  const formatPrice = (price: number) => {
    return `$${(price / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="pt-16 md:pt-17">
      {/* Header */}
      <div className="px-6 md:px-8 lg:px-13 py-12 md:py-16 border-b" style={{
        backgroundColor: '#0a0a09',
        borderColor: 'rgba(200,185,154,0.12)'
      }}>
        <div className="flex items-center gap-3 mb-4 text-xs tracking-[4px] uppercase" style={{ color: '#b8a88e' }}>
          <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
          Portfolio
        </div>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 5.5vw, 68px)',
          fontWeight: 300,
          color: '#f2ece4',
          lineHeight: 1,
          marginBottom: '12px'
        }}>
          Premium <em>Properties</em>
        </h1>
        <p className="text-sm max-w-md" style={{ color: '#8a8379' }}>
          Exclusive selection of luxury properties available for acquisition
        </p>
      </div>

      {/* Filters */}
      <div className="px-6 md:px-8 lg:px-13 py-6 md:py-8 border-b" style={{
        backgroundColor: '#0a0a09',
        borderColor: 'rgba(200,185,154,0.08)'
      }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>Type</label>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'rgba(200,185,154,0.12)',
                color: '#d4cdc4'
              }}
            >
              <option value="all">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="estate">Estate</option>
              <option value="land">Land</option>
            </select>
          </div>

          <div>
            <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>Location</label>
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'rgba(200,185,154,0.12)',
                color: '#d4cdc4'
              }}
            >
              <option value="all">All Locations</option>
              <option value="ca">California</option>
              <option value="fl">Florida</option>
              <option value="ny">New York</option>
              <option value="co">Colorado</option>
            </select>
          </div>

          <div>
            <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>Min Price</label>
            <input
              type="text"
              placeholder="$2M"
              value={filters.priceMin}
              onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
              className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'rgba(200,185,154,0.12)',
                color: '#d4cdc4'
              }}
            />
          </div>

          <div>
            <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>Max Price</label>
            <input
              type="text"
              placeholder="$20M"
              value={filters.priceMax}
              onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
              className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'rgba(200,185,154,0.12)',
                color: '#d4cdc4'
              }}
            />
          </div>

          <button className="sm:col-span-2 md:col-span-1 mt-auto px-6 py-3 border text-xs tracking-[2.5px] uppercase transition-all flex items-center justify-center gap-2" style={{
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
          }}>
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="px-6 md:px-8 lg:px-13 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
          <p className="text-sm" style={{ color: '#8a8379' }}>
            Showing {allProperties.length} properties
          </p>
          <button className="flex items-center gap-2 text-xs tracking-[2px] uppercase" style={{ color: '#8a8379' }}>
            <SlidersHorizontal className="w-4 h-4" />
            Sort
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allProperties.map((prop) => (
            <Link key={prop.id} to={`/properties/${prop.id}`} className="border overflow-hidden cursor-pointer transition-all group" style={{
              backgroundColor: '#0a0a09',
              borderColor: 'rgba(200,185,154,0.12)'
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.3)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}>
              <div className="relative h-64 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-650 group-hover:scale-105" style={{ backgroundImage: `url(${prop.image})` }}></div>
                {prop.badge && (
                  <div className="absolute top-4 left-4 border px-3 py-1 text-xs tracking-[2.5px] uppercase" style={{
                    backgroundColor: 'rgba(5,5,4,0.92)',
                    backdropFilter: 'blur(8px)',
                    borderColor: 'rgba(200,185,154,0.25)',
                    color: '#c8b99a'
                  }}>{prop.badge}</div>
                )}
              </div>

              <div className="p-6">
                <div className="text-xs tracking-[2.5px] uppercase mb-2" style={{ color: '#5a574f' }}>{prop.type} · Sale</div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '21px',
                  fontWeight: 400,
                  color: '#f2ece4',
                  marginBottom: '6px',
                  lineHeight: 1.2
                }}>{prop.title}</h3>
                <div className="flex items-center gap-1 mb-5 text-xs" style={{ color: '#8a8379' }}>
                  <MapPin className="w-3 h-3" />
                  {prop.location}
                </div>

                <div className="flex gap-4 py-4 mb-5 border-t border-b text-xs" style={{
                  borderColor: 'rgba(200,185,154,0.1)',
                  color: '#8a8379'
                }}>
                  <div className="flex flex-col gap-px">
                    <strong style={{ fontSize: '15px', color: '#d4cdc4', fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>{prop.sqm}</strong>
                    sqm
                  </div>
                  <div className="flex flex-col gap-px">
                    <strong style={{ fontSize: '15px', color: '#d4cdc4', fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>{prop.rooms}</strong>
                    rooms
                  </div>
                  <div className="flex flex-col gap-px">
                    <strong style={{ fontSize: '15px', color: '#d4cdc4', fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>{prop.baths}</strong>
                    baths
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '24px',
                    color: '#f2ece4',
                    fontWeight: 300
                  }}>{formatPrice(prop.price)}</div>
                  <span className="text-xs" style={{ color: '#8a8379' }}>View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
