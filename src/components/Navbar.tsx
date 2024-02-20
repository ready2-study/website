import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="font-bold py-6">
      <Link className="flex text-3xl" href="/">
        Ready2<div className="text-additional">.Study</div>
      </Link>
    </div>
  );
}
