import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
// import Error from './components/Error'; 
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <About />,
      },
      ,
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
