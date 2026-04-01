import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const COOKIE_KEY = 'caffe_alex_cookie_consent';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-coffee-950 border-t border-coffee-800 px-6 py-5 md:py-4">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="text-coffee-200 text-sm leading-relaxed flex-1">
          Utilizziamo cookie tecnici necessari al funzionamento del sito. Nessun dato viene ceduto a terzi a fini pubblicitari.{' '}
          <button
            onClick={() => navigate('/privacy')}
            className="underline underline-offset-2 text-coffee-400 hover:text-white transition-colors"
          >
            Leggi la Privacy Policy
          </button>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2 border border-coffee-700 text-coffee-300 text-xs font-bold tracking-widest uppercase hover:border-coffee-400 hover:text-white transition-all"
          >
            Rifiuta
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 bg-coffee-600 text-white text-xs font-bold tracking-widest uppercase hover:bg-coffee-500 transition-all"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
};
