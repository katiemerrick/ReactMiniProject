import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App';
// import Error from './pages/Error';
// import Home from './pages/Home';
import DictionarySelector from './components/DictionarySelector';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <DictionarySelector />,
      },
      // {
      //   path: '/GeneralBiology',
      //   element: <GeneralBiology />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
