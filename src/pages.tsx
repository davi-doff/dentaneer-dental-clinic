import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
// FIX: Corrected import paths to be relative to the src directory.
import { DENTISTS, SERVICES, REVIEWS, BLOG_POSTS, FAQ_ITEMS } from './data.ts';
import type { Dentist, Service, Review, BlogPost, FaqItem } from './types.ts';
import { useAppointments } from './context/AppointmentsContext.tsx';

// --- Reusable UI Components ---
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${className}`}>
    {children}
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-pastel-green-800 mb-8">{children}</h2>
);


// --- Page Specific Components ---
const DentistCard: React.FC<{ dentist: Dentist }> = ({ dentist }) => (
    <Card className="text-center">
        <img src={dentist.imageUrl} alt={dentist.name} className="w-full h-64 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-semibold text-pastel-green-900">{dentist.name}</h3>
            <p className="text-pastel-green-700">{dentist.specialty}</p>
            <p className="text-sm text-gray-500 mt-2">{dentist.branch}</p>
        </div>
    </Card>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <Card className="p-6 bg-pastel-green-50">
        <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
        </div>
        <p className="text-gray-600 mb-4">"{review.text}"</p>
        <p className="text-right font-semibold text-pastel-green-800">- {review.author}</p>
    </Card>
);

const FaqAccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-pastel-green-200">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-4 px-2 flex justify-between items-center hover:bg-pastel-green-50 transition-colors">
                <span className="font-semibold text-lg text-pastel-green-800">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-pastel-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            {isOpen && <div className="p-4 bg-white text-gray-700">{item.answer}</div>}
        </div>
    );
};

// --- Main Page Components ---
export const HomePage: React.FC = () => (
  <div className="space-y-16">
    <section className="bg-pastel-green-100 rounded-lg p-8 text-center">
      {/* FIX: Updated brand name for consistency with App.tsx */}
      <h1 className="text-4xl md:text-5xl font-bold text-pastel-green-900 mb-4">Dentaneer Dental Clinic</h1>
      <p className="text-lg text-pastel-green-800 mb-6">เรามอบรอยยิ้มที่สดใส พร้อมบริการด้วยใจ</p>
      <Link to="/booking" className="bg-pastel-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-pastel-green-700 transition-colors text-lg">
        นัดหมายทันตแพทย์
      </Link>
    </section>
    
    <section>
        <SectionTitle>บริการของเรา</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map(service => (
                <Card key={service.id} className="p-6 text-center">
                    <service.icon className="w-12 h-12 text-pastel-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-pastel-green-900">{service.name}</h3>
                </Card>
            ))}
        </div>
         <div className="text-center mt-8">
            <Link to="/services" className="text-pastel-green-600 font-semibold hover:underline">ดูบริการทั้งหมด &rarr;</Link>
        </div>
    </section>
    
     <section className="bg-pastel-green-50 py-12 rounded-lg">
        <div className="container mx-auto px-4">
            <SectionTitle>พบกับทีมทันตแพทย์ของเรา</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {DENTISTS.slice(0, 4).map(dentist => <DentistCard key={dentist.id} dentist={dentist} />)}
            </div>
        </div>
    </section>
  </div>
);

export const ServicesPage: React.FC = () => (
    <div>
        <SectionTitle>รายการหัตถการ</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(service => (
                <Card key={service.id} className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-pastel-green-100 p-3 rounded-full">
                        <service.icon className="w-8 h-8 text-pastel-green-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-pastel-green-900 mb-2">{service.name}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                </Card>
            ))}
        </div>
    </div>
);

export const DentistsPage: React.FC = () => (
    <div>
        <SectionTitle>ทีมทันตแพทย์</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DENTISTS.map(dentist => <DentistCard key={dentist.id} dentist={dentist} />)}
        </div>
    </div>
);

export const ReviewsPage: React.FC = () => (
    <div>
        <SectionTitle>รีวิวจากคนไข้</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map(review => <ReviewCard key={review.id} review={review} />)}
        </div>
    </div>
);

export const BlogPage: React.FC = () => (
    <div>
        <SectionTitle>บทความและสาระน่ารู้</SectionTitle>
        <div className="space-y-8">
            {BLOG_POSTS.map(post => (
                <Card key={post.id} className="md:flex">
                    <img src={post.imageUrl} alt={post.title} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
                    <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">{post.publishedDate}</p>
                        <h3 className="text-2xl font-semibold text-pastel-green-900 mb-2">{post.title}</h3>
                        <p className="text-gray-600">{post.summary}</p>
                    </div>
                </Card>
            ))}
        </div>
    </div>
);

export const FaqPage: React.FC = () => (
    <div>
        <SectionTitle>คำถามที่พบบ่อย</SectionTitle>
        <div className="max-w-3xl mx-auto bg-pastel-green-50 rounded-lg shadow">
            {FAQ_ITEMS.map(item => <FaqAccordionItem key={item.id} item={item} />)}
        </div>
    </div>
);

export const ContactPage: React.FC = () => (
    <div>
        <SectionTitle>ติดต่อเรา</SectionTitle>
        <Card className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2">
                 <div className="p-8 bg-pastel-green-600 text-white rounded-l-xl">
                    {/* FIX: Updated brand name and contact details for consistency */}
                    <h3 className="text-2xl font-bold mb-4">Dentaneer Dental Clinic</h3>
                    <p>เราพร้อมดูแลรอยยิ้มของคุณ</p>
                    <div className="mt-8 space-y-4">
                        <p><strong>โทร:</strong> 02-123-4567</p>
                        <p><strong>อีเมล:</strong> contact@dentaneerdental.com</p>
                        <p><strong>Line:</strong> @dentaneerdental</p>
                        <p><strong>Facebook:</strong> /dentaneerdental</p>
                    </div>
                </div>
                <div className="p-8">
                    <h3 className="text-xl font-semibold text-pastel-green-900 mb-4">เวลาทำการ</h3>
                    <p>จันทร์ - ศุกร์: 10:00 - 20:00 น.</p>
                    <p>เสาร์ - อาทิตย์: 09:00 - 18:00 น.</p>
                    <h3 className="text-xl font-semibold text-pastel-green-900 mt-6 mb-4">ที่อยู่</h3>
                    <p>123 ถ.สุขุมวิท แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110</p>
                </div>
            </div>
        </Card>
    </div>
);


export const BookingPage: React.FC = () => {
    const { addAppointment, isSlotBooked } = useAppointments();
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedTime, setSelectedTime] = useState('');
    const [patientName, setPatientName] = useState('');
    const [service, setService] = useState(SERVICES[0]?.name || '');

    const timeSlots = useMemo(() => {
        return ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime || !patientName || !service) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        const success = addAppointment({
            id: Date.now().toString(),
            date: selectedDate,
            time: selectedTime,
            patientName,
            service,
        });

        if (success) {
            alert(`นัดหมายสำเร็จ! วันที่ ${selectedDate} เวลา ${selectedTime}`);
            setSelectedTime('');
            setPatientName('');
        }
    };

    return (
        <div>
            <SectionTitle>นัดหมายออนไลน์</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="p-6">
                    <h3 className="text-2xl font-semibold text-pastel-green-900 mb-4">1. เลือกวันและเวลา</h3>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">เลือกวันที่</label>
                        <input
                            type="date"
                            id="date"
                            value={selectedDate}
                            min={new Date().toISOString().split('T')[0]}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <p className="block text-gray-700 font-semibold mb-2">เลือกเวลาที่ว่าง</p>
                        <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map(time => {
                                const booked = isSlotBooked(selectedDate, time);
                                return (
                                    <button
                                        key={time}
                                        onClick={() => !booked && setSelectedTime(time)}
                                        disabled={booked}
                                        className={`p-2 rounded text-center transition-colors ${
                                            booked
                                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                : selectedTime === time
                                                ? 'bg-pastel-green-600 text-white'
                                                : 'bg-pastel-green-100 hover:bg-pastel-green-200 text-pastel-green-800'
                                        }`}
                                    >
                                        {time}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </Card>
                <Card className="p-6">
                    <h3 className="text-2xl font-semibold text-pastel-green-900 mb-4">2. กรอกข้อมูล</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="patientName" className="block text-gray-700 font-semibold mb-2">ชื่อ-นามสกุล</label>
                            <input
                                type="text"
                                id="patientName"
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">เลือกบริการ</label>
                            <select
                                id="service"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded bg-white"
                                required
                            >
                                {SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                            </select>
                        </div>
                        <button type="submit" className="w-full bg-pastel-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pastel-green-700 transition-colors text-lg">
                            ยืนยันการนัดหมาย
                        </button>
                    </form>
                </Card>
            </div>
        </div>
    );
};
