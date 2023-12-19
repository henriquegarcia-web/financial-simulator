import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { AdminPage, LandingPage, NotFoundPage } from './pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* =============================================================== */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<Navigate to="/" />} />

        {/* =============================================================== */}

        <Route path="/landing" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />

        {/* =============================================================== */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
