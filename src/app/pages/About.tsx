import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  const testimonials = [
    {
      stars: 5,
      text: 'The Rixar team helped us find the perfect home in less than two months. Impeccable professionalism and attention to every detail. We couldn\'t be happier.',
      name: 'Sarah Mitchell',
      role: 'Loyal Client · 2025',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
    },
    {
      stars: 5,
      text: 'I sold my apartment 15% above market price thanks to their strategy. I recommend with complete confidence anyone who wants exceptional results.',
      name: 'Michael Roberts',
      role: 'Seller · 2025',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'
    },
    {
      stars: 5,
      text: 'Total discretion, impeccable communication and a network of properties you won\'t find elsewhere. Rixar truly means luxury real estate.',
      name: 'David Anderson',
      role: 'Investor · 2025',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
    }
  ];

  const values = [
    {
      icon: '◈',
      title: 'Discretion',
      desc: 'Absolute confidentiality in all transactions and client relationships.'
    },
    {
      icon: '◇',
      title: 'Expertise',
      desc: '15+ years of deep knowledge of the premium real estate market.'
    },
    {
      icon: '◉',
      title: 'Dedication',
      desc: 'Personalized attention and commitment to every client.'
    },
    {
      icon: '◎',
      title: 'Results',
      desc: '98% of our clients recommend us and return for future transactions.'
    }
  ];

  return (
    <div className="pt-16 md:pt-17">
      {/* Header */}
      <div className="px-6 md:px-8 lg:px-13 py-16 md:py-24 text-center">
        <div className="flex items-center justify-center gap-3 mb-6 text-xs tracking-[4px] uppercase" style={{ color: '#b8a88e' }}>
          <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
          Who we are
          <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
        </div>
        <h1 className="mb-6" style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 5.5vw, 68px)',
          fontWeight: 300,
          color: '#f2ece4',
          lineHeight: 1
        }}>
          About <em>Rixar</em>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8a8379' }}>
          15 years of excellence in premium real estate
        </p>
      </div>

      {/* Story Section */}
      <div className="px-6 md:px-8 lg:px-13 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
              alt="Luxury Building"
              className="w-full h-[400px] md:h-[560px] object-cover"
            />
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 border px-4 md:px-6 py-4 md:py-5" style={{
              backgroundColor: '#0a0a09',
              borderColor: 'rgba(200,185,154,0.25)'
            }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(32px, 8vw, 46px)',
                fontWeight: 300,
                color: '#f2ece4',
                lineHeight: 1
              }}>15</div>
              <div className="text-xs tracking-[2px] uppercase mt-1" style={{ color: '#5a574f' }}>Years of Excellence</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 text-xs tracking-[4px] uppercase" style={{ color: '#b8a88e' }}>
              <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
              Our Story
            </div>
            <h2 className="mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(30px, 3.5vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#f2ece4'
            }}>
              Building <em>relationships,</em><br />not just transactions
            </h2>
            <div className="space-y-6 text-base leading-relaxed" style={{ color: '#8a8379' }}>
              <p>
                Rixar was founded in 2010 with a clear vision: to redefine the real estate experience by combining international standards with local market sensitivity.
              </p>
              <p>
                Over 15 years, we have built a solid reputation on the pillars of discretion, professionalism, and remarkable results for each individual client. Our approach goes beyond simple transactions — we create lasting relationships built on trust and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="px-6 md:px-8 lg:px-13 py-16 md:py-24 border-y" style={{
        backgroundColor: '#0c0c0b',
        borderColor: 'rgba(200,185,154,0.12)'
      }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(30px, 3.5vw, 52px)',
              fontWeight: 300,
              color: '#f2ece4'
            }}>
              Our <em>Values</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="border p-6 md:p-8" style={{
                backgroundColor: '#0a0a09',
                borderColor: 'rgba(200,185,154,0.12)'
              }}>
                <div className="text-2xl md:text-3xl mb-4" style={{ color: '#c8b99a' }}>{value.icon}</div>
                <h3 className="mb-3" style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(20px, 4vw, 24px)',
                  fontWeight: 400,
                  color: '#f2ece4'
                }}>{value.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8a8379' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b grid grid-cols-2 lg:grid-cols-4" style={{
        backgroundColor: '#0c0c0b',
        borderColor: 'rgba(200,185,154,0.12)'
      }}>
        {[
          { num: '15+', label: 'Years of Experience' },
          { num: '860', label: 'Properties Sold' },
          { num: '98%', label: 'Satisfied Clients' },
          { num: '12', label: 'Expert Consultants' }
        ].map((stat, idx) => (
          <div key={idx} className="px-8 lg:px-12 py-13 border-r last:border-r-0" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '52px',
              fontWeight: 300,
              color: '#f2ece4',
              lineHeight: 1,
              marginBottom: '8px'
            }}>{stat.num}</div>
            <div className="text-xs tracking-[2px] uppercase" style={{ color: '#8a8379' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="px-6 md:px-8 lg:px-13 py-16 md:py-24">
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4 text-xs tracking-[4px] uppercase" style={{ color: '#b8a88e' }}>
            <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
            Testimonials
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(30px, 3.5vw, 52px)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#f2ece4'
          }}>
            What <em>our clients</em> say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border max-w-7xl mx-auto" style={{
          backgroundColor: 'rgba(200,185,154,0.08)',
          borderColor: 'rgba(200,185,154,0.08)'
        }}>
          {testimonials.map((test, idx) => (
            <div key={idx} className="px-6 md:px-9 py-8 md:py-10" style={{ backgroundColor: '#0a0a09' }}>
              <div className="text-xs tracking-[3px] mb-4" style={{ color: '#c8b99a' }}>★★★★★</div>
              <p className="text-sm leading-relaxed mb-7" style={{ color: '#8a8379' }}>{test.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cover bg-center flex-shrink-0 border" style={{
                  backgroundImage: `url(${test.avatar})`,
                  borderColor: 'rgba(200,185,154,0.15)'
                }}></div>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', color: '#f2ece4' }}>{test.name}</div>
                  <div className="text-xs tracking-wide" style={{ color: '#5a574f' }}>{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
