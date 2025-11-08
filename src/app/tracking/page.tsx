'use client';

import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card-custom';
import { Badge } from '@/components/ui/badge-custom';
import { Button } from '@/components/ui/button-custom';
import { mockFeedback, mockCompanyResponses } from '@/lib/mockData';
import { CheckCircle2, Clock, AlertCircle, ArrowRight, Calendar, Users } from 'lucide-react';

export default function ResolutionTrackingPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolved':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'In Progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'Under Review':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getResponseBadge = (status: string) => {
    switch (status) {
      case 'fix_deployed':
        return <Badge variant="success">Fix Deployed</Badge>;
      case 'investigating':
        return <Badge variant="warning">Investigating</Badge>;
      case 'update_available':
        return <Badge variant="info">Update Available</Badge>;
      default:
        return <Badge variant="default">Pending</Badge>;
    }
  };

  const getProgressPercentage = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 25;
      case 'Under Review':
        return 50;
      case 'In Progress':
        return 75;
      case 'Resolved':
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />

      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[hsl(var(--foreground))]">
            Resolution Tracking Center
          </h1>
          <p className="text-[hsl(var(--muted-foreground))] text-base">
            Track how your feedback transforms into actual platform improvements
          </p>
        </div>

        {/* Resolution Journey Timeline */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Your Feedback Journey</CardTitle>
            <CardDescription>See how feedback moves from submission to resolution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between relative">
              {/* Timeline Line */}
              <div className="absolute top-5 left-0 w-full h-1 bg-[hsl(var(--border))]">
                <div className="h-full bg-[hsl(var(--primary))] w-1/2 transition-all"></div>
              </div>

              {/* Timeline Steps */}
              {['Submitted', 'Under Review', 'In Progress', 'Resolved'].map((step, index) => (
                <div key={step} className="flex flex-col items-center z-10 flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      index <= 1
                        ? 'bg-[hsl(var(--primary))] text-white'
                        : 'bg-white border-2 border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]'
                    }`}
                  >
                    {index <= 1 ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-[hsl(var(--foreground))]">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tracked Issues */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Issue List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-[hsl(var(--foreground))]">
                Tracked Issues
              </h2>
              <Button variant="outline" size="sm">
                Filter by Status
              </Button>
            </div>

            {mockFeedback.slice(0, 4).map((feedback) => {
              const response = mockCompanyResponses.find((r) => r.feedbackId === feedback.id);
              const progress = getProgressPercentage(feedback.status);

              return (
                <Card key={feedback.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    {/* Issue Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        {getStatusIcon(feedback.status)}
                        <div>
                          <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-1">
                            {feedback.title}
                          </h3>
                          <p className="text-sm text-[hsl(var(--muted-foreground))]">
                            {feedback.description}
                          </p>
                        </div>
                      </div>
                      <Badge variant="default">{feedback.status}</Badge>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-[hsl(var(--muted-foreground))]">
                          Progress
                        </span>
                        <span className="text-xs font-semibold text-[hsl(var(--foreground))]">
                          {progress}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-[hsl(var(--border))] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[hsl(var(--primary))] transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Company Response */}
                    {response && (
                      <div className="bg-[hsl(var(--accent))] rounded-[var(--radius)] p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          {getResponseBadge(response.status)}
                          {response.eta && (
                            <span className="text-xs text-[hsl(var(--muted-foreground))]">
                              ETA: {response.eta}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[hsl(var(--foreground))]">{response.message}</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-[hsl(var(--muted-foreground))]">
                          <Users className="w-3 h-3" />
                          <span>{response.respondedBy}</span>
                          <span>•</span>
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(response.respondedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    )}

                    {/* Issue Metadata */}
                    <div className="flex items-center justify-between text-xs text-[hsl(var(--muted-foreground))]">
                      <span>
                        Submitted {new Date(feedback.createdAt).toLocaleDateString()}
                      </span>
                      <Button variant="ghost" size="sm" className="gap-1">
                        View Details
                        <ArrowRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Right Column - Stats & Impact */}
          <div className="space-y-6">
            {/* Your Impact Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
                <CardDescription>Your contribution to platform improvements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-4 border-b border-[hsl(var(--border))]">
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">12</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">Suggestions Implemented</div>
                </div>
                <div className="text-center py-4 border-b border-[hsl(var(--border))]">
                  <div className="text-3xl font-bold text-green-600">85%</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">Credibility Score</div>
                </div>
                <div className="text-center py-4">
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">23</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">Total Feedback Submitted</div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Resolutions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Resolutions</CardTitle>
                <CardDescription>Latest issues marked as resolved</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-[hsl(var(--border))]">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[hsl(var(--foreground))] mb-1">
                      PDF Export Fixed
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
                      Resolved in 3 days
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-[hsl(var(--border))]">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[hsl(var(--foreground))] mb-1">
                      Mobile Navigation
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
                      Resolved in 5 days
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[hsl(var(--foreground))] mb-1">
                      Search Performance
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
                      Resolved in 2 days
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Milestones */}
            <Card className="bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary))]">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--primary))] mb-3">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
                    Next Milestone
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">
                    Submit 2 more feedback items to reach Silver Contributor status
                  </p>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-[hsl(var(--primary))] w-[90%]"></div>
                  </div>
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">23/25 submissions</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
