import { createContext, useContext, useState, useCallback } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('lv');

    const toggle = useCallback(() => {
        setLang(prev => {
            const next = prev === 'lv' ? 'en' : 'lv';
            document.documentElement.lang = next;
            return next;
        });
    }, []);

    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, toggle, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
