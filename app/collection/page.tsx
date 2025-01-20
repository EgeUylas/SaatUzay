'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tüm Modeller');
  const [hoveredWatch, setHoveredWatch] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  const categories = ['Tüm Modeller', 'Lüks', 'Sport', 'Klasik'];

  const watches = [
    {
      id: 1,
      name: "Quantum X-1",
      price: "₺750,000",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1000",
      description: "Kuantum hassasiyetinde zaman ölçümü",
      category: "Lüks",
      stock: 5,
      features: [
        "Karanlık Madde Kasa",
        "Kuantum Dolanıklık Senkronizasyonu",
        "Galaktik Zaman Ölçümü"
      ]
    },
    {
      id: 2,
      name: "Nova Elite",
      price: "₺950,000",
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000",
      description: "Uzay teknolojisi ile üretilmiş kasa",
      category: "Lüks",
      stock: 3,
      features: [
        "Nötron Yıldızı Alaşımı",
        "Süper Akışkan Mekanizma",
        "Evrensel Koordinat Sistemi"
      ]
    },
    {
      id: 3,
      name: "Stellar Pro",
      price: "₺650,000",
      image: "https://images.unsplash.com/photo-1639037687665-37ff437e9dbf?q=80&w=1000",
      description: "Yıldızlardan ilham alan tasarım",
      category: "Sport",
      stock: 7,
      features: [
        "Anti-Gravite Sistem",
        "Plazma Ekran",
        "Uzay İstasyonu Senkronizasyonu"
      ]
    },
    {
      id: 4,
      name: "Nebula X",
      price: "₺850,000",
      image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&w=1000",
      description: "Nebula teknolojisi ile tasarlandı",
      category: "Lüks",
      stock: 4,
      features: [
        "Nebula Işık Sistemi",
        "Yıldız Tozu Kaplama",
        "Uzay-Zaman Bükülme Sensörü"
      ]
    },
    {
      id: 5,
      name: "Cosmos GT",
      price: "₺550,000",
      image: "https://images.unsplash.com/photo-1623998021446-45cd9b269056?q=80&w=1000",
      description: "Sportif ve dinamik tasarım",
      category: "Sport",
      stock: 8,
      features: [
        "Karbon Fiber Kasa",
        "Spor Mod Sistemi",
        "G-Kuvveti Ölçümü"
      ]
    },
    {
      id: 6,
      name: "Astro Classic",
      price: "₺450,000",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1000",
      description: "Klasik tasarımın geleceği",
      category: "Klasik",
      stock: 10,
      features: [
        "Geleneksel Mekanizma",
        "Safir Kristal Cam",
        "Vintage Tasarım"
      ]
    },
    {
      id: 7,
      name: "Pulsar Elite",
      price: "₺720,000",
      image: "https://images.unsplash.com/photo-1636901942318-972ea62b4d5d?q=80&w=1000",
      description: "Pulsar yıldızlarından ilham",
      category: "Lüks",
      stock: 6,
      features: [
        "Pulsar Senkronizasyonu",
        "Manyetik Alan Koruması",
        "Radyasyon Kalkanı"
      ]
    },
    {
      id: 8,
      name: "Chronos Sport",
      price: "₺480,000",
      image: "https://images.unsplash.com/photo-1636901941312-64e8d6906eb2?q=80&w=1000",
      description: "Profesyonel sporcular için",
      category: "Sport",
      stock: 9,
      features: [
        "Yüksek Dayanıklılık",
        "Spor Takip Sistemi",
        "Bio-Metrik Sensörler"
      ]
    },
    {
      id: 9,
      name: "Heritage X",
      price: "₺580,000",
      image: "https://images.unsplash.com/photo-1639037687062-e06f538e3f38?q=80&w=1000",
      description: "Modern klasik tasarım",
      category: "Klasik",
      stock: 7,
      features: [
        "El Yapımı Detaylar",
        "Altın Kaplama",
        "Limitli Üretim"
      ]
    }
  ];

  const filteredWatches = selectedCategory === 'Tüm Modeller'
    ? watches
    : watches.filter(watch => watch.category === selectedCategory);

  const handleRotation = () => {
    setRotationAngle(prev => prev + 90);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Başlık */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          Koleksiyon
        </h1>
      </motion.div>

      {/* Kategori Seçimi */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex justify-center py-4 gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm transition-all relative overflow-hidden ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedCategory === category && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    layoutId="categoryBackground"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Saat Koleksiyonu */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {filteredWatches.map(watch => (
              <motion.div
                key={watch.id}
                className="relative group"
                onHoverStart={() => setHoveredWatch(watch.id)}
                onHoverEnd={() => setHoveredWatch(null)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Görsel Kısmı */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={watch.image}
                    alt={watch.name}
                    fill
                    className="object-cover transition-transform duration-700"
                    style={{ 
                      transform: hoveredWatch === watch.id 
                        ? `scale(1.1) rotate(${rotationAngle}deg)` 
                        : `scale(1) rotate(${rotationAngle}deg)` 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Durumunda Gösterilecek Özellikler */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredWatch === watch.id ? 1 : 0,
                      y: hoveredWatch === watch.id ? 0 : 20
                    }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  >
                    <div className="space-y-2">
                      {watch.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 rounded-full bg-purple-500" />
                          <span className="text-sm font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Bilgi Kısmı */}
                <div className="mt-4 space-y-2">
                  <motion.h3
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {watch.name}
                  </motion.h3>
                  <p className="text-gray-400 text-sm">{watch.description}</p>
                  <div className="flex justify-between items-center pt-2">
                    <motion.span
                      className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {watch.price}
                    </motion.span>
                    <motion.button
                      onClick={handleRotation}
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Döndür →
                    </motion.button>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-gray-500">Stok: {watch.stock} adet</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
} 