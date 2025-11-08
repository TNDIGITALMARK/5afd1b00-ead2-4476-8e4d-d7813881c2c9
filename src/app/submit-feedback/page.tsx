'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button-custom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card-custom';
import { Input } from '@/components/ui/input-custom';
import { Textarea } from '@/components/ui/textarea-custom';
import { Star, Send, Smile, Meh, Frown } from 'lucide-react';

export default function SubmitFeedbackPage() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [sentiment, setSentiment] = useState<'positive' | 'neutral' | 'negative' | null>(null);
  const [category, setCategory] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ rating, sentiment, category, title, description });
    alert('Feedback submitted successfully! Thank you for helping us improve.');
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />

      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[hsl(var(--foreground))]">
            Submit Your Feedback
          </h1>
          <p className="text-[hsl(var(--muted-foreground))] text-base">
            Your voice matters! Share your experience and help us create a better platform for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Feedback Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Share Your Experience</CardTitle>
                <CardDescription>
                  Tell us what you think - every piece of feedback helps us improve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Rating Section */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-[hsl(var(--foreground))]">
                      Rate Your Experience *
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${
                              star <= (hoveredRating || rating)
                                ? 'fill-[hsl(var(--primary))] text-[hsl(var(--primary))]'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sentiment Section */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-[hsl(var(--foreground))]">
                      How Are You Feeling?
                    </label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setSentiment('positive')}
                        className={`flex-1 p-4 rounded-[var(--radius)] border-2 transition-all ${
                          sentiment === 'positive'
                            ? 'border-[hsl(var(--primary))] bg-[hsl(var(--accent))]'
                            : 'border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]'
                        }`}
                      >
                        <Smile className="w-8 h-8 mx-auto mb-2 text-green-500" />
                        <span className="text-sm font-medium">Happy</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSentiment('neutral')}
                        className={`flex-1 p-4 rounded-[var(--radius)] border-2 transition-all ${
                          sentiment === 'neutral'
                            ? 'border-[hsl(var(--primary))] bg-[hsl(var(--accent))]'
                            : 'border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]'
                        }`}
                      >
                        <Meh className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                        <span className="text-sm font-medium">Neutral</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSentiment('negative')}
                        className={`flex-1 p-4 rounded-[var(--radius)] border-2 transition-all ${
                          sentiment === 'negative'
                            ? 'border-[hsl(var(--primary))] bg-[hsl(var(--accent))]'
                            : 'border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]'
                        }`}
                      >
                        <Frown className="w-8 h-8 mx-auto mb-2 text-red-500" />
                        <span className="text-sm font-medium">Frustrated</span>
                      </button>
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">
                      Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-[hsl(var(--input))] rounded-[var(--radius-input)] text-[15px] bg-[hsl(var(--card))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition-all"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="Performance Issues">Performance Issues</option>
                      <option value="Feature Requests">Feature Requests</option>
                      <option value="Bug Reports">Bug Reports</option>
                      <option value="User Experience">User Experience</option>
                    </select>
                  </div>

                  {/* Feedback Title */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">
                      Feedback Title *
                    </label>
                    <Input
                      type="text"
                      placeholder="Brief summary of your feedback"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>

                  {/* Feedback Description */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">
                      Detailed Feedback *
                    </label>
                    <Textarea
                      placeholder="Tell us more about your experience. The more details you provide, the better we can address your feedback."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  {/* Priority Ranking */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">
                      How Important Is This?
                    </label>
                    <div className="flex gap-2">
                      {['Low', 'Medium', 'High', 'Urgent'].map((priority) => (
                        <button
                          key={priority}
                          type="button"
                          className="flex-1 px-4 py-2 rounded-[var(--radius-button)] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))] text-sm font-medium transition-all"
                        >
                          {priority}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Submit Feedback
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Info & Stats */}
          <div className="space-y-6">
            {/* Why Your Feedback Matters */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Why Your Voice Matters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center flex-shrink-0">
                    <span className="text-[hsl(var(--primary))] font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Direct Impact</h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      Your feedback directly shapes our roadmap
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center flex-shrink-0">
                    <span className="text-[hsl(var(--primary))] font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Fast Response</h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      We review and respond to feedback within 48 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center flex-shrink-0">
                    <span className="text-[hsl(var(--primary))] font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Community Driven</h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      Join thousands of users making a difference
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feedback Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-4 border-b border-[hsl(var(--border))]">
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">1,847</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">Feedback Submitted</div>
                </div>
                <div className="text-center py-4 border-b border-[hsl(var(--border))]">
                  <div className="text-3xl font-bold text-green-600">423</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">Issues Resolved</div>
                </div>
                <div className="text-center py-4">
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">4.5 days</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">Avg Resolution Time</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
