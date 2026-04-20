import { RouterProvider } from 'react-router';
import { router } from './routes';
import { DataProvider } from './contexts/DataContext';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </AuthProvider>
  );
}
