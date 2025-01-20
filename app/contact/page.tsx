'use client';

import { useState } from 'react';

const locations = [
  {
    title: 'Dünya Merkezi',
    address: 'NOVA TIMEPIECE Tower\nLevent, İstanbul',
    coordinates: '41.0082° K, 28.9784° D',
    image: '/locations/earth.jpg'
  },
  {
    title: 'Mars Şubesi',
    address: 'Olympus Mons Plaza\nTharsis Bölgesi',
    coordinates: '18.6500° K, 226.2000° D',
    image: '/locations/mars.jpg'
  },
  {
    title: 'Ay Üretim Tesisi',
    address: 'Tranquility Base\nMare Tranquillitatis',
    coordinates: '0.6875° K, 23.4333° D',
    image: '/locations/moon.jpg'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [activeLocation, setActiveLocation] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-24 space-shimmer bg-clip-text text-transparent">
          İletişim
        </h1>

        {/* Lokasyonlar */}
        <div className="mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className={`theme-card cursor-pointer transition-all duration-300 ${
                  activeLocation === index ? 'scale-105 ring-2 ring-purple-500' : 'hover:scale-105'
                }`}
                onClick={() => setActiveLocation(index)}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: `url(${location.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-glow-purple mb-2">{location.title}</h3>
                <p className="text-gray-400 whitespace-pre-line mb-2">{location.address}</p>
                <p className="text-sm text-purple-400">{location.coordinates}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div className="space-y-8">
            <div className="theme-card">
              <h2 className="text-2xl font-bold text-glow-purple mb-6">Kuantum İletişim</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">E-posta</div>
                    <div className="text-white">contact@novatimepiece.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Hologram Tel</div>
                    <div className="text-white">+90 (212) 555 0000</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Çalışma Saatleri</div>
                    <div className="text-white">Dünya Zamanı: 10:00 - 19:00</div>
                    <div className="text-gray-400">Mars Zamanı: 08:30 - 17:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <form onSubmit={handleSubmit} className="theme-card space-y-6">
            <h2 className="text-2xl font-bold text-glow-purple mb-6">Mesaj Gönder</h2>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                İsim Soyisim
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Konu
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all space-shimmer"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </main>
  );
} 