import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface LayoutProps {
    children: React.ReactNode;
    toggleTheme?: () => void;
    mode?: 'light' | 'dark';
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme, mode }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');  // Перенаправляем на страницу логина
    };

    const handleLogin = () => {
        navigate('/login');  // Перенаправляем на страницу логина
    };

    // Проверяем, есть ли токен в localStorage
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <Button component={Link} to="/parking-spots" color="inherit">
                            Парковка
                        </Button>
                        <Button component={Link} to="/reservations" color="inherit">
                            История
                        </Button>
                    </Typography>
                    {toggleTheme && (
                        <IconButton color="inherit" onClick={toggleTheme}>
                            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    )}
                    {/* Логика отображения кнопки */}
                    {isAuthenticated ? (
                        <Button color="inherit" onClick={handleLogout}>Выйти</Button>
                    ) : (
                        <Button color="inherit" onClick={handleLogin}>Войти</Button>
                    )}
                </Toolbar>
            </AppBar>
            <main style={{ padding: '1rem' }}>{children}</main>
        </>
    );
};

export default Layout;
