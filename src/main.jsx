import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./assets/index.css";
import "./assets/style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from "./pages/Home";
import ListaFarmacias from "./pages/ListaFarmacias";
import CadastroFarmacia from "./pages/CadastroFarmacia";
import CadastroMedicamentos from "./pages/CadastroMedicamentos";
import ListaMedicamentos from "./pages/ListaMedicamentos";
import PaginaErro from "./pages/PaginaErro";
import CadastroConta from "./pages/CadastroConta";
import RecuperarSenha from "./pages/RecuperarSenha";

import { AppProvider } from "./contexts/AppProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ListaFarmacias",
        element: <ListaFarmacias />,
      },
      {
        path: "/CadastroFarmacia",
        element: <CadastroFarmacia />,
      },
      {
        path: "/CadastroMedicamentos",
        element: <CadastroMedicamentos />,
      },
      {
        path: "/ListaMedicamentos",
        element: <ListaMedicamentos />,
      },
      {
        path: "/CadastroConta",
        element: <CadastroConta />,
      },
      {
        path: "/RecuperarSenha",
        element: <RecuperarSenha />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AppProvider>
  </React.StrictMode>
);
