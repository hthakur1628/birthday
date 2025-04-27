
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { Heart, Home, Image, MessageCircle, Gift } from "lucide-react";

const Sparkle = ({ style }) => (
  <div className="sparkle" style={{
    width: Math.random() * 4 + 2 + 'px',
    height: Math.random() * 4 + 2 + 'px',
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    animationDelay: Math.random() * 2 + 's',
    ...style
  }} />
);

const BirthdayWishes = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="birthday-card max-w-2xl w-full"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Birthday Wishes for Krati Rana</h3>
        <p className="text-white leading-relaxed">
          Wishing you a fantastic journey ahead filled with dreams and achievements. May your 16th year bring countless moments of joy and success. Keep shining bright!
        </p>
      </motion.div>
    </motion.div>
  );
};

const HomePage = () => {
  const [showWishes, setShowWishes] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="birthday-card text-white relative">
        {[...Array(15)].map((_, i) => <Sparkle key={i} />)}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="mb-6 text-7xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text animate-gradient">
              SWEET 16
            </span>
          </motion.h1>
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img alt="Birthday celebration" className="w-full h-96 object-cover rounded-lg transform hover:scale-105 transition-transform duration-500" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/311748eb-be5e-4d61-99c7-ce46d6be8702/c8185507a61ca3c8575ef2b3e0f03dd6.jpg" />
          </div>
          <div className="flex justify-center mt-8">
            <Button 
              onClick={() => setShowWishes(true)}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-lg transform hover:scale-105 transition-all duration-300"
            >
              <Gift className="mr-2 h-5 w-5" /> Birthday Wishes
            </Button>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showWishes && <BirthdayWishes onClose={() => setShowWishes(false)} />}
      </AnimatePresence>
    </motion.div>
  );
};

const GalleryPage = () => {
  const photos = [
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/311748eb-be5e-4d61-99c7-ce46d6be8702/889578fcb3c6b3fdd73c1b84c9f1b8a0.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/311748eb-be5e-4d61-99c7-ce46d6be8702/cd4d9e538e26d9c43f2f688eeb449353.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/311748eb-be5e-4d61-99c7-ce46d6be8702/38573cfa61df7e1526a33c410e505c20.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/311748eb-be5e-4d61-99c7-ce46d6be8702/618e96c40671af5cd1f1f1aa5ad20e5f.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/311748eb-be5e-4d61-99c7-ce46d6be8702/623857d0b1a60284f7841fab655fc1c0.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/311748eb-be5e-4d61-99c7-ce46d6be8702/7d758ebcbd8fabdacfda29156ef6bec4.jpg"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="birthday-card mb-8">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Photo Gallery</h2>
      </div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="photo-item aspect-square"
          >
            <img 
              src={photo} 
              alt={`Birthday memory ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const WishesPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="container mx-auto px-4 py-8"
  >
    <div className="grid gap-6">
      <div className="birthday-card relative">
        {[...Array(10)].map((_, i) => <Sparkle key={i} />)}
        <h3 className="text-3xl font-bold text-center text-white mb-6">जन्मदिन की शुभकामनाएं</h3>
        <p className="mt-2 text-xl text-white/90 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
          मेरी प्रिये टॉम भोई उर्फ कृति राणा जो आप एक लड़की के रूप में बदल रही हैं मुझे बहुत अच्छा लगा सुन कर कि आप अब 16 साल की होने वाली हैं और अपना 15 साल का जीवन बहुत खुशी खुशी व्यतीत किया भले वो अपनी प्रिय बहन उर्फ काकुल राणा से झगड़ा करके या मार पिट करके या अपने घर के बड़े बेटे शाय बॉय से अच्छी तरह बना कर, मेरे पास कहने के लिए तो कुछ है ही नहीं जैसे आप मेरी बातों को पढ़ कर समझ ही चुके होंगे लेकिन फिर भी मैं यही कहना चाहूंगा आप अपनी जीवन में उन्नति करें और अपना जीवन अच्छे से व्यतीत करें मेरी यही आशा रहेगी कि आप बहुत अच्छा काम करें और हमारी मुलाकात जो 3 साल के करीब होती है वो आगे भी कम न हो मेरी तरफ से आपको जन्मदिन की हार्दिक शुभकामनाएं
        </p>
      </div>
    </div>
  </motion.div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <nav className="nav-glass">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center py-4 space-x-8">
              <Link to="/">
                <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/20">
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/20">
                  <Image className="h-4 w-4" />
                  Gallery
                </Button>
              </Link>
              <Link to="/wishes">
                <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/20">
                  <MessageCircle className="h-4 w-4" />
                  Wishes
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/wishes" element={<WishesPage />} />
          </Routes>
        </AnimatePresence>

        <footer className="footer-glass py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="flex items-center justify-center gap-2 text-white">
              Made with <Heart className="h-4 w-4 text-pink-300 animate-pulse" /> for KRATI RANA
            </p>
          </div>
        </footer>
      </div>
      <Toaster />
    </Router>
  );
};

export default App;
