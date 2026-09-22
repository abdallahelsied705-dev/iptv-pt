import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/site-data";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="brand" href="/" aria-label="IPTV PT — página inicial">
          <span className="brand-mark" aria-hidden="true">
            <Image src="/images/logo-icon.png" alt="" width={42} height={42} />
          </span>
          <span>IPTV PT<small>PORTUGAL</small></span>
        </Link>
        <nav aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
          <Link className="nav-cta" href="/planos">Ver planos</Link>
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
