'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Overview' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/practice', label: 'Practice Lab' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
];

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header">
      <div className="shell">
        <Link className="brand" href="/">
          <Image src="/logo.svg" alt="PM Elite Skills" width={160} height={40} />
        </Link>
        <nav className="primary-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <Link className="btn ghost" href="/login">
            Login
          </Link>
          <Link className="btn primary" href="/#cta">
            Start practicing
          </Link>
        </div>
      </div>
    </header>
  );
}
