import { useState } from 'react';
import { MATRIX_ITEMS } from '../data';
import { ContentItem } from '../types';

interface MatrixTabProps {
  onApplyOptimization: () => void;
}

export default function MatrixTab({ onApplyOptimization }: MatrixTabProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'winners' | 'needs-pivot' | 'reels' | 'carousels'>('all');
  const [applied, setApplied] = useState(false);

  const filteredItems = MATRIX_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'winners') return item.category === 'winners';
    if (activeFilter === 'needs-pivot') return item.category === 'needs-pivot';
    if (activeFilter === 'reels') return item.format.includes('Reel');
    if (activeFilter === 'carousels') return item.format === 'Carousel';
    return true;
  });

  const winners = filteredItems.filter((i) => i.category === 'winners');
  const underperforming = filteredItems.filter((i) => i.category === 'needs-pivot');

  const handleApplyClick = () => {
    setApplied(true);
    onApplyOptimization();
    setTimeout(() => setApplied(false), 2500);
  };

  return (
    <div className="flex flex-col w-full gap-5 pb-6">
      {/* Overview Insight Ratio Banner (Hero Context) */}
      <div className="relative overflow-hidden rounded-2xl bg-[#181c24] p-5 shadow-xl border border-white/[0.05]">
        <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-[#8083ff]/15 blur-2xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-24 h-24 rounded-full bg-[#4edea3]/10 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_rgba(78,222,163,0.8)]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#908fa0]">
                Executive Distribution Signal
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#31353e] text-[11px] font-semibold text-[#c0c1ff]">
              May 2024 Audit
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-[28px] font-bold text-[#4edea3] font-display">
              82%
            </span>
            <span className="text-[14px] text-[#c7c4d7]">
              of reach driven by educational shorts
            </span>
          </div>

          {/* Segmented Bar Visualization */}
          <div className="w-full flex flex-col gap-1.5 pt-1">
            <div className="h-2 w-full rounded-full bg-[#31353e] overflow-hidden flex">
              <div className="h-full bg-[#4edea3] rounded-l-full" style={{ width: '82%' }} />
              <div className="h-full bg-[#8083ff]" style={{ width: '14%' }} />
              <div className="h-full bg-[#ffb4ab]" style={{ width: '4%' }} />
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#c7c4d7]">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
                Short Video (82%)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8083ff]" />
                Carousels (14%)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab]" />
                Static (4%)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Filter Pill Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-none">
        <button
          onClick={() => setActiveFilter('all')}
          className={`shrink-0 px-3.5 py-2 rounded-full text-[12px] font-semibold transition-all flex items-center gap-1.5 ${
            activeFilter === 'all'
              ? 'bg-[#c0c1ff] text-[#1000a9] shadow-[0_2px_12px_rgba(192,193,255,0.25)]'
              : 'bg-[#1c2028] text-[#c7c4d7] hover:text-[#dfe2ee]'
          }`}
          type="button"
        >
          <span>All Formats</span>
          <span className="px-1.5 py-0.2 rounded-full bg-black/20 text-[10px]">
            {MATRIX_ITEMS.length}
          </span>
        </button>

        <button
          onClick={() => setActiveFilter('winners')}
          className={`shrink-0 px-3.5 py-2 rounded-full text-[12px] font-semibold transition-all flex items-center gap-1.5 ${
            activeFilter === 'winners'
              ? 'bg-[#c0c1ff] text-[#1000a9] shadow-[0_2px_12px_rgba(192,193,255,0.25)]'
              : 'bg-[#1c2028] text-[#c7c4d7] hover:text-[#dfe2ee]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[16px] text-[#4edea3]">star</span>
          <span>Top Performers</span>
        </button>

        <button
          onClick={() => setActiveFilter('needs-pivot')}
          className={`shrink-0 px-3.5 py-2 rounded-full text-[12px] font-semibold transition-all flex items-center gap-1.5 ${
            activeFilter === 'needs-pivot'
              ? 'bg-[#c0c1ff] text-[#1000a9] shadow-[0_2px_12px_rgba(192,193,255,0.25)]'
              : 'bg-[#1c2028] text-[#c7c4d7] hover:text-[#dfe2ee]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[16px] text-[#ffb4ab]">warning</span>
          <span>Underperforming</span>
        </button>

        <button
          onClick={() => setActiveFilter('reels')}
          className={`shrink-0 px-3.5 py-2 rounded-full text-[12px] font-semibold transition-all flex items-center gap-1.5 ${
            activeFilter === 'reels'
              ? 'bg-[#c0c1ff] text-[#1000a9] shadow-[0_2px_12px_rgba(192,193,255,0.25)]'
              : 'bg-[#1c2028] text-[#c7c4d7] hover:text-[#dfe2ee]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">play_circle</span>
          <span>Reels</span>
        </button>

        <button
          onClick={() => setActiveFilter('carousels')}
          className={`shrink-0 px-3.5 py-2 rounded-full text-[12px] font-semibold transition-all flex items-center gap-1.5 ${
            activeFilter === 'carousels'
              ? 'bg-[#c0c1ff] text-[#1000a9] shadow-[0_2px_12px_rgba(192,193,255,0.25)]'
              : 'bg-[#1c2028] text-[#c7c4d7] hover:text-[#dfe2ee]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">view_carousel</span>
          <span>Carousels</span>
        </button>
      </div>

      {/* SECTION 1: Top Performing Posts */}
      {(activeFilter === 'all' || activeFilter === 'winners' || activeFilter === 'reels' || activeFilter === 'carousels') && winners.length > 0 && (
        <section className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#00885d]/30 flex items-center justify-center text-[#4edea3]">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[16px] font-bold text-[#dfe2ee] font-display leading-none">
                  The Viral Winners
                </h2>
                <span className="text-[11px] text-[#908fa0]">
                  High-intent reach & retention drivers
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#4edea3]/10 text-[11px] text-[#4edea3] font-semibold">
              ROI High
            </span>
          </div>

          {winners.map((item) => renderContentCard(item))}
        </section>
      )}

      {/* SECTION 2: Underperforming Content */}
      {(activeFilter === 'all' || activeFilter === 'needs-pivot' || activeFilter === 'reels') && underperforming.length > 0 && (
        <section className="flex flex-col gap-3.5 mt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#93000a]/40 flex items-center justify-center text-[#ffb4ab]">
                <span className="material-symbols-outlined text-[18px]">emergency</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[16px] font-bold text-[#dfe2ee] font-display leading-none">
                  Underperforming Pivot Targets
                </h2>
                <span className="text-[11px] text-[#908fa0]">
                  What stalled & root algorithmic diagnosis
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#93000a]/30 text-[11px] text-[#ffb4ab] font-semibold">
              Action Needed
            </span>
          </div>

          {underperforming.map((item) => renderContentCard(item))}
        </section>
      )}

      {/* Bottom Executive Action CTA Card */}
      <div className="rounded-2xl bg-[#181c24] p-5 shadow-xl border border-white/[0.05] flex flex-col gap-3 mt-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#c0c1ff]">
              auto_fix_high
            </span>
            <h4 className="text-[16px] font-bold text-[#dfe2ee] font-display">
              Algorithmic Content Pivot
            </h4>
          </div>
          <span className="text-[11px] font-semibold text-[#908fa0]">
            Action Plan Ready
          </span>
        </div>
        <p className="text-[12px] text-[#c7c4d7] leading-relaxed">
          Reallocate 35% of monthly creative production from static quote graphics to high-yield short-form hook reels to maximize client reach efficiency.
        </p>
        <button
          onClick={handleApplyClick}
          className="w-full mt-1 min-h-[44px] py-2.5 px-4 rounded-xl bg-[#c0c1ff] hover:bg-[#c0c1ff]/90 text-[#1000a9] font-bold text-[14px] flex items-center justify-center gap-2 active:scale-98 transition-all shadow-md cursor-pointer"
          type="button"
        >
          {applied ? (
            <>
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span>Applied to Sprint Board</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">tune</span>
              <span>Apply Optimization to Next Sprint</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  function renderContentCard(item: ContentItem) {
    const isWinner = item.category === 'winners';

    return (
      <article
        key={item.id}
        className="relative rounded-2xl bg-[#1c2028] p-4 shadow-lg border border-white/[0.04] flex flex-col gap-4 overflow-hidden"
      >
        <div className="flex gap-4">
          {/* Media thumbnail */}
          <div className="relative w-24 h-32 rounded-xl overflow-hidden bg-[#262a33] shrink-0 shadow-sm">
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              className={`w-full h-full object-cover ${!isWinner ? 'opacity-80' : ''}`}
            />
            {/* Top tag (duration or slides or static) */}
            <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-md bg-[#0a0e16]/80 backdrop-blur-sm flex items-center gap-1">
              <span
                className={`material-symbols-outlined text-[12px] ${
                  isWinner ? 'text-[#4edea3]' : 'text-[#ffb4ab]'
                }`}
              >
                {item.duration ? 'play_arrow' : item.slides ? 'view_carousel' : 'image'}
              </span>
              <span className="text-[10px] font-semibold text-[#dfe2ee]">
                {item.duration || item.slides || 'Static'}
              </span>
            </div>
            {/* Corner Letter Badge */}
            <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded-md bg-[#0a0e16]/80 backdrop-blur-sm">
              <span
                className={`text-[11px] font-bold ${
                  isWinner ? 'text-[#4edea3]' : 'text-[#ffb4ab]'
                }`}
              >
                {item.letter}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between flex-1 min-w-0">
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded bg-[#31353e] text-[10px] font-bold text-[#c0c1ff] uppercase tracking-wider">
                  {item.typeBadge}
                </span>
                <span className="text-[11px] text-[#908fa0]">
                  {item.reachDelta ? (
                    <span className="text-[#ffb4ab] font-bold flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">
                        {item.reachDelta.includes('drop') ? 'trending_down' : 'arrow_downward'}
                      </span>
                      {item.reachDelta}
                    </span>
                  ) : (
                    item.publishedDate
                  )}
                </span>
              </div>
              <h3 className="text-[15px] font-bold text-[#dfe2ee] truncate leading-tight font-display">
                {item.title}
              </h3>
              <p className="text-[12px] text-[#c7c4d7] line-clamp-1">
                {item.subtitle}
              </p>
            </div>

            {/* Retention Metric Visual for Post D */}
            {item.retentionPercent !== undefined ? (
              <div className="flex flex-col bg-[#181c24] rounded-lg p-2 gap-1 border border-white/[0.03]">
                <div className="flex items-center justify-between text-[10px] font-semibold">
                  <span className="text-[#908fa0] uppercase">Hook Retention (3s)</span>
                  <span className="text-[#ffb4ab] font-bold">
                    {item.retentionPercent}% remaining
                  </span>
                </div>
                <div className="h-1.5 w-full bg-[#31353e] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#ffb4ab] rounded-full"
                    style={{ width: `${item.retentionPercent}%` }}
                  />
                </div>
              </div>
            ) : (
              /* Mini Stats Matrix */
              <div className="grid grid-cols-3 gap-1 pt-2">
                <div className="flex flex-col bg-[#181c24] rounded-lg px-2 py-1 border border-white/[0.03]">
                  <span className="text-[9px] font-semibold text-[#908fa0] uppercase">
                    Reach
                  </span>
                  <span className="text-[13px] text-[#dfe2ee] font-bold">
                    {item.reach}
                  </span>
                </div>
                <div className="flex flex-col bg-[#181c24] rounded-lg px-2 py-1 border border-white/[0.03]">
                  <span className="text-[9px] font-semibold text-[#908fa0] uppercase">
                    Saves
                  </span>
                  <span
                    className={`text-[13px] font-bold ${
                      item.isPositiveMetric3 ? 'text-[#4edea3]' : 'text-[#ffb4ab]'
                    }`}
                  >
                    {item.saves}
                  </span>
                </div>
                <div className="flex flex-col bg-[#181c24] rounded-lg px-2 py-1 border border-white/[0.03]">
                  <span className="text-[9px] font-semibold text-[#908fa0] uppercase">
                    {item.metric3Label}
                  </span>
                  <span
                    className={`text-[13px] font-bold ${
                      item.isPositiveMetric3 ? 'text-[#dfe2ee]' : 'text-[#ffb4ab]'
                    }`}
                  >
                    {item.metric3Value}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Actionable Takeaway Banner */}
        <div className="rounded-xl bg-[#262a33] p-3 flex items-start gap-2.5 border border-white/[0.04]">
          <span
            className={`material-symbols-outlined text-[18px] shrink-0 mt-0.5 ${
              isWinner ? 'text-[#4edea3]' : 'text-[#ffb4ab]'
            }`}
          >
            {isWinner ? 'lightbulb' : 'warning'}
          </span>
          <div className="flex flex-col min-w-0">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider ${
                isWinner ? 'text-[#4edea3]' : 'text-[#ffb4ab]'
              }`}
            >
              {item.takeawayTitle}
            </span>
            <p className="text-[12px] text-[#dfe2ee] mt-0.5 leading-snug">
              {item.takeawayText}
            </p>
          </div>
        </div>
      </article>
    );
  }
}
