import React, { useState } from 'react';
import '../css/Dashboard.css';

const Dashboard = () => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: 'Sala de Informática FAFIL 3',
      status: 'Reservado',
      timeSlots: [
        { startTime: '14:30', endTime: '15:30' },
      ],
    },
    {
      id: 2,
      name: 'Sala de Xablau',
      status: 'Reservado',
      timeSlots: [
        { startTime: '14:30', endTime: '15:30' },
      ],
    },
    {
      id: 3,
      name: 'Sala de Blahblahblah',
      status: 'Reservado',
      timeSlots: [
        { startTime: '14:30', endTime: '15:30' },
      ],
    },
    {
      id: 4,
      name: 'Sala de Xablau',
      status: 'Reservado',
      timeSlots: [
        { startTime: '14:30', endTime: '15:30' },
      ],
    },
    {
      id: 5,
      name: 'Sala de Xablau',
      status: 'Reservado',
      timeSlots: [
        { startTime: '14:30', endTime: '15:30' },
      ],
    },
  ]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h2>Agendar Horários</h2>
      <div className="rooms-container">
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

const Room = ({ room }) => {
  return (
    <div className="room">
      <h3>{room.name}</h3>
      <p className={`status ${room.status.toLowerCase()}`}>
        {room.status}
      </p>
      <div className="time-slots">
        {room.timeSlots.map((timeSlot) => (
          <span key={timeSlot.startTime}>
            {timeSlot.startTime} - {timeSlot.endTime}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;