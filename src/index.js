import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from './components/routes'
import { PageLayout } from './components/pages/pages.styled';

const router = createBrowserRouter(routes);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageLayout>
      <Header />
      <RouterProvider router={router} />
    </PageLayout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
