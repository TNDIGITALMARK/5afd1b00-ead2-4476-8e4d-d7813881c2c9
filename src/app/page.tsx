'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button-custom';
import { Card, CardContent } from '@/components/ui/card-custom';
import { Star, MessageSquare, TrendingUp, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Text */}
          <div className="space-y-6">
            <h1 className="text-[2.75rem] leading-[1.2] font-bold text-[hsl(var(--foreground))]">
              Your Feedback.
              <br />
              Our Fuel for Growth
            </h1>
            <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed max-w-md">
              Experience the Difference
            </p>
            <div>
              <Button size="lg" variant="primary">
                Get Started
              </Button>
            </div>
          </div>

          {/* Right Column - Decorative Elements */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Blue Circle Decorations */}
              <div className="absolute top-10 right-20 w-12 h-12 rounded-full border-2 border-[hsl(var(--primary))] opacity-40"></div>
              <div className="absolute top-20 right-40 w-8 h-8 rounded-full bg-[hsl(var(--accent))]"></div>
              <div className="absolute bottom-32 right-16 w-10 h-10 rounded-full border-2 border-[hsl(var(--primary))] opacity-30"></div>
              <div className="absolute top-1/2 right-32 w-6 h-6 rounded-full bg-[hsl(var(--primary))] opacity-50"></div>
              <div className="absolute bottom-20 right-48 w-4 h-4 rounded-full bg-[hsl(var(--accent))]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <Card>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center">
                  <Star className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">Seamless Input</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                Effortless rating and text fields
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">Constructive Dialogue</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                Two-way communication channels
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 3 */}
          <Card>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">Continuous Improvement</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                Insights for better services
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feedback Form Preview Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Form */}
          <Card>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--foreground))]">
                  Customer Feedback Form
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Share Your Experience?</p>
              </div>

              {/* Star Rating */}
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 text-gray-300 hover:text-[hsl(var(--primary))] cursor-pointer transition-colors"
                  />
                ))}
              </div>

              {/* Textarea */}
              <div>
                <textarea
                  placeholder="Your valuable feedback..."
                  className="w-full h-24 px-4 py-3 border border-[hsl(var(--input))] rounded-[var(--radius-input)] text-[15px] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button variant="primary" size="md" className="w-full">
                Submit Feedback
              </Button>
            </CardContent>
          </Card>

          {/* Right Column - Team Image Placeholder */}
          <div className="hidden lg:block">
            <div className="relative bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary))] rounded-[var(--radius)] overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="w-32 h-32 text-[hsl(var(--primary))] opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))] rounded-[var(--radius)] p-12 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-[hsl(var(--foreground))]">
            Ready to Transform Your Service?
          </h2>
          <Button size="lg" variant="primary">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[hsl(var(--border))] mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Logo & Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="font-semibold text-lg">Customeo</span>
              </div>
            </div>

            {/* Footer Links */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>
                  <Link href="/submit-feedback" className="hover:text-[hsl(var(--primary))] transition-colors">
                    Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>
                  <Link href="/" className="hover:text-[hsl(var(--primary))] transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Careers</h4>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>
                  <Link href="/" className="hover:text-[hsl(var(--primary))] transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Help Center</h4>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>
                  <Link href="/" className="hover:text-[hsl(var(--primary))] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[hsl(var(--border))] mt-8 pt-6 text-center">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">© 2025 Customeo. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}