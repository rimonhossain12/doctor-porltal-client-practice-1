import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';

const Appointments = ({date}) => {
    const{user} = useAuth();
    const [service, setService] = useState([]);
    // const upDate = ShowDoctorDate.toLocaleDateString();
    // console.log(upDate);

    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [user.email, date]);
    return (
        <div>
            <h2>This is Appointment:{service.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="right">Treatment Name</TableCell>
                            {/* <TableCell align="right">Email</TableCell> */}
                            <TableCell align="right">time</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {service.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                {/* <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell> */}
                                <TableCell align="right">{row.serialTime}</TableCell>
                                <TableCell align="right">{row.ShowDoctorDate}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
            </Table>
        </TableContainer>
        </div >
    );
};

export default Appointments;