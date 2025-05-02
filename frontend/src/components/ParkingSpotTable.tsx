import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableHead, TableRow,
    TextField, Button, Paper, Typography
} from '@mui/material';
import { getParkingSpots } from '../services/parking-spots';
import { ParkingSpot } from '../types';
import ReservationDialog from './ReservationDialog';
import Layout from './Layout';

const ParkingSpotTable: React.FC = () => {
    const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>([]);
    const [search, setSearch] = useState('');
    const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);

    useEffect(() => {
        const fetchSpots = async () => {
            try {
                const spots = await getParkingSpots();
                setParkingSpots(spots);
            } catch (err) {
                console.error('Ошибка загрузки парковочных мест:', err);
            }
        };
        fetchSpots();
    }, []);

    const handleReservationCreated = () => {
        window.dispatchEvent(new Event('reservationUpdated'));
        setSelectedSpot(null);
    };

    const filteredSpots = parkingSpots.filter(spot =>
        spot.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Layout>
            <Typography variant="h5" gutterBottom>Список парковочных мест</Typography>
            <Paper sx={{ p: 2 }}>
                <TextField
                    label="Поиск по локации"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Локация</TableCell>
                            <TableCell align="right">Действие</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredSpots.map(spot => (
                            <TableRow key={spot.id}>
                                <TableCell>{spot.id}</TableCell>
                                <TableCell>{spot.location}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={() => setSelectedSpot(spot)}
                                    >
                                        Забронировать
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            {selectedSpot && (
                <ReservationDialog
                    parkingSpot={selectedSpot}
                    onClose={() => setSelectedSpot(null)}
                    onReservationCreated={handleReservationCreated}
                />
            )}
        </Layout>
    );
};

export default ParkingSpotTable;
