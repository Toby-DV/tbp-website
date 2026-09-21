"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Readex_Pro } from "next/font/google";

const readexPro = Readex_Pro({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const leftLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/our-team", label: "Our Team" },
];

const rightLinks = [
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/contact", label: "Contact" },
];

function NavGroup({ links }: { links: typeof leftLinks }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-24">
      {links.map((link) => {
        const isActive =
          pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`${readexPro.className} text-lg font-medium tracking-wide text-brand underline-offset-4 transition-colors hover:text-brand-accent ${
              isActive ? "underline" : "no-underline"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Header() {
  return (
    <header className="flex h-40 items-center justify-center gap-12 border-b border-black/5 bg-white px-12">
      <NavGroup links={leftLinks} />
      <Link href="/" aria-label="Team Bath Prosthetics home">
        <Image
          src="/tbp-logo.jpeg"
          alt="Team Bath Prosthetics logo"
          width={128}
          height={128}
          priority
          className="h-28 w-28 object-contain"
        />
      </Link>
      <NavGroup links={rightLinks} />
    </header>
  );
}
