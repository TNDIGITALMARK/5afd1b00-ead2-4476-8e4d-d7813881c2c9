// Mock data for the feedback system

export interface Feedback {
  id: string;
  title: string;
  description: string;
  category: 'Performance Issues' | 'Feature Requests' | 'Bug Reports' | 'User Experience';
  status: 'Submitted' | 'Under Review' | 'In Progress' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  votes: number;
  createdAt: string;
  author: string;
  sentiment: 'positive' | 'neutral' | 'negative';
}

export interface UserProfile {
  id: string;
  name: string;
  credibilityScore: number;
  feedbackSubmitted: number;
  suggestionsImplemented: number;
  avatar: string;
}

export interface CompanyResponse {
  id: string;
  feedbackId: string;
  message: string;
  status: 'investigating' | 'fix_deployed' | 'update_available';
  eta?: string;
  respondedAt: string;
  respondedBy: string;
}

export const mockFeedback: Feedback[] = [
  {
    id: '1',
    title: 'Login Issues - Multiple Failed Attempts',
    description: 'Users reporting 247 instances of login failures across different browsers and devices.',
    category: 'Performance Issues',
    status: 'In Progress',
    priority: 'High',
    votes: 247,
    createdAt: '2024-11-05T10:30:00Z',
    author: 'Sarah Johnson',
    sentiment: 'negative',
  },
  {
    id: '2',
    title: 'Dashboard Loading Speed',
    description: 'Dashboard takes 8+ seconds to load, causing user frustration and abandonment.',
    category: 'Performance Issues',
    status: 'Under Review',
    priority: 'High',
    votes: 189,
    createdAt: '2024-11-06T14:20:00Z',
    author: 'Michael Chen',
    sentiment: 'negative',
  },
  {
    id: '3',
    title: 'Missing Mobile Features',
    description: 'Key features available on desktop are not accessible on mobile app.',
    category: 'Feature Requests',
    status: 'Submitted',
    priority: 'Medium',
    votes: 156,
    createdAt: '2024-11-07T09:15:00Z',
    author: 'Emily Rodriguez',
    sentiment: 'neutral',
  },
  {
    id: '4',
    title: 'Export to PDF Not Working',
    description: 'Export functionality fails when trying to generate PDF reports.',
    category: 'Bug Reports',
    status: 'Resolved',
    priority: 'Medium',
    votes: 93,
    createdAt: '2024-10-28T16:45:00Z',
    author: 'David Kim',
    sentiment: 'negative',
  },
  {
    id: '5',
    title: 'Dark Mode Support',
    description: 'Request for dark mode option to reduce eye strain during extended use.',
    category: 'Feature Requests',
    status: 'In Progress',
    priority: 'Low',
    votes: 312,
    createdAt: '2024-11-01T11:00:00Z',
    author: 'Jessica Martinez',
    sentiment: 'positive',
  },
  {
    id: '6',
    title: 'Notification System Improvements',
    description: 'Users want more granular control over notification preferences.',
    category: 'User Experience',
    status: 'Under Review',
    priority: 'Low',
    votes: 78,
    createdAt: '2024-11-04T13:30:00Z',
    author: 'Alex Thompson',
    sentiment: 'neutral',
  },
];

export const mockUserProfile: UserProfile = {
  id: 'user-1',
  name: 'Current User',
  credibilityScore: 85,
  feedbackSubmitted: 23,
  suggestionsImplemented: 12,
  avatar: '/images/avatar-placeholder.jpg',
};

export const mockCompanyResponses: CompanyResponse[] = [
  {
    id: 'resp-1',
    feedbackId: '1',
    message: 'We are investigating this issue with high priority. Our engineering team has identified the root cause.',
    status: 'investigating',
    eta: '3 days',
    respondedAt: '2024-11-06T15:00:00Z',
    respondedBy: 'Support Team',
  },
  {
    id: 'resp-2',
    feedbackId: '4',
    message: 'Fix deployed! The PDF export functionality has been restored. Thank you for reporting this.',
    status: 'fix_deployed',
    respondedAt: '2024-10-30T10:00:00Z',
    respondedBy: 'Engineering Team',
  },
  {
    id: 'resp-3',
    feedbackId: '5',
    message: 'Great news! Dark mode is currently in development and will be available in the next major release.',
    status: 'update_available',
    eta: '2 weeks',
    respondedAt: '2024-11-03T09:30:00Z',
    respondedBy: 'Product Team',
  },
];

export const platformMetrics = {
  currentSatisfactionScore: 6.8,
  previousSatisfactionScore: 6.0,
  totalFeedbackSubmitted: 1847,
  resolvedIssues: 423,
  averageResolutionTime: '4.5 days',
  activeUsers: 12453,
};

export const trendingIssues = [
  { category: 'Performance Issues', count: 436, trend: 'up' },
  { category: 'Feature Requests', count: 389, trend: 'stable' },
  { category: 'Bug Reports', count: 287, trend: 'down' },
  { category: 'User Experience', count: 178, trend: 'up' },
];
