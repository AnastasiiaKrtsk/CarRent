import React, { Fragment, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavouritesPage from 'pages/FavouritesPage/FavouritesPage';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Fragment>
      <Layout />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};
