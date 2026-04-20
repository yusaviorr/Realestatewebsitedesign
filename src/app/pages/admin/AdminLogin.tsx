import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Home, Lock, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = await login(email, password);
    if (success) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8" style={{
      backgroundColor: '#050504',
      color: '#d4cdc4'
    }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border mb-6" style={{
            borderColor: 'rgba(200,185,154,0.25)',
            color: '#c8b99a'
          }}>
            <Home className="w-8 h-8" />
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '32px',
            fontWeight: 300,
            color: '#f2ece4',
            letterSpacing: '2.5px'
          }}>RIXAR ADMIN</h1>
          <p className="text-sm mt-2" style={{ color: '#8a8379' }}>Management Portal</p>
        </div>

        {/* Login Form */}
        <div className="border p-10" style={{
          backgroundColor: '#0a0a09',
          borderColor: 'rgba(200,185,154,0.12)'
        }}>
          <h2 className="mb-8" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '24px',
            fontWeight: 400,
            color: '#f2ece4'
          }}>Sign In</h2>

          {error && (
            <div className="mb-6 p-4 border" style={{
              backgroundColor: 'rgba(239,68,68,0.1)',
              borderColor: 'rgba(239,68,68,0.3)',
              color: '#ef4444'
            }}>
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-4 h-4" style={{ color: '#8a8379' }} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@rixar.com"
                  required
                  className="w-full pl-12 pr-4 py-3 border text-sm transition-colors focus:outline-none"
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

            <div>
              <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4" style={{ color: '#8a8379' }} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-4 py-3 border text-sm transition-colors focus:outline-none"
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

            <button
              type="submit"
              className="w-full px-10 py-4 border text-xs tracking-[2.5px] uppercase transition-all"
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
              Sign In →
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs" style={{ color: '#5a574f' }}>
              Demo credentials: any email/password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
