import Link from "next/link";
import React from "react";

const navNames: string[] = ["Questions", "Tutoring", "About"];

const NavigationLink = ({ linkName }: { linkName: string }) => {
  return (
    <Link className="text-sm mx-5" href={`/${linkName}`}>
      {linkName}
    </Link>
  );
};

const Navigation = () => {
  return (
    <div className="flex items-center">
      <Link className="flex text-3xl" href="/">
        Ready2<div className="text-additional">.Study</div>
      </Link>
      <div className="flex mx-5">
        {navNames.map((name: string) => (
          <NavigationLink key={name} linkName={name} />
        ))}
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <div className="font-bold py-6">
      <Navigation />
    </div>
  );
}
