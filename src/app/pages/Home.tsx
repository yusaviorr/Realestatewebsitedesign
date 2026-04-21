import { Link } from 'react-router';
import { MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import apartmentIcon from '../../imports/image-3.png';
import houseIcon from '../../imports/image-4.png';
import landIcon from '../../imports/image-5.png';
import heroImage from '../../imports/image-6.png';

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
      <section className="hidden md:block relative overflow-hidden" style={{ height: '85vh', minHeight: '600px', marginTop: '68px' }}>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(5,5,4,0.1) 0%, rgba(5,5,4,0.5) 100%)'
          }}></div>
        </div>
      </section>

      {/* Category Cards - Desktop */}
      <section className="hidden md:block px-8 lg:px-13 -mt-24 mb-16 relative z-10">
        <div className="grid grid-cols-3 gap-16 max-w-6xl mx-auto">
          <Link to="/properties?type=Apartament" className="group relative overflow-hidden border text-center transition-all px-6 py-4" style={{
            backgroundColor: 'rgba(5,5,4,0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderColor: 'rgba(200,185,154,0.3)',
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.15)';
            e.currentTarget.style.borderColor = 'rgba(200,185,154,0.6)';
            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(200,185,154,0.15)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'rgba(5,5,4,0.4)';
            e.currentTarget.style.borderColor = 'rgba(200,185,154,0.3)';
            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0,0,0,0.37)';
          }}>
            <div className="flex flex-col items-center">
              <div className="h-24 flex items-center justify-center mb-2">
                <img src={apartmentIcon} alt="Apartamente" className="w-24 h-24" style={{ filter: 'brightness(0) saturate(100%) invert(75%) sepia(14%) saturate(542%) hue-rotate(359deg) brightness(90%) contrast(85%)', objectFit: 'contain' }} />
              </div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '22px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Apartamente</h3>
            </div>
          </Link>

          <Link to="/properties?type=Casa" className="group relative overflow-hidden border px-6 py-4 text-center transition-all" style={{
            backgroundColor: 'rgba(5,5,4,0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderColor: 'rgba(200,185,154,0.3)',
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.15)';
            e.currentTarget.style.borderColor = 'rgba(200,185,154,0.6)';
            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(200,185,154,0.15)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'rgba(5,5,4,0.4)';
            e.currentTarget.style.borderColor = 'rgba(200,185,154,0.3)';
            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0,0,0,0.37)';
          }}>
            <div className="flex flex-col items-center">
              <div className="h-24 flex items-center justify-center mb-2">
                <img src={houseIcon} alt="Case și Vile" className="w-24 h-24" style={{ filter: 'brightness(0) saturate(100%) invert(75%) sepia(14%) saturate(542%) hue-rotate(359deg) brightness(90%) contrast(85%)', objectFit: 'contain' }} />
              </div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '22px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Case și Vile</h3>
            </div>
          </Link>

          <Link to="/properties?type=Teren" className="group relative overflow-hidden border px-6 py-4 text-center transition-all" style={{
            backgroundColor: 'rgba(5,5,4,0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderColor: 'rgba(200,185,154,0.3)',
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.15)';
            e.currentTarget.style.borderColor = 'rgba(200,185,154,0.6)';
            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(200,185,154,0.15)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'rgba(5,5,4,0.4)';
            e.currentTarget.style.borderColor = 'rgba(200,185,154,0.3)';
            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0,0,0,0.37)';
          }}>
            <div className="flex flex-col items-center">
              <div className="h-24 flex items-center justify-center mb-2">
                <img src={landIcon} alt="Teren" className="w-24 h-24" style={{ filter: 'brightness(0) saturate(100%) invert(75%) sepia(14%) saturate(542%) hue-rotate(359deg) brightness(90%) contrast(85%)', objectFit: 'contain' }} />
              </div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '22px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Teren</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Hero - Mobile */}
      <section className="md:hidden relative pt-16">
        {/* Hero Image */}
        <div className="relative h-[70vh] min-h-[500px]">
          <img
            src={heroImage}
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
              Imobiliare Premium
            </div>
            <h1 className="mb-4" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px, 10vw, 48px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#f2ece4'
            }}>
              Descopera Proprietatea <em>Visurilor</em> Tale
            </h1>
            <p className="text-sm mb-6" style={{ color: '#8a8379', maxWidth: '320px' }}>
              Proprietati exceptionale in cele mai prestigioase locatii
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="px-6 py-8 space-y-3">
          <Link to="/properties?type=Apartament" className="block border p-5 transition-all text-center" style={{
            backgroundColor: 'rgba(10,10,9,0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderColor: 'rgba(200,185,154,0.25)',
            boxShadow: '0 4px 16px 0 rgba(0,0,0,0.3)'
          }}>
            <div className="flex flex-col items-center gap-2">
              <img src={apartmentIcon} alt="Apartamente" className="w-14 h-14" style={{ filter: 'brightness(0) saturate(100%) invert(75%) sepia(14%) saturate(542%) hue-rotate(359deg) brightness(90%) contrast(85%)' }} />
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Apartamente</h3>
            </div>
          </Link>

          <Link to="/properties?type=Casa" className="block border p-5 transition-all text-center" style={{
            backgroundColor: 'rgba(10,10,9,0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderColor: 'rgba(200,185,154,0.25)',
            boxShadow: '0 4px 16px 0 rgba(0,0,0,0.3)'
          }}>
            <div className="flex flex-col items-center gap-2">
              <img src={houseIcon} alt="Case și Vile" className="w-14 h-14" style={{ filter: 'brightness(0) saturate(100%) invert(75%) sepia(14%) saturate(542%) hue-rotate(359deg) brightness(90%) contrast(85%)' }} />
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Case și Vile</h3>
            </div>
          </Link>

          <Link to="/properties?type=Teren" className="block border p-5 transition-all text-center" style={{
            backgroundColor: 'rgba(10,10,9,0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderColor: 'rgba(200,185,154,0.25)',
            boxShadow: '0 4px 16px 0 rgba(0,0,0,0.3)'
          }}>
            <div className="flex flex-col items-center gap-2">
              <img src={landIcon} alt="Teren" className="w-14 h-14" style={{ filter: 'brightness(0) saturate(100%) invert(75%) sepia(14%) saturate(542%) hue-rotate(359deg) brightness(90%) contrast(85%)' }} />
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Teren</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="px-6 md:px-8 lg:px-13 py-16 md:py-24">
        <div className="mb-11">
          <div className="flex items-center gap-3 mb-4 text-xs tracking-[4px] uppercase" style={{ color: '#b8a88e' }}>
            <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
            Selectie Evidentiata
          </div>
          <div className="flex items-end justify-between">
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(30px, 3.5vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#f2ece4'
            }}>
              Proprietati <em>Exclusive</em>
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
              Vezi Toate Proprietatile →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="text-xs tracking-[2.5px] uppercase mb-2" style={{ color: '#5a574f' }}>{prop.type} · Vanzare</div>
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
                    m²
                  </div>
                  <div className="flex flex-col gap-px">
                    <strong style={{ fontSize: '15px', color: '#d4cdc4', fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>{prop.rooms}</strong>
                    camere
                  </div>
                  <div className="flex flex-col gap-px">
                    <strong style={{ fontSize: '15px', color: '#d4cdc4', fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>{prop.baths}</strong>
                    bai
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '24px',
                    color: '#f2ece4',
                    fontWeight: 300
                  }}>{prop.price}</div>
                  <span className="text-xs" style={{ color: '#8a8379' }}>Vezi Detalii →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
