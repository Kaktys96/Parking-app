// theme.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2', // основной цвет
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(135deg, #42a5f5, #478ed1)',
                    color: '#fff',
                    transition: '0.5s',
                    backgroundSize: '200% auto',
                    boxShadow: '0 0 10px rgba(66, 165, 245, 0.5)',
                    ':hover': {
                        backgroundPosition: 'right center',
                        boxShadow: '0 0 20px rgba(66, 165, 245, 0.8)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root': {
                        background: 'linear-gradient(135deg, #42a5f5, #478ed1)',
                        color: '#fff',
                        borderRadius: 4,
                        transition: '0.5s',
                        boxShadow: '0 0 10px rgba(66, 165, 245, 0.5)',
                    },
                    '& .MuiInputBase-root:hover': {
                        boxShadow: '0 0 20px rgba(66, 165, 245, 0.8)',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(135deg, #42a5f5, #478ed1)',
                    color: '#fff',
                    borderRadius: 4,
                    boxShadow: '0 0 10px rgba(66, 165, 245, 0.5)',
                    transition: '0.5s',
                    '&:hover': {
                        boxShadow: '0 0 20px rgba(66, 165, 245, 0.8)',
                    },
                },
                icon: {
                    color: '#fff',
                },
            },
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(135deg, #90caf9, #64b5f6)',
                    color: '#000',
                    transition: '0.5s',
                    backgroundSize: '200% auto',
                    boxShadow: '0 0 10px rgba(144, 202, 249, 0.5)',
                    ':hover': {
                        backgroundPosition: 'right center',
                        boxShadow: '0 0 20px rgba(144, 202, 249, 0.8)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root': {
                        background: 'linear-gradient(135deg, #90caf9, #64b5f6)',
                        color: '#000',
                        borderRadius: 4,
                        transition: '0.5s',
                        boxShadow: '0 0 10px rgba(144, 202, 249, 0.5)',
                    },
                    '& .MuiInputBase-root:hover': {
                        boxShadow: '0 0 20px rgba(144, 202, 249, 0.8)',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(135deg, #90caf9, #64b5f6)',
                    color: '#000',
                    borderRadius: 4,
                    boxShadow: '0 0 10px rgba(144, 202, 249, 0.5)',
                    transition: '0.5s',
                    '&:hover': {
                        boxShadow: '0 0 20px rgba(144, 202, 249, 0.8)',
                    },
                },
                icon: {
                    color: '#000',
                },
            },
        },
    },
});
