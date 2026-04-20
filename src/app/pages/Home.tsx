import { Link } from 'react-router';
import { Home as HomeIcon, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const featuredProperties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1706808849827-7366c098b317?w=700&q=80',
      type: 'Villa',
      badge: 'Exclusive',
      title: 'Sunset Boulevard Estate',
      location: 'Beverly Hills, CA',
      price: '$8,500,000',
      sqm: 620,
      rooms: 7,
      baths: 6,
      garage: 3
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1706855203772-c249b75fe016?w=700&q=80',
      type: 'Villa',
      badge: 'New',
      title: 'Malibu Ocean View',
      location: 'Malibu, CA',
      price: '$12,750,000',
      sqm: 850,
      rooms: 8,
      baths: 7,
      garage: 4
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=700&q=80',
      type: 'Estate',
      badge: '',
      title: 'Miami Beach Residence',
      location: 'Miami Beach, FL',
      price: '$9,200,000',
      sqm: 720,
      rooms: 6,
      baths: 5,
      garage: 2
    }
  ];

  return (
    <>
      {/* Hero - Desktop */}
      <section className="hidden md:block relative overflow-hidden" style={{ height: '100vh', minHeight: '700px', marginTop: '68px' }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85"
            alt="Luxury Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(5,5,4,0.1) 0%, rgba(5,5,4,0.4) 60%, rgba(5,5,4,0.92) 100%)'
          }}></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-13 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            <Link to="/properties?type=apartment" className="group relative overflow-hidden border px-8 py-8 text-left transition-all" style={{
              backgroundColor: 'rgba(15,15,14,0.85)',
              backdropFilter: 'blur(12px)',
              borderColor: 'rgba(200,185,154,0.25)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.12)';
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(15,15,14,0.85)';
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.25)';
            }}>
              <div className="flex items-center gap-4 mb-3">
                <HomeIcon className="w-6 h-6" style={{ color: '#c8b99a' }} />
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#f2ece4'
                }}>Apartments</h3>
              </div>
              <p className="text-sm" style={{ color: '#8a8379' }}>Luxury urban living spaces</p>
            </Link>

            <Link to="/properties?type=villa" className="group relative overflow-hidden border px-8 py-8 text-left transition-all" style={{
              backgroundColor: 'rgba(15,15,14,0.85)',
              backdropFilter: 'blur(12px)',
              borderColor: 'rgba(200,185,154,0.25)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.12)';
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(15,15,14,0.85)';
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.25)';
            }}>
              <div className="flex items-center gap-4 mb-3">
                <HomeIcon className="w-6 h-6" style={{ color: '#c8b99a' }} />
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#f2ece4'
                }}>Houses & Villas</h3>
              </div>
              <p className="text-sm" style={{ color: '#8a8379' }}>Exclusive residential estates</p>
            </Link>

            <Link to="/properties?type=land" className="group relative overflow-hidden border px-8 py-8 text-left transition-all" style={{
              backgroundColor: 'rgba(15,15,14,0.85)',
              backdropFilter: 'blur(12px)',
              borderColor: 'rgba(200,185,154,0.25)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.12)';
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(15,15,14,0.85)';
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.25)';
            }}>
              <div className="flex items-center gap-4 mb-3">
                <HomeIcon className="w-6 h-6" style={{ color: '#c8b99a' }} />
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#f2ece4'
                }}>Land</h3>
              </div>
              <p className="text-sm" style={{ color: '#8a8379' }}>Premium development plots</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero - Mobile */}
      <section className="md:hidden relative pt-16">
        {/* Hero Image */}
        <div className="relative h-[70vh] min-h-[500px]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
            alt="Luxury Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(5,5,4,0.2) 0%, rgba(5,5,4,0.8) 100%)'
          }}></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 pb-8">
            <div className="flex items-center gap-2 mb-4 text-xs tracking-[3px] uppercase" style={{ color: '#b8a88e' }}>
              <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
              Luxury Real Estate
            </div>
            <h1 className="mb-4" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px, 10vw, 48px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#f2ece4'
            }}>
              Discover Your <em>Dream</em> Property
            </h1>
            <p className="text-sm mb-6" style={{ color: '#8a8379', maxWidth: '320px' }}>
              Exceptional properties in the world's most prestigious locations
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="px-6 py-8 space-y-4">
          <Link to="/properties?type=apartment" className="block border p-6 transition-all" style={{
            backgroundColor: '#0a0a09',
            borderColor: 'rgba(200,185,154,0.15)'
          }}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-1" style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: '#f2ece4'
                }}>Apartments</h3>
                <p className="text-sm" style={{ color: '#8a8379' }}>Luxury urban living spaces</p>
              </div>
              <HomeIcon className="w-6 h-6" style={{ color: '#c8b99a' }} />
            </div>
          </Link>

          <Link to="/properties?type=villa" className="block border p-6 transition-all" style={{
            backgroundColor: '#0a0a09',
            borderColor: 'rgba(200,185,154,0.15)'
          }}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-1" style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: '#f2ece4'
                }}>Houses & Villas</h3>
                <p className="text-sm" style={{ color: '#8a8379' }}>Exclusive residential estates</p>
              </div>
              <HomeIcon className="w-6 h-6" style={{ color: '#c8b99a' }} />
            </div>
          </Link>

          <Link to="/properties?type=land" className="block border p-6 transition-all" style={{
            backgroundColor: '#0a0a09',
            borderColor: 'rgba(200,185,154,0.15)'
          }}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-1" style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: '#f2ece4'
                }}>Land</h3>
                <p className="text-sm" style={{ color: '#8a8379' }}>Premium development plots</p>
              </div>
              <HomeIcon className="w-6 h-6" style={{ color: '#c8b99a' }} />
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="px-6 md:px-8 lg:px-13 py-16 md:py-24">
        <div className="mb-11">
          <div className="flex items-center gap-3 mb-4 text-xs tracking-[4px] uppercase" style={{ color: '#b8a88e' }}>
            <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
            Featured Selection
          </div>
          <div className="flex items-end justify-between">
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(30px, 3.5vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#f2ece4'
            }}>
              <em>Exclusive</em> Properties
            </h2>
            <Link to="/properties" className="hidden md:inline-flex items-center gap-3 text-xs tracking-[2.5px] uppercase border px-7 py-3 transition-all" style={{
              color: '#f2ece4',
              borderColor: 'rgba(200,185,154,0.25)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.5)';
              e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.25)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}>
              View All Properties →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProperties.map((prop) => (
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
                  }}>{prop.price}</div>
                  <span className="text-xs" style={{ color: '#8a8379' }}>View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="border-t border-b grid grid-cols-2 lg:grid-cols-4" style={{
        backgroundColor: '#0c0c0b',
        borderColor: 'rgba(200,185,154,0.12)'
      }}>
        {[
          { num: '15+', label: 'Years of Experience' },
          { num: '860', label: 'Properties Sold' },
          { num: '98%', label: 'Satisfied Clients' },
          { num: '12', label: 'Expert Consultants' }
        ].map((stat, idx) => (
          <div key={idx} className={`px-6 md:px-8 lg:px-12 py-10 md:py-13 border-r lg:border-b-0 ${idx >= 2 ? 'border-b-0' : 'border-b'} ${idx % 2 === 1 ? 'border-r-0' : ''} lg:border-r lg:last:border-r-0`} style={{
            borderColor: 'rgba(200,185,154,0.12)'
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 8vw, 52px)',
              fontWeight: 300,
              color: '#f2ece4',
              lineHeight: 1,
              marginBottom: '8px'
            }}>{stat.num}</div>
            <div className="text-xs tracking-[2px] uppercase" style={{ color: '#8a8379' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
