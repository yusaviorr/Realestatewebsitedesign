import { Save } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="border-b px-4 md:px-8 py-4 md:py-6" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(24px, 5vw, 32px)',
          fontWeight: 300,
          color: '#f2ece4'
        }}>Settings</h1>
        <p className="text-sm mt-1" style={{ color: '#8a8379' }}>
          Manage your account and application settings
        </p>
      </div>

      <div className="p-4 md:p-8 max-w-4xl">
        {/* Company Information */}
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 md:mb-6" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(20px, 4vw, 24px)',
            fontWeight: 400,
            color: '#f2ece4'
          }}>Company Information</h2>

          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Company Name
                </label>
                <input
                  type="text"
                  defaultValue="Rixar Luxury Real Estate"
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
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="info@rixar.com"
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

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
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
                  Address
                </label>
                <input
                  type="text"
                  defaultValue="123 Luxury Avenue, Suite 500"
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
        </div>

        {/* Social Media */}
        <div className="mb-12">
          <h2 className="mb-6" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '24px',
            fontWeight: 400,
            color: '#f2ece4'
          }}>Social Media</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Facebook URL
              </label>
              <input
                type="url"
                placeholder="https://facebook.com/rixar"
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
                Instagram URL
              </label>
              <input
                type="url"
                placeholder="https://instagram.com/rixar"
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

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            className="flex items-center gap-2 px-8 py-3 border text-xs tracking-[2px] uppercase transition-all"
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
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
