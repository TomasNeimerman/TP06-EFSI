import React from 'react';
import AppointmentItem from './AppointmentItem';

const AppointmentList = ({ appointments, deleteAppointment }) => {
  return (
    <div className="appointment-list">
      <h2>Listado de Citas</h2>
      <div className="appointment-items">
        {appointments.length === 0 ? (
          <p>No hay citas</p>
        ) : (
          appointments.map((appointment, index) => (
            <AppointmentItem
              key={index}
              index={index}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AppointmentList;
