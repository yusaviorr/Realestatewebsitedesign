import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Home, Mail, Phone, MapPin } from 'lucide-react';

export default function Adauga() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    location: '',
    price: '',
    description: '',
    rooms: '',
    sqm: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    alert('Multumim! Proprietatea dumneavoastra a fost trimisa spre verificare.');
    navigate('/');
  };

  return (
    <div className="pt-16 md:pt-17 min-h-screen" style={{ backgroundColor: '#050504' }}>
      {/* Header */}
      <div className="px-6 md:px-8 lg:px-13 py-12 md:py-16 border-b" style={{
        backgroundColor: '#0a0a09',
        borderColor: 'rgba(200,185,154,0.12)'
      }}>
        <div className="flex items-center gap-3 mb-4 text-xs tracking-[4px] uppercase" style={{ color: '#b8a88e' }}>
          <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
          Anunt Proprietate
        </div>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 5.5vw, 68px)',
          fontWeight: 300,
          color: '#f2ece4',
          lineHeight: 1,
          marginBottom: '12px'
        }}>
          Adauga <em>Proprietatea Ta</em>
        </h1>
        <p className="text-sm max-w-2xl" style={{ color: '#8a8379' }}>
          Completeaza formularul de mai jos pentru a adauga proprietatea ta. Echipa noastra va verifica informatiile si te va contacta in cel mai scurt timp.
        </p>
      </div>

      {/* Form */}
      <div className="px-6 md:px-8 lg:px-13 py-12 md:py-16">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          {/* Personal Information */}
          <div className="mb-12">
            <h2 className="mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 400,
              color: '#f2ece4'
            }}>Informatii Contact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Nume Complet *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  Telefon *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
          </div>

          {/* Property Information */}
          <div className="mb-12">
            <h2 className="mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 400,
              color: '#f2ece4'
            }}>Detalii Proprietate</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Tip Proprietate *
                </label>
                <select
                  required
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.12)',
                    color: '#d4cdc4'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                >
                  <option value="">Selecteaza</option>
                  <option value="apartament">Apartament</option>
                  <option value="casa">Casa</option>
                  <option value="vila">Vila</option>
                  <option value="teren">Teren</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Locatie *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Ex: Bucuresti, Sector 1"
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
                  Pret (RON) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="Ex: 250000"
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
                  Suprafata (m²) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.sqm}
                  onChange={(e) => setFormData({ ...formData, sqm: e.target.value })}
                  placeholder="Ex: 95"
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
                  Numar Camere
                </label>
                <input
                  type="text"
                  value={formData.rooms}
                  onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                  placeholder="Ex: 3"
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
                  Descriere *
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={6}
                  placeholder="Descrie proprietatea ta..."
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
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-12 py-4 border text-xs tracking-[2.5px] uppercase transition-all"
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
              Trimite Anunt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
