"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

import { restaurant } from "@/config/restaurant";
import { hero } from "@/config/hero";

export default function Hero() {
  const { scrollY } = useScroll();

const backgroundScale = useTransform(
  scrollY,
  [0, 700],
  [1, 1.12]
);

const backgroundY = useTransform(
  scrollY,
  [0, 700],
  [0, 80]
);

const contentY = useTransform(
  scrollY,
  [0, 500],
  [0, -100]
);

const contentOpacity = useTransform(
  scrollY,
  [0, 450],
  [1, 0]
);

const scrollIndicatorOpacity = useTransform(
  scrollY,
  [0, 150],
  [1, 0]
);

  return (
    <section className="hero">
      <motion.div
  className="hero-background"
  style={{
    scale: backgroundScale,
    y: backgroundY,
  }}
>
        <img
          src={hero.image}
          alt={hero.imageAlt}
        />

        <div className="hero-overlay" />
      </motion.div>

      <div className="hero-content container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <p className="subtitle">{restaurant.tagline}</p>

          <h1 className="hero-title">
            {hero.title}
            <br />
            <span>{hero.highlightedTitle}</span>
          </h1>

          <p className="hero-description">
            {restaurant.description}
          </p>

          <div className="hero-actions">
            <Link href="/menu" className="btn btn-primary">
              {hero.primaryButton}
              <ArrowRight size={16} />
            </Link>

            <Link href="#reservation" className="btn btn-outline">
              {hero.secondaryButton}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        style={{
  opacity: scrollIndicatorOpacity,
}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
      >
        <span>Scroll to explore</span>

        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}