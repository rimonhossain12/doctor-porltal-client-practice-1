import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader value={value} setValue={setValue}></AppointmentHeader>
            <AvailableAppointment value={value}></AvailableAppointment>
        </div>
    );
};

export default Appointment;