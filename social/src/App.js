import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';

import Navbar from './components/navBar/Navbar';
import Leftbar from './components/leftBar/Leftbar';
import Rightbar from './components/rightBar/Rightbar';

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login"></Navigate>;
    }

    return children;
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },

        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },

    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
