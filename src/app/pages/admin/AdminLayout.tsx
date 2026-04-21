import { Outlet, Link, useNavigate, useLocation } from 'react-router';
import { LayoutDashboard, Building2, MessageSquare, Settings, LogOut, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import logo from '../../../imports/logo_upscaled.png';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Panou Control' },
    { path: '/admin/properties', icon: Building2, label: 'Proprietati' },
    { path: '/admin/inquiries', icon: MessageSquare, label: 'Mesaje' },
    { path: '/admin/settings', icon: Settings, label: 'Setari' }
  ];

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#050504', color: '#d4cdc4' }}>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 border-b flex items-center justify-between px-6" style={{
        backgroundColor: '#0a0a09',
        borderColor: 'rgba(200,185,154,0.12)'
      }}>
        <Link to="/" className="flex items-center">
          <img src={logo} alt="RIXAR" className="h-10" />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2"
          style={{ color: '#8a8379' }}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          style={{ backgroundColor: 'rgba(5,5,4,0.95)' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="pt-20 px-6">
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-4 px-6 py-4 rounded transition-all"
                        style={{
                          backgroundColor: active ? 'rgba(200,185,154,0.1)' : 'transparent',
                          color: active ? '#c8b99a' : '#8a8379',
                          borderLeft: active ? '2px solid #c8b99a' : '2px solid transparent'
                        }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-base tracking-wide">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
              <button
                onClick={handleLogout}
                className="flex items-center gap-4 px-6 py-4 rounded w-full transition-all"
                style={{ color: '#8a8379' }}
              >
                <LogOut className="w-5 h-5" />
                <span className="text-base tracking-wide">Deconectare</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className={`hidden lg:flex ${sidebarOpen ? 'w-64' : 'w-20'} border-r transition-all duration-300 flex-col flex-shrink-0`} style={{
        backgroundColor: '#0a0a09',
        borderColor: 'rgba(200,185,154,0.12)'
      }}>
        {/* Logo */}
        <div className={`h-17 border-b flex items-center ${sidebarOpen ? 'justify-between px-6' : 'justify-center px-0'} transition-all`} style={{
          borderColor: 'rgba(200,185,154,0.12)'
        }}>
          {sidebarOpen ? (
            <>
              <Link to="/" className="flex items-center">
                <img src={logo} alt="RIXAR" className="h-12" />
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-opacity-10 transition-colors rounded"
                style={{ color: '#8a8379' }}
                title="Collapse sidebar"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-opacity-10 transition-colors rounded"
              style={{ color: '#8a8379' }}
              title="Expand sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-8">
          <ul className={`space-y-2 ${sidebarOpen ? 'px-4' : 'px-2'}`}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-4 py-3 rounded transition-all ${sidebarOpen ? 'px-4' : 'px-0 justify-center'}`}
                    style={{
                      backgroundColor: active ? 'rgba(200,185,154,0.1)' : 'transparent',
                      color: active ? '#c8b99a' : '#8a8379',
                      borderLeft: sidebarOpen && active ? '2px solid #c8b99a' : '2px solid transparent'
                    }}
                    onMouseEnter={e => {
                      if (!active) e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.05)';
                    }}
                    onMouseLeave={e => {
                      if (!active) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                    title={!sidebarOpen ? item.label : ''}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarOpen && (
                      <span className="text-sm tracking-wide">{item.label}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className={`p-4 border-t ${sidebarOpen ? '' : 'px-2'}`} style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
          <button
            onClick={handleLogout}
            className={`flex items-center gap-4 py-3 rounded w-full transition-all ${sidebarOpen ? 'px-4' : 'px-0 justify-center'}`}
            style={{ color: '#8a8379' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.05)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            title={!sidebarOpen ? 'Deconectare' : ''}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && (
              <span className="text-sm tracking-wide">Deconectare</span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden lg:pt-0 pt-16">
        <Outlet />
      </div>
    </div>
  );
}
