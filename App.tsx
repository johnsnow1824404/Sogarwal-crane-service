import React, { useState, useEffect } from 'react';
import { AppView, User } from './types';
import { Navbar } from './components/Layout/Navbar';
import { StickyFooter } from './components/Layout/StickyFooter';
import { SplashScreen } from './components/Layout/SplashScreen';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { EmergencyForm } from './components/Features/EmergencyForm';
import { CursorEffect } from './components/Layout/CursorEffect';
import { SERVICES, MOCK_GALLERY, CONTACT_PHONE, ADDRESS, CONTACT_EMAIL } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.SPLASH);
  const [user, setUser] = useState<User | null>(null);

  const handleSplashComplete = () => {
    setView(AppView.HOME);
  };

  const handleLogin = (user: User) => {
    setUser(user);
    setView(AppView.HOME);
  };

  const renderContent = () => {
    switch (view) {
      case AppView.SPLASH:
        return <SplashScreen onComplete={handleSplashComplete} />;
      
      case AppView.LOGIN:
        return <Login onLogin={handleLogin} />;
      
      case AppView.HOME:
        return <Home setView={setView} />;
      
      case AppView.EMERGENCY:
        return (
          <div className="pt-24 pb-32 px-4 min-h-screen bg-brand-dark">
             <div className="container mx-auto">
                <EmergencyForm />
             </div>
          </div>
        );

      case AppView.SERVICES:
        return (
          <div className="pt-24 pb-32 px-4 min-h-screen bg-brand-black">
            <div className="container mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-8 border-l-4 border-brand-yellow pl-4">ALL SERVICES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SERVICES.map(service => (
                  <div key={service.id} className="bg-gray-900 rounded-lg overflow-hidden group">
                     <div className="h-48 overflow-hidden relative">
                       <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale sepia brightness-90 contrast-125 group-hover:filter-none" 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop';
                          }}
                       />
                       <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay pointer-events-none"></div>
                     </div>
                     <div className="p-6">
                        <div className="flex items-center mb-3">
                           <i className={`fa-solid ${service.icon} text-brand-yellow mr-3 text-xl`}></i>
                           <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-4">{service.description}</p>
                        <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                           <span className="text-xs font-bold text-gray-500 uppercase">Starts from ₹1500</span>
                           <button onClick={() => setView(AppView.EMERGENCY)} className="text-brand-yellow text-sm font-bold hover:text-white">BOOK NOW</button>
                        </div>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case AppView.GALLERY:
        return (
          <div className="pt-24 pb-32 px-4 min-h-screen bg-brand-black">
             <div className="container mx-auto">
                <h2 className="text-3xl font-display font-bold text-white mb-8 border-l-4 border-brand-yellow pl-4">WORK GALLERY</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {MOCK_GALLERY.map((src, idx) => (
                    <div key={idx} className="aspect-video rounded-lg overflow-hidden border border-gray-800 hover:border-brand-yellow transition-all group relative">
                      {/* Black and Yellow Filter Applied - Adjusted Brightness */}
                      <img 
                        src={src} 
                        alt={`Gallery ${idx}`} 
                        className="w-full h-full object-cover filter grayscale sepia saturate-150 hue-rotate-[5deg] contrast-110 brightness-90 hover:filter-none transition-all duration-500" 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop';
                        }}
                      />
                    </div>
                  ))}
                </div>
             </div>
          </div>
        );

      case AppView.CONTACT:
        return (
          <div className="pt-24 pb-32 px-4 min-h-screen bg-brand-black">
            <div className="container mx-auto max-w-3xl text-center">
               <div className="w-20 h-20 bg-brand-yellow rounded-full mx-auto flex items-center justify-center text-4xl text-black mb-6 animate-pulse">
                 <i className="fa-solid fa-headset"></i>
               </div>
               <h2 className="text-4xl font-display font-bold text-white mb-2">GET IN TOUCH</h2>
               <p className="text-gray-400 mb-8 text-lg">We are available 24 hours a day, 7 days a week.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                  <div className="bg-brand-dark p-6 rounded-xl border border-gray-800 flex flex-col items-center text-center">
                     <i className="fa-solid fa-location-dot text-brand-yellow text-2xl mb-3"></i>
                     <h4 className="text-white font-bold uppercase mb-1">Visit Us</h4>
                     <p className="text-gray-400 text-sm">{ADDRESS}</p>
                  </div>
                  <a href={`tel:${CONTACT_PHONE}`} className="bg-brand-dark p-6 rounded-xl border border-gray-800 flex flex-col items-center text-center hover:border-brand-yellow transition-colors">
                     <i className="fa-solid fa-phone text-brand-yellow text-2xl mb-3"></i>
                     <h4 className="text-white font-bold uppercase mb-1">Call Us</h4>
                     <p className="text-gray-400 text-sm">{CONTACT_PHONE}</p>
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="bg-brand-dark p-6 rounded-xl border border-gray-800 flex flex-col items-center text-center hover:border-brand-yellow transition-colors">
                     <i className="fa-solid fa-envelope text-brand-yellow text-2xl mb-3"></i>
                     <h4 className="text-white font-bold uppercase mb-1">Email Us</h4>
                     <p className="text-gray-400 text-sm break-all">{CONTACT_EMAIL}</p>
                  </a>
               </div>
               
               {/* Embed Google Maps Iframe - LARGER SIZE */}
               <div className="h-96 w-full rounded-2xl overflow-hidden bg-gray-800 relative border-2 border-brand-yellow/30 shadow-2xl">
                  <iframe 
                    title="Sogarwal Crane Bharatpur"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14169.567840838128!2d77.4815291!3d27.2201824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a3a41e05d23b%3A0x633446051515277!2sRBM%20Hospital%2C%20Bharatpur%2C%20Rajasthan%20321001!5e0!3m2!1sen!2sin!4v1709612345678" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) contrast(1.2)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                  <div className="absolute bottom-4 left-4 bg-black/80 text-brand-yellow text-xs px-3 py-1 rounded backdrop-blur-sm border border-brand-yellow/30">
                     <i className="fa-solid fa-map-pin mr-1"></i> RBM Hospital Area, Bharatpur
                  </div>
               </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-brand-black text-white min-h-screen font-sans">
      {/* Global Cursor Effect */}
      <CursorEffect />

      {view === AppView.SPLASH ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <>
          <Navbar currentView={view} setView={setView} userPhone={user?.phoneNumber || null} />
          <main className="animate-fade-in relative z-10">
            {renderContent()}
          </main>
          <StickyFooter onEmergencyClick={() => setView(AppView.EMERGENCY)} />
        </>
      )}
    </div>
  );
};

export default App;