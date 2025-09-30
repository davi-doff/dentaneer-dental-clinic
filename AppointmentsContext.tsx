import React from 'react';
import type { Appointment } from '../types.ts';

const { createContext, useState, useContext, useCallback } = React;

interface AppointmentsContextType {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => boolean;
  removeAppointment: (appointmentId: string) => void;
  isSlotBooked: (date: string, time: string) => boolean;
}

const AppointmentsContext = createContext<AppointmentsContextType | undefined>(undefined);

const initialAppointments: Appointment[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '10:00', patientName: 'คนไข้ตัวอย่าง', service: 'ตรวจสุขภาพฟัน' }
];

export const AppointmentsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);

  const isSlotBooked = useCallback((date: string, time: string): boolean => {
    return appointments.some(app => app.date === date && app.time === time);
  }, [appointments]);

  const addAppointment = (appointment: Appointment): boolean => {
    if (isSlotBooked(appointment.date, appointment.time)) {
      alert('เวลานี้ถูกจองแล้ว กรุณาเลือกเวลาอื่น');
      return false;
    }
    setAppointments(prev => [...prev, appointment]);
    return true;
  };

  const removeAppointment = (appointmentId: string) => {
    setAppointments(prev => prev.filter(app => app.id !== appointmentId));
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment, removeAppointment, isSlotBooked }}>
      {children}
    </AppointmentsContext.Provider>
  );
};

export const useAppointments = (): AppointmentsContextType => {
  const context = useContext(AppointmentsContext);
  if (context === undefined) {
    throw new Error('useAppointments must be used within an AppointmentsProvider');
  }
  return context;
};