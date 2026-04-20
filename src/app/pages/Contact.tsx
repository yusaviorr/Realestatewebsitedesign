import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useData } from '../contexts/DataContext';

export default function Contact() {
  const { addInquiry } = useData();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const interestMap: { [key: string]: string } = {
      buy: 'Buying a property',
      sell: 'Selling a property',
      rent: 'Renting a property',
      valuation: 'Property valuation',
      other: 'Other inquiry'
    };

    addInquiry({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      property: 'General Inquiry',
      propertyId: null,
      interest: interestMap[formData.interest] || formData.interest,
      message: formData.message,
      status: 'New'
    });

    setSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-16 md:pt-17">
      {/* Header */}
      <div className="px-6 md:px-8 lg:px-13 py-16 md:py-24 text-center">
        <div className="flex items-center justify-center gap-3 mb-6 text-xs tracking-[4px] uppercase" style={{ color: '#b8a88e' }}>
          <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
          Get in touch
          <div className="w-6 h-px" style={{ backgroundColor: '#b8a88e' }}></div>
        </div>
        <h1 className="mb-6" style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 5.5vw, 68px)',
          fontWeight: 300,
          color: '#f2ece4',
          lineHeight: 1
        }}>
          Begin Your <em>Journey</em>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8a8379' }}>
          Connect with our team of specialists to discover your perfect property
        </p>
      </div>

      {/* Contact Grid */}
      <div className="px-6 md:px-8 lg:px-13 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full border flex items-center justify-center" style={{
                  borderColor: 'rgba(200,185,154,0.25)',
                  color: '#c8b99a'
                }}>
                  <Phone className="w-5 h-5" />
                </div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#f2ece4'
                }}>Phone</h3>
              </div>
              <div className="space-y-2 text-base" style={{ color: '#8a8379' }}>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 123-4568</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full border flex items-center justify-center" style={{
                  borderColor: 'rgba(200,185,154,0.25)',
                  color: '#c8b99a'
                }}>
                  <Mail className="w-5 h-5" />
                </div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#f2ece4'
                }}>Email</h3>
              </div>
              <div className="space-y-2 text-base" style={{ color: '#8a8379' }}>
                <p>info@rixar.com</p>
                <p>sales@rixar.com</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full border flex items-center justify-center" style={{
                  borderColor: 'rgba(200,185,154,0.25)',
                  color: '#c8b99a'
                }}>
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#f2ece4'
                }}>Address</h3>
              </div>
              <div className="text-base leading-relaxed" style={{ color: '#8a8379' }}>
                <p>123 Luxury Avenue</p>
                <p>Suite 500</p>
                <p>Beverly Hills, CA 90210</p>
              </div>
            </div>

            <div>
              <h3 className="mb-4" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Office Hours</h3>
              <div className="space-y-2 text-sm" style={{ color: '#8a8379' }}>
                <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday: 10:00 AM – 4:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="border p-12" style={{
              backgroundColor: '#0a0a09',
              borderColor: 'rgba(200,185,154,0.12)'
            }}>
              <h2 className="mb-8" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '32px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Send us a message</h2>

              {submitted && (
                <div className="mb-6 p-4 border" style={{
                  backgroundColor: 'rgba(74,222,128,0.1)',
                  borderColor: 'rgba(74,222,128,0.3)',
                  color: '#4ade80'
                }}>
                  <p className="text-sm">Thank you for your inquiry! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
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
                    <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
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
                    <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
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
                    <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      required
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

                <div>
                  <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>Interest</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border text-sm transition-colors focus:outline-none"
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(200,185,154,0.12)',
                      color: '#d4cdc4'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                  >
                    <option value="">Select your interest</option>
                    <option value="buy">Buying a property</option>
                    <option value="sell">Selling a property</option>
                    <option value="rent">Renting a property</option>
                    <option value="valuation">Property valuation</option>
                    <option value="other">Other inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your requirements..."
                    required
                    className="w-full px-4 py-3 border text-sm transition-colors resize-none focus:outline-none"
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(200,185,154,0.12)',
                      color: '#d4cdc4'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
                  />
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
                  Submit Inquiry →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
