import React, { useState } from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import { AppointmentsProvider } from './context/AppointmentsContext.tsx';
import { HomePage, ServicesPage, DentistsPage, ReviewsPage, BlogPage, FaqPage, ContactPage, BookingPage } from './pages.tsx';
import { AdminPage } from './admin.tsx';
import { GuidesPage } from './guides.tsx';


// --- Icon Components ---
const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);
const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);
const ToothIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9.25 2 7 4.25 7 7C7 8.85 8.1 10.45 9.65 11.25C8.82 12.35 8.25 13.63 8.25 15C8.25 17.07 9.93 18.75 12 18.75C14.07 18.75 15.75 17.07 15.75 15C15.75 13.63 15.18 12.35 14.35 11.25C15.9 10.45 17 8.85 17 7C17 4.25 14.75 2 12 2ZM11 20V22H13V20H11Z" /></svg>
);


// --- Layout Components ---
const navLinks = [
    { path: '/', label: 'หน้าแรก' },
    { path: '/services', label: 'บริการ' },
    { path: '/dentists', label: 'ทีมแพทย์' },
    { path: '/reviews', label: 'รีวิว' },
    { path: '/blog', label: 'บทความ' },
    { path: '/faq', label: 'คำถามที่พบบ่อย' },
    { path: '/contact', label: 'ติดต่อเรา' },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const baseLinkClass = "py-2 px-3 block transition-colors duration-300 rounded-md";
    const activeLinkClass = "bg-pastel-green-200 text-pastel-green-900";
    const inactiveLinkClass = "hover:bg-pastel-green-100 text-pastel-green-800";

    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <ToothIcon className="h-8 w-8 text-pastel-green-600" />
                    <span className="text-xl font-bold text-pastel-green-800">Pastel Dental</span>
                </Link>
                <div className="hidden md:flex items-center space-x-2">
                    {navLinks.map(link => (
                        <NavLink key={link.path} to={link.path} className={({ isActive }) => `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>
                            {link.label}
                        </NavLink>
                    ))}
                    <Link to="/booking" className="bg-pastel-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-pastel-green-700 transition-colors ml-4">
                        นัดหมาย
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                     {navLinks.map(link => (
                        <NavLink key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>
                            {link.label}
                        </NavLink>
                    ))}
                    <Link to="/booking" onClick={() => setIsMenuOpen(false)} className="bg-pastel-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-pastel-green-700 transition-colors block text-center">
                        นัดหมาย
                    </Link>
                </div>
            )}
        </header>
    );
};

const Footer: React.FC = () => (
    <footer className="bg-pastel-green-800 text-pastel-green-100 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
            <p>&copy; {new Date().getFullYear()} Pastel Dental Clinic. All rights reserved.</p>
            <div className="mt-4">
              <Link to="/admin" className="text-pastel-green-300 hover:text-white mx-2">Admin Panel</Link>
              <Link to="/guides" className="text-pastel-green-300 hover:text-white mx-2">Guides</Link>
            </div>
        </div>
    </footer>
);

export default function App() {
  return (
    <AppointmentsProvider>
      <div className="bg-pastel-green-50 min-h-screen text-gray-800">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/dentists" element={<DentistsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/guides" element={<GuidesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppointmentsProvider>
  );
}
