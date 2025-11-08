'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button-custom';

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-[hsl(var(--border))]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-lg text-[hsl(var(--foreground))]">Customeo</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[15px] text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/submit-feedback"
              className="text-[15px] text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/dashboard"
              className="text-[15px] text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/tracking"
              className="text-[15px] text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/"
              className="text-[15px] text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-[15px] text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="md" variant="primary">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg
              className="w-6 h-6 text-[hsl(var(--foreground))]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
