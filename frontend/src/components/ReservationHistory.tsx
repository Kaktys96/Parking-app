import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableHead, TableRow,
    Button, Paper, Typography
} from '@mui/material';
import { getReservations, cancelReservation } from '../services/reservations';
import { Reservation } from '../types';
import { format } from 'date-fns';
import Layout from './Layout';

const ReservationHistory: React.FC = () => {
    const [reservations, setReservations] = useState<Reservation[]>([]);

    const fetchReservations = async () => {
        try {
            const data = await getReservations();
            setReservations(data);
        } catch (err) {
            console.error('Ошибка загрузки бронирований:', err);
        }
    };

    useEffect(() => {
        fetchReservations();
        const handler = () => fetchReservations();
        window.addEventListener('reservationUpdated', handler);
        return () => window.removeEventListener('reservationUpdated', handler);
    }, []);

    const handleCancel = async (id: number) => {
        try {
            await cancelReservation(id);
            await fetchReservations();
        } catch (err) {
            console.error('Ошибка отмены бронирования:', err);
        }
    };

    return (
        <Layout>
            <Typography variant="h5" gutterBottom>Мои бронирования</Typography>
            <Paper sx={{ p: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Место</TableCell>
                            <TableCell>Дата</TableCell>
                            <TableCell>Время</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Действие</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reservations.map(res => (
                            <TableRow key={res.id}>
                                <TableCell>{res.parkingSpot.location}</TableCell>
                                <TableCell>{format(new Date(res.reserved_date), 'dd.MM.yyyy')}</TableCell>
                                <TableCell>{res.reserved_time}</TableCell>
                                <TableCell>{res.status === 'booked' ? 'Забронировано' : 'Отменено'}</TableCell>
                                <TableCell>
                                    {res.canCancel && (
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() => handleCancel(res.id)}
                                        >
                                            Отменить
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Layout>
    );
};

export default ReservationHistory;
