import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Navbar from './components/navBar/Navbar';
import Leftbar from './components/leftBar/Leftbar';
import Rightbar from './components/rightBar/Rightbar';

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}></div>
        <Outlet />
        <Leftbar />
        <Rightbar />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
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
