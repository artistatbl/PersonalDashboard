import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Bookmarks from './bookmarks/Bookmarks';
import Todos from './todos/Todos';
import Notes from './notes/Notes';
import ErrorPage from './error-page'
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'bookmarks',
        element: <Bookmarks />
      },
      {
        path: 'Todos',
        element: <Todos />
      },
      {
        path: 'notes',
        element: <Notes />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>


);

reportWebVitals();
