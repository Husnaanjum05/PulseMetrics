export type TabType = 'report' | 'matrix' | 'actions' | 'pitch';

export interface ClientProfile {
  id: string;
  name: string;
  tier: string;
  fee: string;
  auditPeriod: string;
  avatarUrl: string;
  healthScore: number;
  healthScoreMom: string;
  healthSummary: string;
  totalAudience: string;
  totalAudienceChange: string;
  totalAudienceGrowthPercent: string;
  monthlyReach: string;
  monthlyReachChange: string;
  reelsShare: number;
  feedShare: number;
  engagementRate: string;
  engagementBenchmark: string;
  engagementMom: string;
}

export interface ContentItem {
  id: string;
  title: string;
  subtitle: string;
  format: 'Short Reel' | 'Carousel' | 'Quote Card' | 'Vlog Reel';
  category: 'winners' | 'needs-pivot';
  typeBadge: string;
  letter: 'A' | 'B' | 'C' | 'D';
  publishedDate: string;
  duration?: string;
  slides?: string;
  reach: string;
  saves: string;
  metric3Label: string;
  metric3Value: string;
  isPositiveMetric3: boolean;
  takeawayTitle: string;
  takeawayText: string;
  thumbnailUrl: string;
  retentionPercent?: number;
  reachDelta?: string;
}

export interface ChecklistTask {
  id: number;
  title: string;
  description: string;
  priority: 'High' | 'Medium';
  completed: boolean;
}

export interface ProspectingChannel {
  id: string;
  icon: string;
  name: string;
  tag: string;
  tagColor: string;
  description: string;
}

export interface TargetClient {
  id: string;
  icon: string;
  title: string;
  badge: string;
  badgeType: 'tertiary' | 'primary' | 'secondary';
  description: string;
  rate: string;
}
