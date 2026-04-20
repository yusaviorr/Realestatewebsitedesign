import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Admin imports
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProperties from './pages/admin/AdminProperties';
import AdminInquiries from './pages/admin/AdminInquiries';
import AdminSettings from './pages/admin/AdminSettings';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'properties', Component: Properties },
      { path: 'properties/:id', Component: PropertyDetail },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound }
    ]
  },
  {
    path: '/admin/login',
    Component: AdminLogin
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { path: 'dashboard', Component: AdminDashboard },
      { path: 'properties', Component: AdminProperties },
      { path: 'inquiries', Component: AdminInquiries },
      { path: 'settings', Component: AdminSettings }
    ]
  }
]);
