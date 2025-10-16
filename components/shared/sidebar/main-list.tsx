"use client";

import GeneralList from "@/components/shared/sidebar/general-list";
import useActivePathname from "@/hooks/use-active-pathname";
import {
  CalendarCheckIcon,
  HomeIcon,
  LayoutDashboardIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";

const main = [
  {
    icon: HomeIcon,
    name: "Home",
    href: "/",
  },
  {
    icon: LayoutDashboardIcon,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: CalendarCheckIcon,
    name: "Todo",
    href: "/todo",
  },
  {
    icon: SettingsIcon,
    name: "Settings",
    href: "/settings",
  },
];

export default function MainList() {
  const { checkActivePathname } = useActivePathname();

  return (
    <GeneralList label="Main">
      {main.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 py-1.5 px-2 rounded-md hover hover:bg-muted/50 relative ${
              checkActivePathname(item.href) &&
              "bg-muted/50 !text-foreground before:absolute before:top-0 before:left-0 before:w-0.5 before:h-full before:bg-foreground"
            }`}
          >
            <Icon className="size-4" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </GeneralList>
  );
}
