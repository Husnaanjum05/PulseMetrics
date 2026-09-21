import { useState } from 'react';
import { ClientProfile } from '../types';
import { ASSETS } from '../data';

interface ReportTabProps {
  client: ClientProfile;
  onScheduleDebrief: () => void;
  onDownloadPdf: () => void;
}

export default function ReportTab({
  client,
  onScheduleDebrief,
  onDownloadPdf,
}: ReportTabProps) {
  const [chartPeriod, setChartPeriod] = useState<'4W' | '8W'>('4W');
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadClick = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      onDownloadPdf();
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full gap-5 pb-6">
      {/* Client Header Card with Brand Backdrop */}
      <div className="relative overflow-hidden rounded-2xl bg-[#262a33] p-5 shadow-xl border border-white/[0.05]">
        {/* Glow Auras */}
        <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-[#8083ff]/20 blur-2xl pointer-events-none" />
        <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-[#00885d]/25 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="relative shrink-0">
              <img
                className="w-12 h-12 rounded-full object-cover shadow-md ring-2 ring-white/10"
                src={client.avatarUrl}
                alt={client.name}
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0a0e16]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#4edea3] shadow-[0_0_6px_rgba(78,222,163,0.9)]" />
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <h2 className="text-[20px] font-bold text-[#dfe2ee] truncate font-display leading-tight">
                  {client.name}
                </h2>
                <span
                  className="material-symbols-outlined text-[#c0c1ff] text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
              <p className="text-[12px] text-[#c7c4d7] truncate mt-0.5">
                {client.tier}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-1 bg-[#0a0e16]/80 px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#c0c1ff] border border-white/5 shadow-sm">
            <span className="material-symbols-outlined text-[14px]">event_repeat</span>
            <span>{client.fee}</span>
          </div>
        </div>

        {/* Tier & Audit Pill Header */}
        <div className="mt-4 pt-2 flex flex-wrap items-center justify-between gap-2 bg-[#0a0e16]/40 p-2.5 rounded-xl border border-white/[0.04]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4edea3] text-[18px]">
              verified_user
            </span>
            <span className="text-[11px] font-semibold text-[#dfe2ee] uppercase tracking-wider">
              {client.auditPeriod}
            </span>
          </div>
          <span className="text-[11px] text-[#4edea3] font-semibold bg-[#4edea3]/10 px-2 py-0.5 rounded-full">
            Active Plan
          </span>
        </div>

        {/* Health Score Radial Meter Section */}
        <div className="mt-4 grid grid-cols-12 items-center gap-3 bg-[#181c24] p-4 rounded-xl border border-white/[0.03]">
          <div className="col-span-4 flex justify-center items-center">
            {/* SVG Ring Progress */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 72 72">
                <circle
                  className="text-[#31353e] fill-none"
                  cx="36"
                  cy="36"
                  r="30"
                  stroke="currentColor"
                  strokeWidth="6"
                />
                <circle
                  className="text-[#4edea3] fill-none transition-all duration-1000"
                  cx="36"
                  cy="36"
                  r="30"
                  stroke="currentColor"
                  strokeDasharray="188.4"
                  strokeDashoffset="22.6"
                  strokeLinecap="round"
                  strokeWidth="6"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-[20px] font-bold text-[#dfe2ee] leading-none font-display">
                  {client.healthScore}
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-tighter text-[#908fa0] mt-0.5">
                  /100
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[12px] font-semibold text-[#dfe2ee]">
                Account Health Score
              </span>
              <span className="inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#00885d]/30 text-[#4edea3]">
                <span className="material-symbols-outlined text-[12px] mr-0.5">trending_up</span>
                {client.healthScoreMom} MoM
              </span>
            </div>
            <p className="text-[12px] text-[#c7c4d7] leading-relaxed">
              {client.healthSummary}
            </p>
          </div>
        </div>
      </div>

      {/* KPI Trend Cards Grid */}
      <div className="grid grid-cols-1 gap-3.5">
        {/* KPI 1: Followers */}
        <div className="rounded-2xl bg-[#1c2028] p-4 shadow-md border border-white/[0.04] flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#908fa0]">
              Total Audience
            </span>
            <div className="w-8 h-8 rounded-lg bg-[#262a33] flex items-center justify-center text-[#c0c1ff]">
              <span className="material-symbols-outlined text-[18px]">group</span>
            </div>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <div className="flex flex-col">
              <span className="text-[32px] font-bold text-[#dfe2ee] leading-tight font-display tracking-tight">
                {client.totalAudience}
              </span>
              <span className="text-[12px] text-[#c7c4d7] mt-0.5">
                Followers across channels
              </span>
            </div>
            
            {/* Sparkline mini bar chart */}
            <div className="flex items-end gap-1.5 h-10 px-2.5 py-1.5 bg-[#0a0e16]/50 rounded-lg border border-white/[0.03]">
              <div className="w-2 rounded-t bg-[#8083ff]/40 h-3" />
              <div className="w-2 rounded-t bg-[#8083ff]/60 h-4" />
              <div className="w-2 rounded-t bg-[#8083ff]/70 h-6" />
              <div className="w-2 rounded-t bg-[#8083ff]/85 h-7" />
              <div className="w-2 rounded-t bg-[#4edea3] h-9 shadow-[0_0_8px_rgba(78,222,163,0.5)]" />
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center gap-2">
            <span className="inline-flex items-center text-[11px] px-2 py-0.5 rounded-full bg-[#00885d]/30 text-[#4edea3] font-medium">
              <span className="material-symbols-outlined text-[12px] mr-1">arrow_outward</span>
              {client.totalAudienceChange} ({client.totalAudienceGrowthPercent})
            </span>
            <span className="text-[12px] text-[#908fa0] truncate">
              vs September cycle
            </span>
          </div>
        </div>

        {/* KPI 2: Reach */}
        <div className="rounded-2xl bg-[#1c2028] p-4 shadow-md border border-white/[0.04] flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#908fa0]">
              Monthly Reach
            </span>
            <div className="w-8 h-8 rounded-lg bg-[#262a33] flex items-center justify-center text-[#d0bcff]">
              <span className="material-symbols-outlined text-[18px]">radar</span>
            </div>
          </div>

          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[32px] font-bold text-[#dfe2ee] leading-tight font-display tracking-tight">
                {client.monthlyReach}
              </span>
              <p className="text-[12px] text-[#c7c4d7] mt-0.5">
                Unique profile impressions
              </p>
            </div>
            <span className="inline-flex items-center text-[11px] px-2 py-0.5 rounded-full bg-[#00885d]/30 text-[#4edea3] font-medium">
              <span className="material-symbols-outlined text-[12px] mr-1">arrow_outward</span>
              {client.monthlyReachChange}
            </span>
          </div>

          {/* Distribution bar (Reels vs Feed) */}
          <div className="mt-4">
            <div className="flex justify-between text-[12px] text-[#c7c4d7] mb-1.5 font-medium">
              <span className="flex items-center gap-1.5 text-[#d0bcff]">
                <span className="w-2 h-2 rounded-full bg-[#d0bcff]" />
                Reels: {client.reelsShare}%
              </span>
              <span className="flex items-center gap-1.5 text-[#c0c1ff]">
                <span className="w-2 h-2 rounded-full bg-[#8083ff]" />
                Feed & Carousel: {client.feedShare}%
              </span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[#0a0e16] overflow-hidden flex">
              <div
                className="h-full bg-[#d0bcff] rounded-l-full transition-all duration-500"
                style={{ width: `${client.reelsShare}%` }}
              />
              <div
                className="h-full bg-[#8083ff] rounded-r-full transition-all duration-500"
                style={{ width: `${client.feedShare}%` }}
              />
            </div>
          </div>
        </div>

        {/* KPI 3: Engagement */}
        <div className="rounded-2xl bg-[#1c2028] p-4 shadow-md border border-white/[0.04] flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#908fa0]">
              Engagement Rate
            </span>
            <div className="w-8 h-8 rounded-lg bg-[#262a33] flex items-center justify-center text-[#4edea3]">
              <span className="material-symbols-outlined text-[18px]">bolt</span>
            </div>
          </div>

          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[32px] font-bold text-[#4edea3] leading-tight font-display tracking-tight">
                {client.engagementRate}
              </span>
              <span className="text-[12px] text-[#c7c4d7] block mt-0.5">
                Beauty Industry Benchmark: {client.engagementBenchmark}
              </span>
            </div>
            <span className="inline-flex items-center text-[11px] px-2 py-0.5 rounded-full bg-[#00885d]/30 text-[#4edea3] font-semibold shadow-[0_0_12px_rgba(78,222,163,0.3)]">
              <span className="material-symbols-outlined text-[12px] mr-1">trending_up</span>
              {client.engagementMom} MoM
            </span>
          </div>

          <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center gap-1.5 text-[12px] text-[#c7c4d7]">
            <span className="material-symbols-outlined text-[#4edea3] text-[16px]">stars</span>
            <span>Performing 2.2x above creator cohort median</span>
          </div>
        </div>
      </div>

      {/* Trajectory Chart Section */}
      <div className="rounded-2xl bg-[#262a33] p-5 shadow-xl border border-white/[0.05] relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-[16px] font-bold text-[#dfe2ee] font-display">
              Weekly Trajectory
            </h3>
            <p className="text-[12px] text-[#908fa0]">
              Follower Growth vs Reach Volume
            </p>
          </div>
          <div className="flex items-center gap-1 bg-[#0a0e16] p-1 rounded-lg border border-white/5">
            <button
              onClick={() => setChartPeriod('4W')}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                chartPeriod === '4W'
                  ? 'bg-[#571bc1] text-[#c4abff] shadow-sm'
                  : 'text-[#908fa0] hover:text-[#dfe2ee]'
              }`}
              type="button"
            >
              4W
            </button>
            <button
              onClick={() => setChartPeriod('8W')}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                chartPeriod === '8W'
                  ? 'bg-[#571bc1] text-[#c4abff] shadow-sm'
                  : 'text-[#908fa0] hover:text-[#dfe2ee]'
              }`}
              type="button"
            >
              8W
            </button>
          </div>
        </div>

        {/* Chart Legend */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 rounded-full bg-[#4edea3]" />
            <span className="text-[11px] text-[#c7c4d7] font-medium">Followers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 rounded-full bg-[#8083ff]" />
            <span className="text-[11px] text-[#c7c4d7] font-medium">Reach (k)</span>
          </div>
        </div>

        {/* Custom SVG Area & Curve Graph */}
        <div className="relative w-full h-44 bg-[#0a0e16]/60 rounded-xl p-2.5 flex flex-col justify-between border border-white/[0.04]">
          <svg className="w-full h-36" fill="none" viewBox="0 0 320 130">
            <defs>
              <linearGradient id="tertiaryGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#4edea3" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#4edea3" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="primaryGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8083ff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#8083ff" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Horizontal grid guides */}
            <line stroke="#31353e" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="320" y1="25" y2="25" />
            <line stroke="#31353e" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="320" y1="65" y2="65" />
            <line stroke="#31353e" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="320" y1="105" y2="105" />

            {/* Area 1 (Reach) */}
            <path
              d={
                chartPeriod === '4W'
                  ? 'M 10 95 Q 85 85 160 55 T 310 30 L 310 125 L 10 125 Z'
                  : 'M 10 100 Q 80 80 150 60 T 310 20 L 310 125 L 10 125 Z'
              }
              fill="url(#primaryGrad)"
            />
            <path
              d={
                chartPeriod === '4W'
                  ? 'M 10 95 Q 85 85 160 55 T 310 30'
                  : 'M 10 100 Q 80 80 150 60 T 310 20'
              }
              stroke="#8083ff"
              strokeLinecap="round"
              strokeWidth="2.5"
            />

            {/* Area 2 (Followers) */}
            <path
              d={
                chartPeriod === '4W'
                  ? 'M 10 110 C 70 100, 110 70, 160 60 C 210 50, 260 30, 310 18 L 310 125 L 10 125 Z'
                  : 'M 10 115 C 60 90, 120 75, 170 50 C 220 35, 270 25, 310 12 L 310 125 L 10 125 Z'
              }
              fill="url(#tertiaryGrad)"
            />
            <path
              d={
                chartPeriod === '4W'
                  ? 'M 10 110 C 70 100, 110 70, 160 60 C 210 50, 260 30, 310 18'
                  : 'M 10 115 C 60 90, 120 75, 170 50 C 220 35, 270 25, 310 12'
              }
              stroke="#4edea3"
              strokeLinecap="round"
              strokeWidth="2.5"
            />

            {/* Weekly Node Indicators */}
            <circle cx="10" cy="110" r="3.5" className="fill-[#1c2028] stroke-[#4edea3]" strokeWidth="2" />
            <circle cx="110" cy="78" r="3.5" className="fill-[#1c2028] stroke-[#4edea3]" strokeWidth="2" />
            <circle cx="210" cy="48" r="3.5" className="fill-[#1c2028] stroke-[#4edea3]" strokeWidth="2" />
            <circle cx="310" cy="18" r="4.5" className="fill-[#4edea3] shadow-[0_0_8px_rgba(78,222,163,0.9)]" />
            <circle cx="310" cy="30" r="4" className="fill-[#8083ff] shadow-[0_0_8px_rgba(128,131,255,0.9)]" />
          </svg>

          {/* Axis Labels */}
          <div className="flex justify-between px-2 text-[10px] font-semibold text-[#908fa0]">
            <span>{chartPeriod === '4W' ? 'W1 (Oct 1-7)' : 'W1 (Sep 1)'}</span>
            <span>{chartPeriod === '4W' ? 'W2 (Oct 8-14)' : 'W3 (Sep 15)'}</span>
            <span>{chartPeriod === '4W' ? 'W3 (Oct 15-21)' : 'W5 (Oct 1)'}</span>
            <span>{chartPeriod === '4W' ? 'W4 (Oct 22-31)' : 'W8 (Oct 31)'}</span>
          </div>
        </div>
      </div>

      {/* Channel Share Comparison & Media Highlights */}
      <div className="rounded-2xl bg-[#1c2028] p-5 shadow-md border border-white/[0.04] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[16px] font-bold text-[#dfe2ee] font-display">
              Channel Acquisition Share
            </h3>
            <p className="text-[12px] text-[#c7c4d7]">
              October traffic and audience origin
            </p>
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#571bc1]/40 text-[#d0bcff] border border-[#d0bcff]/20">
            Split Ratio
          </span>
        </div>

        {/* Split Visual Comparison Cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* Instagram Card */}
          <div className="bg-[#262a33] p-4 rounded-xl flex flex-col justify-between relative overflow-hidden border border-white/[0.04]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#d0bcff] text-[20px]">
                  photo_camera
                </span>
                <span className="text-[12px] text-[#dfe2ee] font-bold">
                  Instagram
                </span>
              </div>
              <span className="text-[11px] text-[#4edea3] font-bold">+7.2%</span>
            </div>
            <div className="my-1">
              <span className="text-[28px] font-bold text-[#dfe2ee] leading-none font-display">
                68%
              </span>
              <span className="block text-[12px] text-[#908fa0] mt-1">
                212.4K impressions
              </span>
            </div>
            <div className="w-full bg-[#0a0e16] h-1.5 rounded-full overflow-hidden mt-2">
              <div className="bg-[#d0bcff] h-full rounded-full" style={{ width: '68%' }} />
            </div>
          </div>

          {/* YouTube Shorts Card */}
          <div className="bg-[#262a33] p-4 rounded-xl flex flex-col justify-between relative overflow-hidden border border-white/[0.04]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ffb4ab] text-[20px]">
                  smart_display
                </span>
                <span className="text-[12px] text-[#dfe2ee] font-bold">
                  YT Shorts
                </span>
              </div>
              <span className="text-[11px] text-[#4edea3] font-bold">+28%</span>
            </div>
            <div className="my-1">
              <span className="text-[28px] font-bold text-[#dfe2ee] leading-none font-display">
                32%
              </span>
              <span className="block text-[12px] text-[#908fa0] mt-1">
                100.0K impressions
              </span>
            </div>
            <div className="w-full bg-[#0a0e16] h-1.5 rounded-full overflow-hidden mt-2">
              <div className="bg-[#ffb4ab] h-full rounded-full" style={{ width: '32%' }} />
            </div>
          </div>
        </div>

        {/* Micro Observation Strip */}
        <div className="bg-[#181c24] p-3 rounded-xl flex items-center gap-2.5 border border-white/[0.04]">
          <div className="w-7 h-7 rounded-full bg-[#00885d]/30 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#4edea3] text-[16px]">
              lightbulb
            </span>
          </div>
          <p className="text-[12px] text-[#c7c4d7] leading-snug">
            <strong className="text-[#dfe2ee] font-semibold">Key Finding:</strong> Shorts drove 41% of new inbound conversions while Reels drove viral repeat engagement.
          </p>
        </div>
      </div>

      {/* Client Top Content Micro Showcase */}
      <div className="rounded-2xl bg-[#262a33] p-4 shadow-md border border-white/[0.05]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#908fa0]">
            Top Performing Asset
          </span>
          <span className="text-[11px] font-semibold text-[#d0bcff]">
            Oct 18 • Reel
          </span>
        </div>
        <div className="flex items-center gap-3.5">
          <img
            className="w-16 h-20 rounded-xl object-cover shrink-0 shadow-md ring-1 ring-white/10"
            src={ASSETS.topPerformingReelThumb}
            alt="3-Step Barrier Repair Routine"
          />
          <div className="flex flex-col min-w-0 justify-center">
            <p className="text-[14px] font-bold text-[#dfe2ee] line-clamp-1 leading-snug">
              3-Step Barrier Repair Routine
            </p>
            <span className="text-[12px] text-[#c7c4d7] mt-0.5">
              114.8K plays • 12.4K saves
            </span>
            <div className="flex items-center gap-1 mt-1 text-[#4edea3] text-[11px] font-semibold">
              <span className="material-symbols-outlined text-[14px]">bookmark</span>
              <span>Save rate: 10.8% (Studio Record)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action CTAs (Download & Schedule) */}
      <div className="flex flex-col gap-2.5 mt-1">
        <button
          onClick={handleDownloadClick}
          disabled={downloading}
          className="w-full h-12 rounded-xl bg-[#c0c1ff] hover:bg-[#c0c1ff]/90 text-[#1000a9] font-bold text-[14px] flex items-center justify-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-4px_rgba(99,102,241,0.4)] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-80"
          type="button"
        >
          {downloading ? (
            <>
              <span className="material-symbols-outlined text-[20px] animate-spin">sync</span>
              <span>Preparing PDF Dossier...</span>
            </>
          ) : downloadSuccess ? (
            <>
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              <span>PDF Dossier Sent to Client Inbox</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]">file_download</span>
              <span>Download Client PDF Summary</span>
            </>
          )}
        </button>

        <button
          onClick={onScheduleDebrief}
          className="w-full h-12 rounded-xl bg-[#262a33] text-[#dfe2ee] font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-[#353942] active:scale-[0.98] transition-all border border-white/5 cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px] text-[#4edea3]">
            calendar_today
          </span>
          <span>Schedule Strategy Debrief</span>
        </button>
      </div>
    </div>
  );
}
