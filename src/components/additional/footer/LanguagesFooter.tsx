"use client";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import Languages from "../general/Languages";
import { LanguageContext } from "@/components/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguagesNavbar() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <Languages
      trigger={
        <Button className="rounded-[50px]">
          <Globe className="mr-2" />
          {language}
        </Button>
      }
    />
  );
}
