import { Camera, TrendingUp, Users, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router';

export default function Services() {
  const services = [
    {
      num: '01',
      icon: <Camera className="w-7 h-7" />,
      title: 'Professional Photography',
      desc: 'Professional photo and video sessions by architectural photographers. Images that attract the right buyers and highlight every detail.',
      details: 'Our team of specialized architectural photographers captures your property in its best light. We use state-of-the-art equipment and techniques including drone photography, HDR imaging, and twilight shoots to create stunning visual presentations that make your property stand out in the market.'
    },
    {
      num: '02',
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Free Promotion',
      desc: 'Advertising at no upfront cost on all major platforms, social networks and our client base. Pay only when the sale is complete.',
      details: 'We invest in promoting your property across multiple channels including premium real estate portals, social media advertising, email marketing to our exclusive client database, and targeted digital campaigns. You only pay our commission when we successfully sell your property.'
    },
    {
      num: '03',
      icon: <Users className="w-7 h-7" />,
      title: 'Exclusive Representation',
      desc: 'A dedicated consultant represents your interests in negotiations — whether buying, selling or renting. Optimal results, no compromises.',
      details: 'Your dedicated Rixar consultant becomes your advocate throughout the entire process. From initial valuation to final closing, they handle all negotiations, paperwork, and coordination to ensure you achieve the best possible outcome while maintaining complete discretion.'
    },
    {
      num: '04',
      icon: <HomeIcon className="w-7 h-7" />,
      title: 'Price Estimation',
      desc: 'Accurate valuation based on recent comparables and area trends. Find out the real value of your property — free and without obligation.',
      details: 'Our comprehensive market analysis takes into account recent sales of comparable properties, current market trends, location premium, property condition, and unique features. Receive a detailed valuation report with supporting data and strategic pricing recommendations.'
    }
  ];

  return (
    <div className="pt-16 md:pt-17">
      {/* Header */}
      <div className="px-6 md:px-8 lg:px-13 py-16 md:py-24 text-center">
        <div className="flex items-center justify-center gap-3 mb-6 text-xs tracking-[4px] uppercase" style={{ color: '#b8a88e' }}>
          <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
          What we offer
          <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
        </div>
        <h1 className="mb-6" style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 5.5vw, 68px)',
          fontWeight: 300,
          color: '#f2ece4',
          lineHeight: 1
        }}>
          <em>Premium</em> Services
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8a8379' }}>
          From initial valuation to contract signing — we accompany you every step of the way with our comprehensive suite of luxury real estate services.
        </p>
      </div>

      {/* Services Grid */}
      <div className="px-6 md:px-8 lg:px-13 pb-16 md:pb-24">
        <div className="space-y-px border" style={{
          backgroundColor: 'rgba(200,185,154,0.08)',
          borderColor: 'rgba(200,185,154,0.08)'
        }}>
          {services.map((service, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 p-6 md:p-12 lg:p-16" style={{ backgroundColor: '#0a0a09' }}>
              <div>
                <div className="flex items-center gap-4 md:gap-6 mb-6">
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(48px, 12vw, 72px)',
                    fontWeight: 300,
                    color: '#151412',
                    lineHeight: 1
                  }}>{service.num}</div>
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border flex items-center justify-center" style={{
                    borderColor: 'rgba(200,185,154,0.25)',
                    color: '#c8b99a'
                  }}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="mb-4" style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(24px, 5vw, 32px)',
                  fontWeight: 400,
                  color: '#f2ece4',
                  lineHeight: 1.2
                }}>{service.title}</h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#8a8379' }}>
                  {service.desc}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#8a8379' }}>
                  {service.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 lg:px-13 py-24 text-center border-t" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
        <h2 className="mb-6" style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(30px, 4vw, 52px)',
          fontWeight: 300,
          color: '#f2ece4'
        }}>
          Ready to get started?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#8a8379' }}>
          Contact our team today for a complimentary consultation and property valuation.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 border text-xs tracking-[2.5px] uppercase transition-all" style={{
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
          Schedule Consultation →
        </Link>
      </div>
    </div>
  );
}
