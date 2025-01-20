'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

// Yıldız animasyonu için komponent
interface StarProps {
  x: number;
  y: number;
  size: number;
  delay: number;
}

const Star = ({ x, y, size, delay }: StarProps) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
    }}
    animate={{
      opacity: [0.2, 1, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [show3DModel, setShow3DModel] = useState(false);
  const [showVRTour, setShowVRTour] = useState(false);

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Arkaplan Yıldızları */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Star
          key={i}
          x={Math.random() * 100}
          y={Math.random() * 100}
          size={Math.random() * 2 + 1}
          delay={Math.random() * 3}
        />
      ))}

      {/* Ana İçerik */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-24">
        {/* Hero Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            Zamanın Ötesinde Bir Yolculuk
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400"
          >
            Galaksinin en prestijli saat koleksiyonunu keşfedin
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/collection" className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative px-8 py-3 bg-black rounded-full text-white font-semibold">
                Koleksiyonu Keşfet
              </button>
            </Link>
            <Link href="/about" className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative px-8 py-3 bg-black rounded-full text-white font-semibold">
                Hikayemizi Öğren
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Öne Çıkan Özellikler */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
        >
          <Feature
            emoji="🌌"
            title="Kuantum Teknolojisi"
            description="Nano-hassasiyette zaman ölçümü ve galaktik senkronizasyon"
            bgClass="from-purple-900/20"
          />
          <Feature
            emoji="⚡"
            title="Süper İletkenler"
            description="Sıfır enerji kaybı ile çalışan süper iletken mekanizmalar"
            bgClass="from-blue-900/20"
          />
          <Feature
            emoji="🌠"
            title="Yıldız Tozu"
            description="Gerçek yıldız tozundan üretilen özel kaplamalar"
            bgClass="from-purple-900/20"
          />
        </motion.div>

        {/* İnteraktif Özellikler */}
        {/* ... Diğer bölümleri burada aynı şekilde düzenleyebilirsiniz */}
      </div>

      {/* Canlı Danışman Butonu */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowChat(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg z-50"
      >
        <span className="text-2xl">💬</span>
      </motion.button>
    </main>
  );
}

// Tekrarlanan özellikler için komponent
interface FeatureProps {
  emoji: string;
  title: string;
  description: string;
  bgClass: string;
}

const Feature = ({ emoji, title, description, bgClass }: FeatureProps) => (
  <div
    className={`p-6 rounded-2xl bg-gradient-to-b ${bgClass} to-transparent backdrop-blur-sm border border-purple-500/10`}
  >
    <div className="text-3xl mb-4">{emoji}</div>
    <h3 className="text-xl font-bold text-purple-400 mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);
