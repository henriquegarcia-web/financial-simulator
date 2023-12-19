import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { LandingPage, NotFoundPage } from './pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* =============================================================== */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<Navigate to="/" />} />

        {/* =============================================================== */}

        <Route path="/admin" element={<LandingPage />} />

        {/* =============================================================== */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
