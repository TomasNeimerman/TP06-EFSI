import React, { useState } from 'react';

const Form = ({ addAppointment }) => {
  const [formData, setFormData] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(formData);
    setFormData({
      mascota: '',
      dueño: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Agregar Cita</h2>
      <div className="form-group">
        <label>Mascota</label>
        <input type="text" name="mascota" value={formData.mascota} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Dueño</label>
        <input type="text" name="dueño" value={formData.dueño} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Fecha</label>
        <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Hora</label>
        <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Síntomas</label>
        <textarea name="sintomas" value={formData.sintomas} onChange={handleChange} required></textarea>
      </div>
      <button type="submit" className="btn">Agregar Cita</button>
    </form>
  );
};

export default Form;
