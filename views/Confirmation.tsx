
import React, { useState } from 'react';
import { Order } from '../types';
import { Check, Star, Home as HomeIcon, MapPin, ThumbsUp, ThumbsDown } from 'lucide-react';

interface ConfirmationProps {
  order: Order;
  onHome: () => void;
  onTrack: () => void;
  onRate: (id: string, storeRating: number, driverRating: number) => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ order, onHome, onTrack, onRate }) => {
  const [storeRating, setStoreRating] = useState(0);
  const [driverRating, setDriverRating] = useState(0);
  const [rated, setRated] = useState(false);

  const handleSubmitRating = () => {
    onRate(order.id, storeRating, driverRating);
    setRated(true);
  };

  return (
    <div className="min-h-screen flex flex-col p-6 space-y-8 text-center bg-slate-50 overflow-y-auto pb-10">
      <div className="mt-8 space-y-4">
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto shadow-xl shadow-emerald-200 animate-bounce">
          <Check className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">C'est parti ! 🚀</h1>
        <p className="text-slate-500 font-medium max-w-[280px] mx-auto text-sm">
          Votre commande <span className="text-slate-900 font-black">#{order.id}</span> est confirmée. Préparez-vous à déguster !
        </p>
      </div>

      <button 
        onClick={onTrack}
        className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl shadow-orange-100 hover:scale-[1.02] active:scale-95 transition-all"
      >
        <MapPin className="w-5 h-5" />
        Suivre ma livraison
      </button>

      <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 text-left space-y-6">
        <h3 className="font-black text-slate-800 text-lg">Votre avis compte ✨</h3>
        
        {!rated ? (
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Notez le restaurant</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setStoreRating(star)} className="transition-transform active:scale-90">
                    <Star className={`w-8 h-8 ${star <= storeRating ? 'text-amber-400 fill-amber-400' : 'text-slate-100'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Notez le livreur</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setDriverRating(star)} className="transition-transform active:scale-90">
                    <Star className={`w-8 h-8 ${star <= driverRating ? 'text-orange-500 fill-orange-500' : 'text-slate-100'}`} />
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleSubmitRating}
              disabled={storeRating === 0 || driverRating === 0}
              className="w-full bg-slate-900 text-white py-3 rounded-2xl font-bold text-sm disabled:opacity-20 transition-all"
            >
              Envoyer les avis
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center py-4 space-y-2">
             <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
                <ThumbsUp className="w-6 h-6" />
             </div>
             <p className="font-bold text-emerald-600 text-sm">Merci pour votre retour !</p>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4">
        <button 
          onClick={onHome}
          className="w-full bg-white text-slate-900 border-2 border-slate-100 py-4 rounded-2xl font-black flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
        >
          <HomeIcon className="w-5 h-5" />
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
