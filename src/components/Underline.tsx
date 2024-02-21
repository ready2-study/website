"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

type UnderlineProps = {
  linkName: string;
  widthProp: number;
  heightProp: number;
};

export default function Underline({
  linkName,
  widthProp,
  heightProp,
}: UnderlineProps) {
  const path = usePathname();

  return (
    <div>
      {path === linkName ? (
        <Image
          src="underline.svg"
          width={widthProp}
          height={heightProp}
          alt="underline"
          className={path === linkName ? "block" : "hidden"}
        />
      ) : (
        <div className={`w-[${widthProp}px] h-[28px]`} />
      )}
    </div>
  );
}
