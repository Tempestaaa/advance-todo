"use client";

import { usePathname } from "next/navigation";

export default function useActivePathname() {
  const pathname = usePathname();
  const checkActivePathname = (href: string) => href === pathname;

  return { checkActivePathname };
}
