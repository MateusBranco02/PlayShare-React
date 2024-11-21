import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import MusicasCurtidas from './pages/MusicasCurtidas.jsx';
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/cadastro', element: <Cadastro /> },
  { path: '/home', element: <Home /> },
  { path: '/musicasCurtidas', element: <MusicasCurtidas /> }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
