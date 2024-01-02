import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './ErrorPage';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';

// router
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    errorElement: <ErrorPage />
  },
  {
    path:'/contact',
    element:<Contact />,
    errorElement:<ErrorPage />
  },
  {
    path:'/services',
    element:<Services />,
    errorElement:<ErrorPage />
  },
  {
    path:'/about',
    element:<About />,
    errorElement:<ErrorPage />
  }
])

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
