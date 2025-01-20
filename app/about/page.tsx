'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Yıldız komponenti
const Star = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size
    }}
    animate={{
      opacity: [0.2, 1, 0.2],
      scale: [1, 1.2, 1]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export default function AboutPage() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    // Rastgele yıldızlar oluştur
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3
    }));
    setStars(newStars);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Yıldızlar */}
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}

      {/* İçerik */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            NOVA TIMEPIECE
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Geleceğin zamanını şekillendiriyoruz
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-400">Vizyonumuz</h2>
            <p className="text-gray-300 leading-relaxed">
              NOVA TIMEPIECE olarak, lüks saat endüstrisinde devrim yaratmayı hedefliyoruz. 
              Uzay teknolojisini ve yenilikçi tasarımı birleştirerek, zamanı sadece ölçen değil, 
              aynı zamanda yaşatan saatler üretiyoruz.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-400">Teknolojimiz</h2>
            <p className="text-gray-300 leading-relaxed">
              En son kuantum teknolojilerini kullanarak, nano-hassasiyette zaman ölçümü sağlıyoruz. 
              Her saatimiz, galaktik koordinat sistemleriyle senkronize çalışarak, evrensel bir 
              zaman deneyimi sunuyor.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-400">Sürdürülebilirlik</h2>
            <p className="text-gray-300 leading-relaxed">
              Üretim süreçlerimizde karbon-negatif teknolojiler kullanıyor, uzay kaynaklarını 
              sürdürülebilir şekilde değerlendiriyoruz. Gelecek nesillere daha temiz bir dünya 
              bırakmak için çalışıyoruz.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-400">Kalite</h2>
            <p className="text-gray-300 leading-relaxed">
              Her NOVA TIMEPIECE saati, uzman zanaatkarlarımız tarafından titizlikle üretiliyor. 
              Kullandığımız malzemeler, uzay araçlarında kullanılan malzemelerle aynı standartlarda 
              test ediliyor ve sertifikalandırılıyor.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 