import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { AdminPage, AdminSigninPage, NotFoundPage } from './pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* =============================================================== */}

        <Route path="/" element={<AdminSigninPage />} />
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}

        {/* =============================================================== */}

        <Route path="/admin/entrar" element={<AdminSigninPage />} />
        <Route path="/admin" element={<AdminPage />} />

        {/* =============================================================== */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
