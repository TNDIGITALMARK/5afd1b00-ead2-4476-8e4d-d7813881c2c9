'use client';

import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card-custom';
import { Badge } from '@/components/ui/badge-custom';
import { Button } from '@/components/ui/button-custom';
import { mockFeedback, platformMetrics, trendingIssues } from '@/lib/mockData';
import { TrendingUp, TrendingDown, Minus, ThumbsUp, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export default function CommunityDashboardPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 'info';
      case 'Under Review':
        return 'warning';
      case 'In Progress':
        return 'default';
      case 'Resolved':
        return 'success';
      default:
        return 'default';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent':
        return 'error';
      case 'High':
        return 'warning';
      case 'Medium':
        return 'info';
      case 'Low':
        return 'default';
      default:
        return 'default';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-green-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />

      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[hsl(var(--foreground))]">
            Community Feedback Dashboard
          </h1>
          <p className="text-[hsl(var(--muted-foreground))] text-base">
            Real-time insights into platform feedback, trending issues, and company responses
          </p>
        </div>

        {/* Platform Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[hsl(var(--muted-foreground))]">Satisfaction Score</span>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-[hsl(var(--foreground))]">
                {platformMetrics.currentSatisfactionScore}/10
              </div>
              <div className="text-xs text-green-600 mt-1">
                +{(platformMetrics.currentSatisfactionScore - platformMetrics.previousSatisfactionScore).toFixed(1)} from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[hsl(var(--muted-foreground))]">Total Feedback</span>
                <MessageCircle className="w-4 h-4 text-[hsl(var(--primary))]" />
              </div>
              <div className="text-3xl font-bold text-[hsl(var(--foreground))]">
                {platformMetrics.totalFeedbackSubmitted.toLocaleString()}
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                Submitted by community
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[hsl(var(--muted-foreground))]">Issues Resolved</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-[hsl(var(--foreground))]">
                {platformMetrics.resolvedIssues}
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                {Math.round((platformMetrics.resolvedIssues / platformMetrics.totalFeedbackSubmitted) * 100)}% resolution rate
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[hsl(var(--muted-foreground))]">Avg Resolution</span>
                <Clock className="w-4 h-4 text-[hsl(var(--primary))]" />
              </div>
              <div className="text-3xl font-bold text-[hsl(var(--foreground))]">
                {platformMetrics.averageResolutionTime}
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                Time to resolve issues
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Feedback List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-[hsl(var(--foreground))]">
                Recent Feedback
              </h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Sort
                </Button>
              </div>
            </div>

            {mockFeedback.map((feedback) => (
              <Card key={feedback.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
                        {feedback.title}
                      </h3>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
                        {feedback.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <ThumbsUp className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
                      <span className="text-sm font-medium text-[hsl(var(--foreground))]">
                        {feedback.votes}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant={getStatusColor(feedback.status)}>
                      {feedback.status}
                    </Badge>
                    <Badge variant={getPriorityColor(feedback.priority)}>
                      {feedback.priority} Priority
                    </Badge>
                    <Badge variant="default">
                      {feedback.category}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[hsl(var(--muted-foreground))]">
                    <span>
                      Submitted by {feedback.author} • {new Date(feedback.createdAt).toLocaleDateString()}
                    </span>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column - Trending & Stats */}
          <div className="space-y-6">
            {/* Trending Issues */}
            <Card>
              <CardHeader>
                <CardTitle>Trending Issues</CardTitle>
                <CardDescription>Most discussed categories this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingIssues.map((issue) => (
                  <div key={issue.category} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-[hsl(var(--foreground))]">
                        {issue.category}
                      </div>
                      <div className="text-xs text-[hsl(var(--muted-foreground))]">
                        {issue.count} reports
                      </div>
                    </div>
                    {getTrendIcon(issue.trend)}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Company Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Company Activity</CardTitle>
                <CardDescription>Recent responses and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-[hsl(var(--border))]">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[hsl(var(--foreground))] mb-1">
                      Fix Deployed
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
                      PDF export issue resolved
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                      2 hours ago
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-[hsl(var(--border))]">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[hsl(var(--foreground))] mb-1">
                      Under Investigation
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
                      Login issues being reviewed
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                      5 hours ago
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[hsl(var(--foreground))] mb-1">
                      In Development
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
                      Dark mode feature in progress
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                      1 day ago
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Feedback CTA */}
            <Card className="bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary))]">
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
                  Have Feedback?
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                  Share your experience and help shape the future of our platform
                </p>
                <Button variant="primary" size="md" className="w-full">
                  Submit Feedback
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
