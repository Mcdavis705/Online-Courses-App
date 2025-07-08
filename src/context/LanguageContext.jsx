import { createContext, useState } from "react";

export const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {

    //we set initial language either from the local storage or the default 'en
    const initialLang = localStorage.getItem('lang') || 'en';
    const [lang, setLang] = useState(initialLang);


    //Update the local storage when the language is changed
    const changeLang = (newLang) => {
        setLang(newLang);
        localStorage.setItem('lang', newLang)
    };

    // console.log('lang',lang )
    return (
        <LanguageContext.Provider value={{ lang, setLang: changeLang }}>
            {children}
        </LanguageContext.Provider>
    );

};

