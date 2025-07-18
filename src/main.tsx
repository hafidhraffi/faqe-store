import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";
import { PrimeReactProvider } from "primereact/api";
import Layout from './layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import UnderDevPage from './pages/UnderDevPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "products", element: <ProductsPage /> },
    ],
  },
  {
    path: "/*",
    element: <UnderDevPage />,
  }
]);

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </QueryClientProvider>
  </StrictMode>,
)
