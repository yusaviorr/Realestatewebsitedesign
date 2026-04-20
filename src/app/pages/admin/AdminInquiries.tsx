import { useState } from 'react';
import { Search, Mail, Phone, MapPin, Calendar, CheckCircle2, Clock, ArrowLeft } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

export default function AdminInquiries() {
  const { inquiries, updateInquiry } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState<number | null>(null);

  // Filter inquiries
  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || inquiry.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const selectedInq = filteredInquiries.find(inq => inq.id === selectedInquiry);

  const handleMarkAsReplied = (id: number) => {
    updateInquiry(id, { status: 'Replied' });
  };

  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="border-b px-4 md:px-8 py-4 md:py-6" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(24px, 5vw, 32px)',
          fontWeight: 300,
          color: '#f2ece4'
        }}>Inquiries</h1>
        <p className="text-sm mt-1" style={{ color: '#8a8379' }}>
          Manage client inquiries and messages
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[calc(100vh-140px)]">
        {/* Inquiries List */}
        <div className="lg:col-span-1 border-r overflow-auto" style={{
          borderColor: 'rgba(200,185,154,0.12)'
        }}>
          {/* Search and Filter */}
          <div className="p-4 border-b space-y-4" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#8a8379' }} />
              <input
                type="text"
                placeholder="Search inquiries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border text-sm transition-colors focus:outline-none"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(200,185,154,0.12)',
                  color: '#d4cdc4'
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.4)'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(200,185,154,0.12)'}
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 border text-sm transition-colors focus:outline-none"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'rgba(200,185,154,0.12)',
                color: '#d4cdc4'
              }}
            >
              <option value="all">All Inquiries</option>
              <option value="new">New</option>
              <option value="replied">Replied</option>
            </select>
          </div>

          {/* Inquiry Items */}
          <div>
            {filteredInquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                onClick={() => setSelectedInquiry(inquiry.id)}
                className="px-4 py-4 border-b cursor-pointer transition-colors"
                style={{
                  borderColor: 'rgba(200,185,154,0.08)',
                  backgroundColor: selectedInquiry === inquiry.id ? 'rgba(200,185,154,0.08)' : 'transparent'
                }}
                onMouseEnter={e => {
                  if (selectedInquiry !== inquiry.id) {
                    e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.04)';
                  }
                }}
                onMouseLeave={e => {
                  if (selectedInquiry !== inquiry.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <p style={{ color: '#f2ece4', fontSize: '14px', fontWeight: 500 }}>{inquiry.name}</p>
                  <span className="px-2 py-1 text-xs rounded flex-shrink-0 ml-2" style={{
                    backgroundColor: inquiry.status === 'New' ? 'rgba(200,185,154,0.15)' : 'rgba(74,222,128,0.1)',
                    color: inquiry.status === 'New' ? '#c8b99a' : '#4ade80'
                  }}>
                    {inquiry.status}
                  </span>
                </div>
                <p className="text-xs mb-2 line-clamp-1" style={{ color: '#8a8379' }}>{inquiry.property}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs line-clamp-1 flex-1" style={{ color: '#5a574f' }}>
                    {inquiry.message}
                  </p>
                  <span className="text-xs flex-shrink-0 ml-2" style={{ color: '#5a574f' }}>
                    {inquiry.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry Detail */}
        <div className={`lg:col-span-2 overflow-auto ${selectedInq ? 'block' : 'hidden lg:block'}`}>
          {selectedInq ? (
            <div className="p-4 md:p-8">
              {/* Mobile Back Button */}
              <button
                onClick={() => setSelectedInquiry(null)}
                className="lg:hidden mb-4 flex items-center gap-2 text-xs tracking-wide uppercase"
                style={{ color: '#8a8379' }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to List
              </button>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 md:mb-8">
                <div>
                  <h2 className="mb-2" style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(20px, 4vw, 28px)',
                    fontWeight: 400,
                    color: '#f2ece4'
                  }}>{selectedInq.name}</h2>
                  <span className="px-3 py-1 text-xs rounded" style={{
                    backgroundColor: selectedInq.status === 'New' ? 'rgba(200,185,154,0.15)' : 'rgba(74,222,128,0.1)',
                    color: selectedInq.status === 'New' ? '#c8b99a' : '#4ade80'
                  }}>
                    {selectedInq.status}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  {selectedInq.status === 'New' && (
                    <button
                      onClick={() => handleMarkAsReplied(selectedInq.id)}
                      className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 border text-xs tracking-[2px] uppercase transition-all"
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
                      Mark as Replied
                    </button>
                  )}
                  <a
                    href={`mailto:${selectedInq.email}?subject=Re: ${selectedInq.property}&body=Hi ${selectedInq.name},%0D%0A%0D%0AThank you for your inquiry about ${selectedInq.property}.%0D%0A%0D%0A`}
                    className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 border text-xs tracking-[2px] uppercase transition-all inline-block text-center"
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(200,185,154,0.25)',
                      color: '#f2ece4',
                      textDecoration: 'none'
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
                    Reply via Email
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 p-4 md:p-6 border" style={{
                backgroundColor: '#0a0a09',
                borderColor: 'rgba(200,185,154,0.12)'
              }}>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#c8b99a' }} />
                  <div>
                    <p className="text-xs mb-1" style={{ color: '#5a574f' }}>Email</p>
                    <p className="text-sm" style={{ color: '#f2ece4' }}>{selectedInq.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#c8b99a' }} />
                  <div>
                    <p className="text-xs mb-1" style={{ color: '#5a574f' }}>Phone</p>
                    <p className="text-sm" style={{ color: '#f2ece4' }}>{selectedInq.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: '#c8b99a' }} />
                  <div>
                    <p className="text-xs mb-1" style={{ color: '#5a574f' }}>Property</p>
                    <p className="text-sm" style={{ color: '#f2ece4' }}>{selectedInq.property}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 flex-shrink-0" style={{ color: '#c8b99a' }} />
                  <div>
                    <p className="text-xs mb-1" style={{ color: '#5a574f' }}>Received</p>
                    <p className="text-sm" style={{ color: '#f2ece4' }}>{selectedInq.date}</p>
                  </div>
                </div>
              </div>

              {/* Interest */}
              <div className="mb-8">
                <p className="text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  Interest
                </p>
                <p className="text-sm" style={{ color: '#f2ece4' }}>{selectedInq.interest}</p>
              </div>

              {/* Message */}
              <div>
                <p className="text-xs tracking-[2px] uppercase mb-4" style={{ color: '#5a574f' }}>
                  Message
                </p>
                <div className="p-6 border" style={{
                  backgroundColor: '#0a0a09',
                  borderColor: 'rgba(200,185,154,0.12)'
                }}>
                  <p className="text-sm leading-relaxed" style={{ color: '#d4cdc4' }}>
                    {selectedInq.message}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-sm" style={{ color: '#8a8379' }}>
                Select an inquiry to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
