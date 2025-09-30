
import React from 'react';
import { useAppointments } from './context/AppointmentsContext';

export const AdminPage: React.FC = () => {
    const { appointments, removeAppointment } = useAppointments();

    const sortedAppointments = [...appointments].sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateA.getTime() - dateB.getTime();
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-pastel-green-800 mb-8">ระบบจัดการนัดหมาย</h1>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-pastel-green-100 uppercase tracking-wider text-pastel-green-800">
                            <tr>
                                <th className="px-6 py-3 font-semibold">วันที่</th>
                                <th className="px-6 py-3 font-semibold">เวลา</th>
                                <th className="px-6 py-3 font-semibold">ชื่อคนไข้</th>
                                <th className="px-6 py-3 font-semibold">บริการ</th>
                                <th className="px-6 py-3 font-semibold text-center">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-pastel-green-200">
                            {sortedAppointments.length > 0 ? (
                                sortedAppointments.map(app => (
                                    <tr key={app.id} className="hover:bg-pastel-green-50">
                                        <td className="px-6 py-4">{app.date}</td>
                                        <td className="px-6 py-4">{app.time}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900">{app.patientName}</td>
                                        <td className="px-6 py-4">{app.service}</td>
                                        <td className="px-6 py-4 text-center">
                                            <button 
                                                onClick={() => removeAppointment(app.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-xs"
                                            >
                                                ยกเลิก
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="text-center py-10 text-gray-500">
                                        ไม่มีรายการนัดหมาย
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
