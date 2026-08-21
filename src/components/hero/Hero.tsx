"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

import { restaurant } from "@/data/restaurant";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2400&q=85"
          alt="Elegant restaurant dining experience"
        />

        <div className="hero-overlay" />
      </div>

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
            Taste the
            <br />
            <span>extraordinary.</span>
          </h1>

          <p className="hero-description">
            {restaurant.description}
          </p>

          <div className="hero-actions">
            <Link href="#menu" className="btn btn-primary">
              Explore Menu
              <ArrowRight size={16} />
            </Link>

            <Link href="#reservation" className="btn btn-outline">
              Reserve Table
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
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