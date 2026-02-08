
import React from 'react';
import { MOCK_STORES } from '../constants';
import { Heart, ShoppingBag, Star } from 'lucide-react';

interface FavoritesProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectStore: (store: any) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ favorites, onToggleFavorite, onSelectStore }) => {
  const favoriteStores = MOCK_STORES.filter(s => favorites.includes(s.id));

  return (
    <div className="p-4 space-y-6 pb-24 animate-in fade-in duration-300">
      <h2 className="text-2xl font-black text-slate-800 tracking-tight">Mes Favoris ❤️</h2>
      
      {favoriteStores.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 opacity-50">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-slate-300" />
          </div>
          <p className="text-slate-500 font-medium">Vous n'avez pas encore de favoris.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {favoriteStores.map(store => (
            <div 
              key={store.id}
              className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm relative group active:scale-[0.98] transition-all"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); onToggleFavorite(store.id); }}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md"
              >
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              </button>
              <div onClick={() => onSelectStore(store)} className="cursor-pointer">
                <img src={store.image} className="w-full h-32 object-cover" alt={store.name} />
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-800">{store.name}</h4>
                    <p className="text-[10px] text-slate-400 capitalize font-medium">{store.category} • Livraison 15 DH</p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="text-[10px] font-bold text-amber-700">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
