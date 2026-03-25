import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEffects } from '../utils/soundEffects';

interface SecretLetterPageProps {
  onBackToStart?: () => void;
}

const SecretLetterPage: React.FC<SecretLetterPageProps> = ({ onBackToStart }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const fullText = `I'm not really good with sweet words or comforting people the "right" way, but I genuinely care about you, princess. Lately you've looked really tired… maybe I'm just being overly sensitive, but it feels like you've been carrying a lot. If you're exhausted, that's completely okayy. You've come this far and you've been trying, don't forget that yaa. About your exams, just take it step by step. You don't have to get everything instantly, what matters is that you're putting in the effort and understanding things little by little. Please don't be so hard on yourself.
If you're tired, rest. If your head feels heavy, pause for a bit. You don't have to be strong all the time. Oh and by the wayy, if I don't double my letters when I type, it doesn't mean I'm in a bad mood or anything. I'm always happy whenever we talk. Sometimes I get so carried away that I don't even realize how much time has passed while I'm talking to you. I'm saying this just so you know that I genuinely care about you.`;

  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowFinalMessage(true);
        }, 2000);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-center space-y-4 sm:space-y-6 max-w-md mx-auto px-4">
      {/* Letter box with glow effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div
          className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/90 to-pink-50/90 rounded-2xl sm:rounded-3xl border-2 border-pink-200 backdrop-blur-lg shadow-2xl relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-2 left-2">
            <div className="w-4 h-4 bg-pink-300 rounded-full" />
          </div>
          <div className="absolute top-2 right-2">
            <div className="w-3 h-3 bg-pink-300 rounded-sm rotate-45" />
          </div>
          <div className="absolute bottom-2 left-2">
            <div className="w-4 h-4 border-2 border-pink-300 rounded-full" />
          </div>
          <div className="absolute bottom-2 right-2">
            <div className="w-3 h-3 bg-gradient-to-br from-pink-300 to-rose-300 rounded-lg" />
          </div>

          {/* Letter content */}
          <div className="text-left space-y-4">
            <div className="text-sm sm:text-base text-pink-800 leading-relaxed whitespace-pre-wrap font-medium">
              {displayedText}
              {displayedText.length < fullText.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-pink-400 ml-1"
                />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showFinalMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl sm:text-2xl font-bold text-pink-800 px-4"
            ></motion.div>

            {/* Final decorative hearts */}
            <motion.div
              className="flex justify-center space-x-2 text-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="flex gap-2 justify-center">





              </div>
            </motion.div>

            {onBackToStart && (
            <button
                onClick={onBackToStart}
                className="px-4 py-2 bg-pink-600 text-white rounded-xl shadow-md hover:bg-pink-700 transition"
            >
                Back to Start
            </button>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default SecretLetterPage;











