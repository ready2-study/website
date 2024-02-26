"use client";

import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";

const flagDemention: number = 20;
const unknownFlagUrl: string =
  "https://utfs.io/f/4a917086-b96b-4cd7-818c-91bb8e6531e8-go1iru.png";

const countries: string[] = ["English", "Polish"];

const Country = ({ country }: { country: string }) => {
  return (
    <DropdownMenuRadioItem className="flex items-center" value={country}>
      <Image
        className="mr-2"
        src={`/flags/${country}Flag.png`}
        width={flagDemention}
        height={flagDemention}
        alt={`${country}Flag`}
      />
      {country}
    </DropdownMenuRadioItem>
  );
};

const Languages = () => {
  const [language, setLanguage] = useState<string>("English");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className={buttonVariants({ variant: "ghost" })}>
          <Image
            src={`/flags/${language}Flag.png`}
            width={35}
            height={17}
            alt="Language"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          {countries.map((country: string) => (
            <Country key={country} country={country} />
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Languages;
