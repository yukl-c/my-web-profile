"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-amber-200 bg-stone-50/95 backdrop-blur dark:border-amber-900 dark:bg-stone-950/95">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-sm font-semibold text-amber-800 dark:text-amber-200">
          My Web Profile
        </Link>
        <ul className="flex flex-wrap items-center gap-2 text-sm md:gap-3">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded px-2 py-1 transition-colors ${
                    isActive
                      ? "bg-amber-200 text-amber-950 dark:bg-amber-800 dark:text-amber-100"
                      : "text-stone-700 hover:bg-amber-100 hover:text-amber-900 dark:text-stone-300 dark:hover:bg-amber-900 dark:hover:text-amber-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
