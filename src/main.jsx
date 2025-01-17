import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import GeneralBiology from './pages/GeneralBiology';
import GeneralChemistry from './pages/GeneralChemistry';
import MedicalTerms from './pages/MedicalTerms';
import GeneralGeology from './pages/GeneralGeology';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/GeneralBiology',
        element: <GeneralBiology />,
      },
      {
        path: '/GeneralChemistry',
        element: <GeneralChemistry />,
      },
      {
        path: '/GeneralGeology',
        element: <GeneralGeology />,
      },
      {
        path: '/MedicalTerms',
        element: <MedicalTerms/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
