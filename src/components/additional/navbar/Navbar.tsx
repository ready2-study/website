import Link from "next/link";
import React from "react";
import Underline from "./Underline";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MobileNavigation } from "./MobileNavigation";
import LanguagesNavbar from "./LanguagesNavbar";

const navNames: string[] = ["Questions", "Tutoring", "About"];

const NavigationLink = ({ linkName }: { linkName: string }) => {
  return (
    <Link
      className="flex flex-col min-w-[70px] items-center text-lg mx-8"
      href={`/${linkName.toLowerCase()}`}
    >
      <div className="pt-[28px]">{linkName}</div>
      <Underline linkName={linkName} widthProp={70} heightProp={10} />
    </Link>
  );
};

const Navigation = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex flex-col items-center">
        {/* not the perfect solution but im not sure how to do it better*/}
        <div className="flex text-3xl pt-[28px]">
          Ready2<div className="text-additional">.Study</div>
        </div>
        <Underline linkName="" widthProp={190} heightProp={27} />
      </Link>
      <div className="hidden xl:flex mx-5">
        {navNames.map((name: string) => (
          <NavigationLink key={name} linkName={name} />
        ))}
      </div>
    </div>
  );
};

const AuthSection = () => {
  return (
    <div className="hidden xl:flex items-center justify-center">
      <LanguagesNavbar />
      <div className="flex items-center justify-center">
        <Link
          href="/log-in"
          className={cn("ml-4", buttonVariants({ variant: "ghost" }))}
        >
          Log In
        </Link>
        <Link href="/sign-up" className={cn("ml-4", buttonVariants())}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <div className="flex justify-center w-screen p-5">
      <div className="w-box font-bold flex items-center justify-between">
        <Navigation />
        <AuthSection />
        <MobileNavigation />
      </div>
    </div>
  );
}
