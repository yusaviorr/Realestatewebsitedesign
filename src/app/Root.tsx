import { Outlet, Link, useLocation } from 'react-router';
import { Home, Facebook, Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen" style={{
      backgroundColor: '#050504',
      color: '#d4cdc4',
      fontFamily: 'Jost, sans-serif',
      fontWeight: 300
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{
        backgroundColor: 'rgba(5,5,4,0.95)',
        backdropFilter: 'blur(24px)',
        borderColor: 'rgba(200,185,154,0.15)'
      }}>
        <div className="flex items-center justify-between px-6 md:px-8 lg:px-13 h-16 md:h-17">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-8 md:w-9 h-8 md:h-9 rounded-full border flex items-center justify-center" style={{ borderColor: 'rgba(200,185,154,0.35)' }}>
              <Home className="w-4 h-4" style={{ color: '#c8b99a' }} />
            </div>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(14px, 3vw, 17px)',
              letterSpacing: '2.5px',
              color: '#f2ece4'
            }}>RIXAR</span>
          </Link>

          {/* Center Navigation */}
          <ul className="hidden md:flex gap-12 list-none absolute left-1/2 -translate-x-1/2">
            <li>
              <Link
                to="/"
                className="text-xs tracking-[2.5px] uppercase transition-colors"
                style={{ color: isActive('/') ? '#f2ece4' : '#8a8379' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f2ece4'}
                onMouseLeave={e => e.currentTarget.style.color = isActive('/') ? '#f2ece4' : '#8a8379'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/properties"
                className="text-xs tracking-[2.5px] uppercase transition-colors"
                style={{ color: isActive('/properties') ? '#f2ece4' : '#8a8379' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f2ece4'}
                onMouseLeave={e => e.currentTarget.style.color = isActive('/properties') ? '#f2ece4' : '#8a8379'}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-xs tracking-[2.5px] uppercase transition-colors"
                style={{ color: isActive('/services') ? '#f2ece4' : '#8a8379' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f2ece4'}
                onMouseLeave={e => e.currentTarget.style.color = isActive('/services') ? '#f2ece4' : '#8a8379'}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-xs tracking-[2.5px] uppercase transition-colors"
                style={{ color: isActive('/about') ? '#f2ece4' : '#8a8379' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f2ece4'}
                onMouseLeave={e => e.currentTarget.style.color = isActive('/about') ? '#f2ece4' : '#8a8379'}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-xs tracking-[2.5px] uppercase transition-colors"
                style={{ color: isActive('/contact') ? '#f2ece4' : '#8a8379' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f2ece4'}
                onMouseLeave={e => e.currentTarget.style.color = isActive('/contact') ? '#f2ece4' : '#8a8379'}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full border flex items-center justify-center transition-all" style={{
              borderColor: 'rgba(200,185,154,0.2)',
              color: '#8a8379'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)';
              e.currentTarget.style.color = '#c8b99a';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.2)';
              e.currentTarget.style.color = '#8a8379';
            }}>
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border flex items-center justify-center transition-all" style={{
              borderColor: 'rgba(200,185,154,0.2)',
              color: '#8a8379'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)';
              e.currentTarget.style.color = '#c8b99a';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.2)';
              e.currentTarget.style.color = '#8a8379';
            }}>
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            style={{ color: '#8a8379' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40" style={{ backgroundColor: 'rgba(5,5,4,0.98)', paddingTop: '64px' }}>
          <div className="flex flex-col h-full px-6 py-8">
            <ul className="space-y-6 flex-1">
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-4 text-base tracking-[3px] uppercase transition-colors"
                  style={{ color: isActive('/') ? '#f2ece4' : '#8a8379' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-4 text-base tracking-[3px] uppercase transition-colors"
                  style={{ color: isActive('/properties') ? '#f2ece4' : '#8a8379' }}
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-4 text-base tracking-[3px] uppercase transition-colors"
                  style={{ color: isActive('/services') ? '#f2ece4' : '#8a8379' }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-4 text-base tracking-[3px] uppercase transition-colors"
                  style={{ color: isActive('/about') ? '#f2ece4' : '#8a8379' }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-4 text-base tracking-[3px] uppercase transition-colors"
                  style={{ color: isActive('/contact') ? '#f2ece4' : '#8a8379' }}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Icons - Mobile */}
            <div className="flex items-center justify-center gap-6 pt-8 border-t" style={{ borderColor: 'rgba(200,185,154,0.15)' }}>
              <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center" style={{
                borderColor: 'rgba(200,185,154,0.25)',
                color: '#8a8379'
              }}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center" style={{
                borderColor: 'rgba(200,185,154,0.25)',
                color: '#8a8379'
              }}>
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <footer className="px-8 lg:px-13 py-12 border-t" style={{
        backgroundColor: '#0a0a09',
        borderColor: 'rgba(200,185,154,0.12)'
      }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor: 'rgba(200,185,154,0.3)' }}>
              <Home className="w-4 h-4" style={{ color: '#c8b99a' }} />
            </div>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '17px',
              letterSpacing: '2.5px',
              color: '#f2ece4'
            }}>RIXAR</span>
          </div>
          <p className="text-xs" style={{ color: '#5a574f' }}>© 2026 Rixar · All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
