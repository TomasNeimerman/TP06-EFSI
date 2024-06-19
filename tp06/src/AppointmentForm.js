import React, { useState } from 'react';
import styles from './AppointmentForm.css';

const AppointmentForm = ({ onAddAppointment }) => {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm('¿Desea agregar esta cita?')) {
      onAddAppointment({ mascota, propietario, fecha, hora, sintomas });
      setMascota('');
      setPropietario('');
      setFecha('');
      setHora('');
      setSintomas('');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input 
          type="text" 
          name="mascota" 
          className="u-full-width" 
          placeholder="Nombre Mascota" 
          value={mascota} 
          onChange={(e) => setMascota(e.target.value)} 
          required 
        />
        <label>Nombre Dueño</label>
        <input 
          type="text" 
          name="propietario" 
          className="u-full-width" 
          placeholder="Nombre dueño de la mascota" 
          value={propietario} 
          onChange={(e) => setPropietario(e.target.value)} 
          required 
        />
        <label>Fecha</label>
        <input 
          type="date" 
          name="fecha" 
          className="u-full-width" 
          value={fecha} 
          onChange={(e) => setFecha(e.target.value)} 
          required 
        />
        <label>Hora</label>
        <input 
          type="time" 
          name="hora" 
          className="u-full-width" 
          value={hora} 
          onChange={(e) => setHora(e.target.value)} 
          required 
        />
        <label>Sintomas</label>
        <textarea 
          name="sintomas" 
          className="u-full-width" 
          value={sintomas} 
          onChange={(e) => setSintomas(e.target.value)} 
          required 
        ></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
