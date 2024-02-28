"use client";
import { useContext } from "react";
import Image from "next/image";
import Languages from "../general/Languages";
import { buttonVariants } from "@/components/ui/button";
import { LanguageContext } from "@/components/context/LanguageContext";

export default function LanguagesNavbar() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <Languages
      trigger={
        <div className={buttonVariants({ variant: "ghost" })}>
          <Image
            src={`/flags/${language}Flag.png`}
            width={35}
            height={17}
            alt="Language"
          />
        </div>
      }
    />
  );
}
