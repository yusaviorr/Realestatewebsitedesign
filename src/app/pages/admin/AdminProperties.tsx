import { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye, MessageSquare } from 'lucide-react';
import { useData } from '../../contexts/DataContext';
import PropertyForm from '../../components/PropertyForm';

export default function AdminProperties() {
  const { properties, addProperty, updateProperty, deleteProperty } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProperty, setEditingProperty] = useState<number | null>(null);

  // Filter properties
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || property.status.toLowerCase() === filterStatus;
    const matchesType = filterType === 'all' || property.type.toLowerCase() === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="border-b px-4 md:px-8 py-4 md:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{
        borderColor: 'rgba(200,185,154,0.12)'
      }}>
        <div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(24px, 5vw, 32px)',
            fontWeight: 300,
            color: '#f2ece4'
          }}>Properties</h1>
          <p className="text-sm mt-1" style={{ color: '#8a8379' }}>
            Manage your property listings
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 border text-xs tracking-[2px] uppercase transition-all"
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
          <Plus className="w-4 h-4" />
          Add Property
        </button>
      </div>

      <div className="p-4 md:p-8">
        {/* Filters */}
        <div className="mb-6 md:mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="sm:col-span-2 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#8a8379' }} />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 border text-sm transition-colors focus:outline-none"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'rgba(200,185,154,0.12)',
              color: '#d4cdc4'
            }}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="sold">Sold</option>
          </select>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-3 border text-sm transition-colors focus:outline-none"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'rgba(200,185,154,0.12)',
              color: '#d4cdc4'
            }}
          >
            <option value="all">All Types</option>
            <option value="villa">Villa</option>
            <option value="apartment">Apartment</option>
            <option value="estate">Estate</option>
            <option value="land">Land</option>
          </select>
        </div>

        {/* Properties Table - Desktop */}
        <div className="hidden md:block border overflow-hidden" style={{
          backgroundColor: '#0a0a09',
          borderColor: 'rgba(200,185,154,0.12)'
        }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b" style={{ borderColor: 'rgba(200,185,154,0.12)' }}>
                <tr>
                  <th className="text-left px-6 py-4 text-xs tracking-[2px] uppercase" style={{ color: '#5a574f' }}>
                    Property
                  </th>
                  <th className="text-left px-6 py-4 text-xs tracking-[2px] uppercase" style={{ color: '#5a574f' }}>
                    Location
                  </th>
                  <th className="text-left px-6 py-4 text-xs tracking-[2px] uppercase" style={{ color: '#5a574f' }}>
                    Price
                  </th>
                  <th className="text-left px-6 py-4 text-xs tracking-[2px] uppercase" style={{ color: '#5a574f' }}>
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-xs tracking-[2px] uppercase" style={{ color: '#5a574f' }}>
                    Performance
                  </th>
                  <th className="text-right px-6 py-4 text-xs tracking-[2px] uppercase" style={{ color: '#5a574f' }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProperties.map((property) => (
                  <tr key={property.id} className="border-b last:border-b-0" style={{
                    borderColor: 'rgba(200,185,154,0.08)'
                  }}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p style={{ color: '#f2ece4', fontSize: '14px' }}>{property.title}</p>
                          <p className="text-xs mt-1" style={{ color: '#8a8379' }}>{property.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm" style={{ color: '#8a8379' }}>{property.location}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '18px',
                        color: '#f2ece4'
                      }}>{property.priceDisplay}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs rounded" style={{
                        backgroundColor: property.status === 'Active' ? 'rgba(74,222,128,0.1)' :
                                       property.status === 'Pending' ? 'rgba(250,204,21,0.1)' : 'rgba(239,68,68,0.1)',
                        color: property.status === 'Active' ? '#4ade80' :
                               property.status === 'Pending' ? '#facc15' : '#ef4444'
                      }}>
                        {property.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4 text-xs" style={{ color: '#8a8379' }}>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {property.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {property.inquiries}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setEditingProperty(property.id)}
                          className="p-2 rounded transition-colors"
                          style={{ color: '#8a8379' }}
                          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(200,185,154,0.1)'}
                          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete "${property.title}"?`)) {
                              deleteProperty(property.id);
                            }
                          }}
                          className="p-2 rounded transition-colors"
                          style={{ color: '#8a8379' }}
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.1)';
                            e.currentTarget.style.color = '#ef4444';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#8a8379';
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Properties Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {filteredProperties.map((property) => (
            <div key={property.id} className="border p-4" style={{
              backgroundColor: '#0a0a09',
              borderColor: 'rgba(200,185,154,0.12)'
            }}>
              <div className="flex gap-4 mb-4">
                <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                  <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="mb-1 truncate" style={{ color: '#f2ece4', fontSize: '14px', fontWeight: 500 }}>{property.title}</p>
                  <p className="text-xs mb-2" style={{ color: '#8a8379' }}>{property.type} · {property.location}</p>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '18px',
                    color: '#f2ece4'
                  }}>{property.priceDisplay}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 pb-4 border-b" style={{ borderColor: 'rgba(200,185,154,0.08)' }}>
                <span className="px-3 py-1 text-xs rounded" style={{
                  backgroundColor: property.status === 'Active' ? 'rgba(74,222,128,0.1)' :
                                 property.status === 'Pending' ? 'rgba(250,204,21,0.1)' : 'rgba(239,68,68,0.1)',
                  color: property.status === 'Active' ? '#4ade80' :
                         property.status === 'Pending' ? '#facc15' : '#ef4444'
                }}>
                  {property.status}
                </span>
                <div className="flex items-center gap-4 text-xs" style={{ color: '#8a8379' }}>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {property.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    {property.inquiries}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setEditingProperty(property.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border text-xs tracking-wide uppercase transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(200,185,154,0.25)',
                    color: '#f2ece4'
                  }}
                >
                  <Edit className="w-3 h-3" />
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Are you sure you want to delete "${property.title}"?`)) {
                      deleteProperty(property.id);
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border text-xs tracking-wide uppercase transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(239,68,68,0.3)',
                    color: '#ef4444'
                  }}
                >
                  <Trash2 className="w-3 h-3" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit Property Modal */}
      {showAddModal && (
        <PropertyForm
          onSave={(propertyData) => {
            addProperty(propertyData);
            setShowAddModal(false);
          }}
          onCancel={() => setShowAddModal(false)}
        />
      )}

      {editingProperty !== null && (
        <PropertyForm
          property={properties.find(p => p.id === editingProperty)}
          onSave={(propertyData) => {
            updateProperty(editingProperty, propertyData);
            setEditingProperty(null);
          }}
          onCancel={() => setEditingProperty(null)}
        />
      )}
    </div>
  );
}
