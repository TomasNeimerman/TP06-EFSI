import React, { useState } from 'react';
import Form from './Form';
import AppointmentList from './AppointmentList';
import './App.css';

const App = () => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="content">
        <Form addAppointment={addAppointment} />
        <AppointmentList appointments={appointments} deleteAppointment={deleteAppointment} />
      </div>
    </div>
  );
};

export default App;
