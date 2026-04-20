import { TrendingUp, Building2, MessageSquare, Eye, DollarSign, Users } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

export default function AdminDashboard() {
  const { properties, inquiries, getStats } = useData();
  const stats = getStats();

  const statsDisplay = [
    {
      icon: Building2,
      label: 'Total Properties',
      value: stats.totalProperties.toString(),
      change: `${stats.activeProperties} active`,
      trend: 'up'
    },
    {
      icon: Eye,
      label: 'Page Views',
      value: stats.totalViews.toLocaleString(),
      change: 'Total across all properties',
      trend: 'up'
    },
    {
      icon: MessageSquare,
      label: 'Total Inquiries',
      value: stats.totalInquiries.toString(),
      change: `${stats.newInquiries} unread`,
      trend: 'up'
    },
    {
      icon: Users,
      label: 'Active Listings',
      value: stats.activeProperties.toString(),
      change: 'Currently available',
      trend: 'up'
    }
  ];

  // Top performing properties (sorted by views)
  const topProperties = [...properties]
    .sort((a, b) => b.views - a.views)
    .slice(0, 4);

  // Recent inquiries (sorted by date)
  const recentInquiries = [...inquiries]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4);

  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="border-b px-4 md:px-8 py-4 md:py-6" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(24px, 5vw, 32px)',
          fontWeight: 300,
          color: '#f2ece4'
        }}>Dashboard</h1>
        <p className="text-sm mt-1" style={{ color: '#8a8379' }}>
          Welcome back, Administrator
        </p>
      </div>

      <div className="p-4 md:p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {statsDisplay.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="border p-6" style={{
                backgroundColor: '#0a0a09',
                borderColor: 'rgba(200,185,154,0.12)'
              }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center" style={{
                    borderColor: 'rgba(200,185,154,0.25)',
                    color: '#c8b99a'
                  }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <TrendingUp className="w-4 h-4" style={{ color: '#4ade80' }} />
                </div>
                <p className="text-xs tracking-[2px] uppercase mb-2" style={{ color: '#5a574f' }}>
                  {stat.label}
                </p>
                <p className="mb-1" style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '32px',
                  fontWeight: 300,
                  color: '#f2ece4',
                  lineHeight: 1
                }}>{stat.value}</p>
                <p className="text-xs" style={{ color: '#8a8379' }}>{stat.change}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Recent Properties */}
          <div className="border" style={{
            backgroundColor: '#0a0a09',
            borderColor: 'rgba(200,185,154,0.12)'
          }}>
            <div className="px-6 py-5 border-b" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Top Performing Properties</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topProperties.map((prop) => (
                  <div key={prop.id} className="flex items-center justify-between py-4 border-b last:border-b-0" style={{
                    borderColor: 'rgba(200,185,154,0.08)'
                  }}>
                    <div className="flex-1">
                      <p className="mb-1" style={{ color: '#f2ece4', fontSize: '14px' }}>{prop.title}</p>
                      <div className="flex items-center gap-4 text-xs" style={{ color: '#8a8379' }}>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {prop.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {prop.inquiries} inquiries
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs rounded" style={{
                      backgroundColor: prop.status === 'Active' ? 'rgba(74,222,128,0.1)' : 'rgba(250,204,21,0.1)',
                      color: prop.status === 'Active' ? '#4ade80' : '#facc15'
                    }}>
                      {prop.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Inquiries */}
          <div className="border" style={{
            backgroundColor: '#0a0a09',
            borderColor: 'rgba(200,185,154,0.12)'
          }}>
            <div className="px-6 py-5 border-b" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#f2ece4'
              }}>Recent Inquiries</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentInquiries.map((inquiry) => (
                  <div key={inquiry.id} className="py-4 border-b last:border-b-0" style={{
                    borderColor: 'rgba(200,185,154,0.08)'
                  }}>
                    <div className="flex items-start justify-between mb-2">
                      <p style={{ color: '#f2ece4', fontSize: '14px' }}>{inquiry.name}</p>
                      <span className="px-2 py-1 text-xs rounded" style={{
                        backgroundColor: inquiry.status === 'New' ? 'rgba(200,185,154,0.15)' : 'rgba(74,222,128,0.1)',
                        color: inquiry.status === 'New' ? '#c8b99a' : '#4ade80'
                      }}>
                        {inquiry.status}
                      </span>
                    </div>
                    <p className="text-xs mb-1" style={{ color: '#8a8379' }}>{inquiry.property}</p>
                    <p className="text-xs" style={{ color: '#5a574f' }}>{inquiry.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
