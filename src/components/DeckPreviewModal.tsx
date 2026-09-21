import { useState } from 'react';
import { ClientProfile } from '../types';
import { ASSETS } from '../data';

interface DeckPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: ClientProfile;
}

export default function DeckPreviewModal({
  isOpen,
  onClose,
  client,
}: DeckPreviewModalProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 4;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0e16]/90 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-lg bg-[#181c24] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="bg-[#1c2028] px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#c0c1ff]">
              picture_as_pdf
            </span>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#dfe2ee] font-display">
                Executive Dossier PDF (Page {currentPage}/{totalPages})
              </span>
              <span className="text-[10px] text-[#908fa0]">
                {client.name} • {client.auditPeriod}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="text-[11px] font-semibold text-[#c0c1ff] hover:text-[#dfe2ee] bg-[#31353e] px-2.5 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[15px]">print</span>
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-[#908fa0] hover:text-[#dfe2ee] cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Presentation Slide Viewport */}
        <div className="flex-1 p-5 overflow-y-auto bg-[#0f131c]">
          {currentPage === 1 && (
            <div className="flex flex-col items-center justify-center text-center p-8 bg-[#181c24] rounded-2xl border border-white/[0.04] min-h-[360px] relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#8083ff]/20 rounded-full blur-2xl" />
              <img
                src={ASSETS.logo}
                alt="PulseMetrics"
                className="h-10 w-auto mb-4"
              />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#4edea3] bg-[#00885d]/20 px-3 py-1 rounded-full border border-[#4edea3]/20">
                EXECUTIVE SOCIAL AUDIT
              </span>
              <h2 className="text-[26px] font-bold text-[#dfe2ee] font-display mt-3 leading-tight">
                {client.name}
              </h2>
              <p className="text-[13px] text-[#c7c4d7] mt-1 max-w-xs">
                Performance Diagnostics & High-Velocity Content Matrix
              </p>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-4 text-[11px] text-[#908fa0]">
                <span>Cycle: {client.auditPeriod}</span>
                <span>•</span>
                <span>Auditor: Elena Vance, MSc</span>
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div className="flex flex-col gap-4 p-5 bg-[#181c24] rounded-2xl border border-white/[0.04] min-h-[360px]">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c0c1ff]">
                  Page 02 • Core Metrics
                </span>
                <span className="text-[11px] text-[#4edea3] font-bold">Health Score: 88/100</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#1c2028]">
                  <span className="text-[10px] text-[#908fa0] uppercase">Audience</span>
                  <p className="text-[20px] font-bold text-[#dfe2ee] font-display">{client.totalAudience}</p>
                  <span className="text-[10px] text-[#4edea3] font-medium">{client.totalAudienceGrowthPercent} growth</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1c2028]">
                  <span className="text-[10px] text-[#908fa0] uppercase">Monthly Reach</span>
                  <p className="text-[20px] font-bold text-[#dfe2ee] font-display">{client.monthlyReach}</p>
                  <span className="text-[10px] text-[#4edea3] font-medium">{client.monthlyReachChange}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1c2028]">
                  <span className="text-[10px] text-[#908fa0] uppercase">Engagement Rate</span>
                  <p className="text-[20px] font-bold text-[#4edea3] font-display">{client.engagementRate}</p>
                  <span className="text-[10px] text-[#c7c4d7]">2.2x above median</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1c2028]">
                  <span className="text-[10px] text-[#908fa0] uppercase">Channel Split</span>
                  <p className="text-[16px] font-bold text-[#dfe2ee]">IG 68% / YT 32%</p>
                  <span className="text-[10px] text-[#c0c1ff]">Shorts driving 41% leads</span>
                </div>
              </div>
              <p className="text-[11px] text-[#c7c4d7] bg-[#1c2028] p-3 rounded-xl leading-relaxed">
                Summary: Consistent 4.8% engagement on skincare education reels. Reallocating budget to problem-agitate-solve short form reels will yield estimated +42.8% reach in next sprint.
              </p>
            </div>
          )}

          {currentPage === 3 && (
            <div className="flex flex-col gap-3 p-5 bg-[#181c24] rounded-2xl border border-white/[0.04] min-h-[360px]">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c0c1ff]">
                  Page 03 • Creative Matrix
                </span>
                <span className="text-[11px] text-[#4edea3] font-bold">Top Performer: 114.8K Plays</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#1c2028] rounded-xl">
                <img
                  src={ASSETS.topPerformingReelThumb}
                  alt="Winner"
                  className="w-16 h-20 rounded-lg object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#4edea3] uppercase">Viral Winner</span>
                  <h4 className="text-[13px] font-bold text-[#dfe2ee]">3-Step Barrier Repair Routine</h4>
                  <span className="text-[11px] text-[#c7c4d7]">Save rate: 10.8% (Studio Record)</span>
                  <span className="text-[10px] text-[#908fa0] mt-1">Winning Factor: 1.8s Hook + PAS Structure</span>
                </div>
              </div>
              <div className="p-3 bg-[#93000a]/20 border border-[#ffb4ab]/20 rounded-xl">
                <span className="text-[10px] font-bold text-[#ffb4ab] uppercase">Pivot Target</span>
                <h4 className="text-[13px] font-bold text-[#dfe2ee]">Retire Static Quote Graphics</h4>
                <p className="text-[11px] text-[#c7c4d7] mt-0.5 leading-snug">
                  0.8% ER and 0 DM leads. Replace with face-to-camera Q&A comment replies.
                </p>
              </div>
            </div>
          )}

          {currentPage === 4 && (
            <div className="flex flex-col gap-4 p-5 bg-[#181c24] rounded-2xl border border-white/[0.04] min-h-[360px]">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c0c1ff]">
                  Page 04 • Strategic Action Plan
                </span>
                <span className="text-[11px] text-[#4edea3] font-bold">November Roadmap</span>
              </div>
              <ul className="flex flex-col gap-2.5 text-[12px] text-[#dfe2ee]">
                <li className="flex items-start gap-2 bg-[#1c2028] p-2.5 rounded-lg">
                  <span className="material-symbols-outlined text-[16px] text-[#4edea3] mt-0.5">check_circle</span>
                  <span><strong>Action 1:</strong> Produce 3x weekly myth-busting reels anchored in first 1.8s hook.</span>
                </li>
                <li className="flex items-start gap-2 bg-[#1c2028] p-2.5 rounded-lg">
                  <span className="material-symbols-outlined text-[16px] text-[#4edea3] mt-0.5">check_circle</span>
                  <span><strong>Action 2:</strong> Shift automated publishing queue from 12p to 7:15 PM EST peak.</span>
                </li>
                <li className="flex items-start gap-2 bg-[#1c2028] p-2.5 rounded-lg">
                  <span className="material-symbols-outlined text-[16px] text-[#4edea3] mt-0.5">check_circle</span>
                  <span><strong>Action 3:</strong> Transition quote graphics to product demonstration Q&A replies.</span>
                </li>
              </ul>
              <div className="mt-auto p-3 rounded-xl bg-[#262a33] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={ASSETS.elenaVancePortrait}
                    alt="Elena Vance"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <span className="text-[11px] font-bold text-[#dfe2ee] block">Elena Vance, MSc</span>
                    <span className="text-[9px] text-[#c0c1ff]">PulseMetrics Strategy Director</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#908fa0] font-mono">#PM-Q4-8841</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Pagination Footer */}
        <div className="bg-[#1c2028] px-4 py-3 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentPage(i + 1)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  currentPage === i + 1 ? 'w-6 bg-[#c0c1ff]' : 'bg-[#31353e]'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-lg bg-[#262a33] text-[12px] text-[#dfe2ee] font-semibold disabled:opacity-40 cursor-pointer"
              type="button"
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-lg bg-[#c0c1ff] text-[12px] text-[#1000a9] font-bold disabled:opacity-40 cursor-pointer"
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
