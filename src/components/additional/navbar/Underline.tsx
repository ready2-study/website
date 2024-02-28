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
          sizes="100vw"
          width={widthProp}
          height={heightProp}
          alt="underline"
          priority={true}
        />
      ) : (
        <div className={`w-[26px] h-[27px]`} />
      )}
    </div>
  );
}
