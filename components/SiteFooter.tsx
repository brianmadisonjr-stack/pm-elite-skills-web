import Link from 'next/link';
import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div>
          <Image src="/logo.svg" alt="PM Elite Skills" width={160} height={40} />
          <p>Premium mastery journeys for project leaders, powered by PM Intelligence Hub.</p>
        </div>
        <div>
          <h4>Resources</h4>
          <Link href="/curriculum">Curriculum</Link>
          <Link href="/practice">Practice Lab</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Connect</h4>
          <Link href="https://www.linkedin.com" target="_blank">LinkedIn</Link>
          <Link href="https://www.youtube.com" target="_blank">YouTube</Link>
          <Link href="/newsletter">Newsletter</Link>
        </div>
      </div>
      <p className="footnote">© {new Date().getFullYear()} PM Elite Skills. All rights reserved.</p>
    </footer>
  );
}
