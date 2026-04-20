import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-17 min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border mb-6" style={{
            borderColor: 'rgba(200,185,154,0.25)',
            color: '#c8b99a'
          }}>
            <Home className="w-10 h-10" />
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(64px, 10vw, 120px)',
            fontWeight: 300,
            color: '#f2ece4',
            lineHeight: 1,
            marginBottom: '24px'
          }}>404</h1>
          <h2 className="mb-6" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 300,
            color: '#f2ece4'
          }}>
            Page Not <em>Found</em>
          </h2>
          <p className="text-lg mb-12 max-w-md mx-auto" style={{ color: '#8a8379' }}>
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 border text-xs tracking-[2.5px] uppercase transition-all"
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
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            to="/properties"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 border text-xs tracking-[2.5px] uppercase transition-all"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'rgba(200,185,154,0.25)',
              color: '#f2ece4'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.1)';
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(200,185,154,0.25)';
            }}
          >
            Browse Properties
          </Link>
        </div>
      </div>
    </div>
  );
}
