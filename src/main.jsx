import React from 'react'

import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './pages/App'
import './index.css'

import Cadastro from './routes/Cadastro/Cadastro';
import Localizacao from './routes/Localizacao/Localizacao';
import Produtos from './routes/Produtos/Produtos';
import Servicos from './routes/Servicos/Servicos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      // { path: "/", element: <App /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "localizacao", element: <Localizacao /> },
      { path: "produtos", element: <Produtos /> },
      { path: "servicos", element: <Servicos /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
