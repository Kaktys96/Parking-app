// src/App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ParkingSpotTable from './components/ParkingSpotTable';
import ReservationHistory from './components/ReservationHistory';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

interface AppProps {
    toggleTheme: () => void;
    mode: 'light' | 'dark';
}

const App: React.FC<AppProps> = ({ toggleTheme, mode }) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/parking-spots" />} />
            <Route path="/parking-spots" element={<ParkingSpotTable />} />
            <Route path="/reservations" element={<ReservationHistory />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            {/* Передадим toggleTheme через props если нужно в других компонентах */}
        </Routes>
    );
};

export default App;
