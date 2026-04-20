import { useParams, Link, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { MapPin, Bed, Bath, Ruler, Car, ArrowLeft, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useData } from '../contexts/DataContext';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProperty, incrementPropertyViews } = useData();

  // Get property from context
  const property = getProperty(Number(id));

  // Increment views when component mounts
  useEffect(() => {
    if (property) {
      incrementPropertyViews(property.id);
    }
  }, [property?.id]);

  // If property not found, show error
  if (!property) {
    return (
      <div className="pt-17 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '48px',
            fontWeight: 300,
            color: '#f2ece4'
          }}>Property Not Found</h1>
          <p className="mb-8" style={{ color: '#8a8379' }}>
            The property you're looking for doesn't exist.
          </p>
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 px-10 py-4 border text-xs tracking-[2.5px] uppercase transition-all"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'rgba(200,185,154,0.25)',
              color: '#f2ece4',
              textDecoration: 'none'
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
            Browse Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-17">
      {/* Back Button */}
      <div className="px-6 md:px-8 lg:px-13 py-4 md:py-6 border-b" style={{ borderColor: 'rgba(200,185,154,0.08)' }}>
        <Link to="/properties" className="inline-flex items-center gap-2 text-xs tracking-[2px] uppercase transition-colors" style={{ color: '#8a8379' }}
        onMouseEnter={e => e.currentTarget.style.color = '#f2ece4'}
        onMouseLeave={e => e.currentTarget.style.color = '#8a8379'}>
          <ArrowLeft className="w-4 h-4" />
          Back to Properties
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-screen max-h-[400px] md:max-h-[600px]">
        <ImageWithFallback
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(5,5,4,0) 0%, rgba(5,5,4,0.8) 100%)'
        }}></div>
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-8 lg:px-13 pb-8 md:pb-12">
          <div className="border px-4 py-2 inline-block mb-4" style={{
            backgroundColor: 'rgba(5,5,4,0.9)',
            backdropFilter: 'blur(8px)',
            borderColor: 'rgba(200,185,154,0.25)',
            color: '#c8b99a'
          }}>
            <span className="text-xs tracking-[2.5px] uppercase">{property.type} · {property.status}</span>
            {property.badge && <span> · {property.badge}</span>}
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 5.5vw, 68px)',
            fontWeight: 300,
            color: '#f2ece4',
            lineHeight: 1,
            marginBottom: '12px'
          }}>
            {property.title}
          </h1>
          <div className="flex items-center gap-2 text-lg" style={{ color: '#8a8379' }}>
            <MapPin className="w-5 h-5" />
            {property.location}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-13 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="mb-6" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '32px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Overview</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#8a8379' }}>
                {property.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Ruler className="w-5 h-5" style={{ color: '#c8b99a' }} />
                    <span className="text-xs tracking-[2px] uppercase" style={{ color: '#5a574f' }}>Area</span>
                  </div>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '28px',
                    fontWeight: 300,
                    color: '#f2ece4'
                  }}>{property.sqm} m²</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Bed className="w-5 h-5" style={{ color: '#c8b99a' }} />
                    <span className="text-xs tracking-[2px] uppercase" style={{ color: '#5a574f' }}>Rooms</span>
                  </div>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '28px',
                    fontWeight: 300,
                    color: '#f2ece4'
                  }}>{property.rooms}</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Bath className="w-5 h-5" style={{ color: '#c8b99a' }} />
                    <span className="text-xs tracking-[2px] uppercase" style={{ color: '#5a574f' }}>Baths</span>
                  </div>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '28px',
                    fontWeight: 300,
                    color: '#f2ece4'
                  }}>{property.baths}</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Car className="w-5 h-5" style={{ color: '#c8b99a' }} />
                    <span className="text-xs tracking-[2px] uppercase" style={{ color: '#5a574f' }}>Garage</span>
                  </div>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '28px',
                    fontWeight: 300,
                    color: '#f2ece4'
                  }}>{property.garage}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="mb-6" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '32px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Features & Amenities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm" style={{ color: '#8a8379' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#c8b99a' }}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="mb-6" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '32px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Gallery</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {property.images.map((img, idx) => (
                  <div key={idx} className="h-64 overflow-hidden border" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
                    <ImageWithFallback src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="border p-8" style={{
              backgroundColor: '#0a0a09',
              borderColor: 'rgba(200,185,154,0.12)'
            }}>
              <p className="text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>Price</p>
              <p className="mb-6" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '42px',
                fontWeight: 300,
                color: '#f2ece4',
                lineHeight: 1
              }}>{property.price}</p>
              <p className="text-xs mb-6" style={{ color: '#8a8379' }}>Negotiable</p>

              <Link to="/contact" className="w-full px-8 py-4 border text-xs tracking-[2.5px] uppercase transition-all inline-flex items-center justify-center" style={{
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
                Schedule Viewing
              </Link>
            </div>

            {/* Contact Card */}
            <div className="border p-8" style={{
              backgroundColor: '#0a0a09',
              borderColor: 'rgba(200,185,154,0.12)'
            }}>
              <h3 className="mb-6" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '24px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Contact Agent</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm" style={{ color: '#8a8379' }}>
                  <Phone className="w-4 h-4" style={{ color: '#c8b99a' }} />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: '#8a8379' }}>
                  <Mail className="w-4 h-4" style={{ color: '#c8b99a' }} />
                  info@rixar.com
                </div>
              </div>
            </div>

            {/* Details Card */}
            <div className="border p-8" style={{
              backgroundColor: '#0a0a09',
              borderColor: 'rgba(200,185,154,0.12)'
            }}>
              <h3 className="mb-6" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '24px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Property Details</h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between pb-3 border-b" style={{ borderColor: 'rgba(200,185,154,0.08)' }}>
                  <span style={{ color: '#5a574f' }}>Property ID</span>
                  <span style={{ color: '#d4cdc4' }}>RX-{id}</span>
                </div>
                <div className="flex justify-between pb-3 border-b" style={{ borderColor: 'rgba(200,185,154,0.08)' }}>
                  <span style={{ color: '#5a574f' }}>Type</span>
                  <span style={{ color: '#d4cdc4' }}>{property.type}</span>
                </div>
                <div className="flex justify-between pb-3 border-b" style={{ borderColor: 'rgba(200,185,154,0.08)' }}>
                  <span style={{ color: '#5a574f' }}>Year Built</span>
                  <span style={{ color: '#d4cdc4' }}>{property.yearBuilt}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#5a574f' }}>Status</span>
                  <span style={{ color: '#d4cdc4' }}>{property.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
