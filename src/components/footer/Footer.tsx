import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              LAVÉRA
            </Link>

            <p>
              Modern African dining,
              <br />
              reimagined for today.
            </p>
          </div>

          <div className="footer-column">
            <span>Explore</span>

            <Link href="#about">About</Link>

            <Link href="#full-menu">Menu</Link>

            <Link href="#experience">
              Experience
            </Link>

            <Link href="#gallery">
              Gallery
            </Link>
          </div>

          <div className="footer-column">
            <span>Connect</span>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="footer-column">
            <span>Visit</span>

            <p>
              14 Victoria Island
              <br />
              Lagos, Nigeria
            </p>

            <a href="tel:+2348000000000">
              +234 800 000 0000
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} LAVÉRA.
            All rights reserved.
          </span>

          <a href="#top" className="back-to-top">
            Back to top
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}