"use client";

import {
  X,
  Home,
  NotebookPen,
  UserPlus,
  Languages,
  Info,
  KeyRound,
  AlignJustify,
  MessageCircleQuestion,
  LucideIcon,
} from "lucide-react";

import LanguagesComponent from "../general/Languages";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

interface NavigationItemProps {
  icon: LucideIcon;
  title: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon: Icon,
  title,
}) => {
  const path: string = usePathname();
  const formatedTitle: string =
    title.toLowerCase() === "home"
      ? "/"
      : `/${title.toLowerCase().replace(/\s/g, "-")}`;
  const color: string = path === formatedTitle ? "#892DFF" : "#FFFFFF";
  const colorTailwind: string =
    path === formatedTitle ? "text-[#892DFF]" : "text-[#FFFFFF]";

  return (
    <Link href={formatedTitle}>
      <DropdownMenuItem>
        <Icon color={color} className="mr-2 h-4 w-4" />
        <span className={colorTailwind}>{title}</span>
      </DropdownMenuItem>
    </Link>
  );
};

export function MobileNavigation() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="block xl:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            onClick={() => setOpen((prev) => !prev)}
            variant="ghost"
            className="w-50 h-50"
          >
            {open ? (
              <X width={35} height={35} />
            ) : (
              <AlignJustify width={35} height={35} />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="block xl:hidden w-56">
          <DropdownMenuLabel>Navigation</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <NavigationItem icon={Home} title="Home" />
            <NavigationItem icon={MessageCircleQuestion} title="Questions" />
            <NavigationItem icon={NotebookPen} title="Tutoring" />
            <NavigationItem icon={Info} title="About" />
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <NavigationItem icon={KeyRound} title="Log In" />
            <NavigationItem icon={UserPlus} title="Sign Up" />
            <LanguagesComponent
              trigger={
                <DropdownMenuItem>
                  <Languages className="mr-2 h-4 w-4" />
                  <span>Language</span>
                </DropdownMenuItem>
              }
            />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
