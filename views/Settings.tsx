
import React from 'react';
import { UserProfile, Language } from '../types';
import { LogOut, Bell, Shield, CreditCard, ChevronRight, User, Headset, Heart } from 'lucide-react';
import { TRANSLATIONS } from '../constants';

interface SettingsProps {
  user: UserProfile | null;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onLogout: () => void;
  onHelp: () => void;
  onGoFavorites?: () => void;
}

const Settings: React.FC<SettingsProps> = ({ user, language, onLanguageChange, onLogout, onHelp, onGoFavorites }) => {
  const t = (key: string) => TRANSLATIONS[language][key] || key;

  const menuItems = [
    { icon: <Heart className="w-5 h-5" />, label: "Mes Favoris", color: 'text-red-500 bg-red-50', action: onGoFavorites || (() => {}) },
    { icon: <Bell className="w-5 h-5" />, label: t('notifications'), color: 'text-blue-500 bg-blue-50', action: () => {} },
    { icon: <CreditCard className="w-5 h-5" />, label: t('payments'), color: 'text-purple-500 bg-purple-50', action: () => {} },
    { icon: <Headset className="w-5 h-5" />, label: t('help'), color: 'text-orange-500 bg-orange-50', action: onHelp },
    { icon: <Shield className="w-5 h-5" />, label: t('privacy'), color: 'text-emerald-500 bg-emerald-50', action: () => {} },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  return (
    <div className="p-4 space-y-8 pb-24 animate-in fade-in duration-300">
      <h2 className="text-2xl font-black text-slate-800 tracking-tight">{t('profile')}</h2>

      <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 flex items-center gap-4">
        <div className="w-20 h-20 bg-orange-100 rounded-[1.75rem] flex items-center justify-center text-orange-600">
          <User className="w-10 h-10" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-black text-slate-800">{user?.fullName || 'Utilisateur'}</h3>
          <p className="text-sm text-slate-400 font-medium">{user?.phone || '+212 6XX XXX XXX'}</p>
          <button className="text-orange-600 text-xs font-black bg-orange-50 px-3 py-1 rounded-full">{t('edit')}</button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">{t('language')}</h3>
        <div className="bg-white rounded-3xl border border-slate-100 p-2 flex gap-1">
           {languages.map((lang) => (
             <button
               key={lang.code}
               onClick={() => onLanguageChange(lang.code)}
               className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-2xl transition-all ${language === lang.code ? 'bg-slate-900 text-white shadow-lg scale-[1.02]' : 'bg-transparent text-slate-400'}`}
             >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-[10px] font-black uppercase tracking-tight">{lang.label}</span>
             </button>
           ))}
        </div>
      </div>

      <div className="space-y-3">
        {menuItems.map((item, idx) => (
          <button 
            key={idx}
            onClick={item.action}
            className="w-full flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-50 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl ${item.color}`}>
                {item.icon}
              </div>
              <span className="font-bold text-slate-700">{item.label}</span>
            </div>
            <ChevronRight className={`w-5 h-5 text-slate-300 ${language === 'ar' ? 'rotate-180' : ''}`} />
          </button>
        ))}
      </div>

      <button 
        onClick={onLogout}
        className="w-full mt-4 flex items-center justify-center gap-2 p-5 bg-red-50 text-red-600 rounded-3xl font-black active:scale-95 transition-all uppercase tracking-widest text-sm"
      >
        <LogOut className="w-5 h-5" />
        {t('logout')}
      </button>
      
      <p className="text-center text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">Veetaa v1.1.0 • Made in Morocco 🇲🇦</p>
    </div>
  );
};

export default Settings;
