import { Navigate, Routes, Route } from 'react-router';
import { publicRoutes } from '../../router';
import { MAIN_ROUTE } from '../../router';

// import { useEffect, useState } from 'react';

function AppRouter() {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  )
}

export default AppRouter;
