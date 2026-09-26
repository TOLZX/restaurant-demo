import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import type { CSSProperties } from "react";

export default function Footer() {
  return (
    <footer
  className="footer"
  style={{ "--footer-name": `"${restaurant.name}"` } as React.CSSProperties}
>
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              {restaurant.name}
            </Link>

            <p>
              {restaurant.tagline}
              <br />
              {restaurant.description}
            </p>
          </div>

          <div className="footer-column">
            <span>Explore</span>

            <Link href="/#about">About</Link>

            <Link href="/menu">Menu</Link>

            <Link href="/#experience">Experience</Link>

            <Link href="/#gallery">Gallery</Link>
          </div>

          <div className="footer-column">
            <span>Connect</span>

            <a
              href={restaurant.social.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <ArrowUpRight size={14} />
            </a>

            <a
              href={restaurant.social.facebook}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
              <ArrowUpRight size={14} />
            </a>

            <a
              href={restaurant.social.tiktok}
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
              {restaurant.location.address}
              <br />
              {restaurant.location.city}
            </p>

            <a href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}>
              {restaurant.contact.phone}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {restaurant.name}.
            All rights reserved.
          </span>

          <a href="/#home" className="back-to-top">
            Back to top
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
