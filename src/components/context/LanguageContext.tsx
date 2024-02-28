"use client";

import React, { ReactNode, createContext, useState } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "English",
  setLanguage: () => {},
});

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<string>("English");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
