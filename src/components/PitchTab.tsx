import { useState } from 'react';
import { TARGET_CLIENT_PROFILES, PROSPECTING_CHANNELS, PITCH_SCRIPT, ASSETS } from '../data';

interface PitchTabProps {
  onOpenPaywall: () => void;
  onPreviewDeck: () => void;
  onGeneratePitchDeck: () => void;
}

export default function PitchTab({
  onOpenPaywall,
  onPreviewDeck,
  onGeneratePitchDeck,
}: PitchTabProps) {
  const [selectedTier, setSelectedTier] = useState<'std' | 'pro'>('std');
  const [copied, setCopied] = useState(false);

  const handleCopyScript = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PITCH_SCRIPT);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="flex flex-col w-full gap-5 pb-6">
      {/* Service Pitch Header & Conversion Tracker Banner */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#00885d]/30 text-[#4edea3] text-[11px] font-bold uppercase tracking-wider border border-[#4edea3]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] mr-1.5 animate-pulse" />
              Ready to Monetize
            </span>
          </div>
          <span className="text-[12px] font-semibold text-[#c7c4d7] flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#4edea3]">
              monetization_on
            </span>
            MRR Target: $3,000/mo
          </span>
        </div>

        {/* Tiered Packaging Showcase */}
        <div className="relative overflow-hidden rounded-2xl bg-[#262a33] p-5 shadow-xl border border-white/[0.05]">
          <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-[#8083ff]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-[#4edea3]/15 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c0c1ff]">
                  Core Recurring Product
                </span>
                <h2 className="text-[22px] font-bold text-[#dfe2ee] leading-tight font-display">
                  Monthly Pulse Report
                </h2>
                <p className="text-[12px] text-[#c7c4d7]">
                  High-margin done-for-you intelligence asset
                </p>
              </div>

              {/* Pulse graphic logo */}
              <div className="w-12 h-12 rounded-2xl bg-[#0a0e16] flex items-center justify-center shrink-0 shadow-md border border-white/5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 64 64">
                  <path
                    d="M52 32C52 43.0457 43.0457 52 32 52C20.9543 52 12 43.0457 12 32C12 20.9543 20.9543 12 32 12C36.8521 12 41.3129 13.7292 44.8 16.6"
                    stroke="#c0c1ff"
                    strokeLinecap="round"
                    strokeWidth="5"
                  />
                  <path
                    d="M22 36L28.5 28L35 34L44 23"
                    stroke="#4edea3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                  />
                  <circle cx="44" cy="23" fill="#4edea3" r="3.5" />
                </svg>
              </div>
            </div>

            {/* Pricing Switcher Pills */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#0a0e16] rounded-xl border border-white/5">
              <button
                type="button"
                onClick={() => setSelectedTier('std')}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg transition-all cursor-pointer ${
                  selectedTier === 'std'
                    ? 'bg-[#8083ff] text-[#0d0096] shadow-sm font-bold'
                    : 'text-[#c7c4d7] hover:text-[#dfe2ee]'
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Standard Pulse
                </span>
                <span className="text-[20px] font-bold leading-tight font-display">
                  $149<span className="text-[11px] opacity-80">/mo</span>
                </span>
                <span className="text-[10px] text-center opacity-90">
                  PDF Executive Dossier
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedTier('pro')}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg transition-all cursor-pointer ${
                  selectedTier === 'pro'
                    ? 'bg-[#8083ff] text-[#0d0096] shadow-sm font-bold'
                    : 'text-[#c7c4d7] hover:text-[#dfe2ee]'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Pro Advisory
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
                </div>
                <span className="text-[20px] font-bold leading-tight font-display">
                  $199<span className="text-[11px] opacity-80">/mo</span>
                </span>
                <span className="text-[10px] text-center opacity-90">
                  + 30m Loom Video Audit
                </span>
              </button>
            </div>

            {/* Tier Highlights Display */}
            <div className="flex items-center justify-between py-2.5 px-3 bg-[#181c24] rounded-xl text-[12px] text-[#dfe2ee] border border-white/[0.04]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#4edea3]">
                  check_circle
                </span>
                <span>
                  {selectedTier === 'std'
                    ? 'Standard: Turnkey PDF matrix, zero meetings required'
                    : 'Pro Advisory: Includes high-touch 30m Loom walk-through & priority Q&A'}
                </span>
              </div>
              <span className="text-[11px] text-[#c0c1ff] font-bold whitespace-nowrap ml-2">
                Client Favorite
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Deck */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-[#dfe2ee] font-display">
            Irresistible Value Proposition
          </h3>
          <span className="text-[10px] font-semibold text-[#908fa0] uppercase tracking-wider">
            4 Pillars
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Pillar 1 */}
          <div className="flex flex-col gap-2 p-4 bg-[#181c24] rounded-2xl border border-white/[0.04]">
            <div className="w-9 h-9 rounded-xl bg-[#1c2028] flex items-center justify-center text-[#c0c1ff] shadow-sm border border-white/5">
              <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-[#dfe2ee] leading-snug">
                Done-For-You Analytics
              </h4>
              <p className="text-[11px] text-[#c7c4d7] mt-1 leading-normal">
                Saves founders 10+ hours deciphering native dashboard chaos.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col gap-2 p-4 bg-[#181c24] rounded-2xl border border-white/[0.04]">
            <div className="w-9 h-9 rounded-xl bg-[#1c2028] flex items-center justify-center text-[#4edea3] shadow-sm border border-white/5">
              <span className="material-symbols-outlined text-[20px]">trending_up</span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-[#dfe2ee] leading-snug">
                Reach & Velocity Trends
              </h4>
              <p className="text-[11px] text-[#c7c4d7] mt-1 leading-normal">
                Glanceable trajectories on saves, shares, and algorithmic tailwinds.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col gap-2 p-4 bg-[#181c24] rounded-2xl border border-white/[0.04]">
            <div className="w-9 h-9 rounded-xl bg-[#1c2028] flex items-center justify-center text-[#d0bcff] shadow-sm border border-white/5">
              <span className="material-symbols-outlined text-[20px]">compare_arrows</span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-[#dfe2ee] leading-snug">
                Winner vs Flop Teardown
              </h4>
              <p className="text-[11px] text-[#c7c4d7] mt-1 leading-normal">
                Isolates high-converting hooks from wasted creative production.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex flex-col gap-2 p-4 bg-[#181c24] rounded-2xl border border-white/[0.04]">
            <div className="w-9 h-9 rounded-xl bg-[#1c2028] flex items-center justify-center text-[#ffb4ab] shadow-sm border border-white/5">
              <span className="material-symbols-outlined text-[20px]">bolt</span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-[#dfe2ee] leading-snug">
                Zero-Fluff Action Items
              </h4>
              <p className="text-[11px] text-[#c7c4d7] mt-1 leading-normal">
                3 non-negotiable fixes for immediate next-month deployment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Asset Teaser */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-[#dfe2ee] font-display">
            Sample Deliverable Showcase
          </h3>
          <span className="text-[11px] text-[#4edea3] font-semibold">
            Ready to White-Label
          </span>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-[#0a0e16] p-4 shadow-lg border border-white/[0.05] flex flex-col gap-3">
          <div className="relative w-full h-36 rounded-xl overflow-hidden shadow-inner">
            <img
              className="w-full h-full object-cover"
              src={ASSETS.sampleDeckShowcase}
              alt="Sample pitch deck showcase"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16] via-[#0a0e16]/30 to-transparent" />
            <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#31353e]/80 backdrop-blur-md text-[#dfe2ee] text-[11px] font-medium border border-white/10">
              <span className="material-symbols-outlined text-[14px] text-[#4edea3]">
                verified
              </span>
              <span>Sample 6-Page Deck Included</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[12px] text-[#c7c4d7]">
              Includes branding swap & automated PDF compilation
            </span>
            <button
              onClick={onPreviewDeck}
              className="px-3 py-1.5 rounded-lg bg-[#1c2028] hover:bg-[#353942] text-[#c0c1ff] font-semibold text-[12px] flex items-center gap-1 transition-all border border-white/5 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              Preview
            </button>
          </div>
        </div>
      </div>

      {/* Target Client Profiles */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-[#dfe2ee] font-display">
            Target Client Profiles
          </h3>
          <span className="text-[10px] font-semibold text-[#908fa0] uppercase tracking-wider">
            Highest Close Rate
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {TARGET_CLIENT_PROFILES.map((profile) => (
            <div
              key={profile.id}
              className="flex items-center justify-between p-3.5 bg-[#181c24] rounded-xl hover:bg-[#1c2028] transition-all border border-white/[0.04]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#c0c1ff]/10 flex items-center justify-center text-[#c0c1ff] shrink-0 border border-[#c0c1ff]/20">
                  <span className="material-symbols-outlined text-[20px]">{profile.icon}</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-bold text-[#dfe2ee] truncate">
                      {profile.title}
                    </span>
                    <span
                      className={`px-1.5 py-0.2 rounded text-[10px] font-semibold ${
                        profile.badgeType === 'tertiary'
                          ? 'bg-[#00885d]/30 text-[#4edea3]'
                          : profile.badgeType === 'primary'
                          ? 'bg-[#c0c1ff]/10 text-[#c0c1ff]'
                          : 'bg-[#571bc1]/30 text-[#d0bcff]'
                      }`}
                    >
                      {profile.badge}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#c7c4d7] truncate mt-0.5">
                    {profile.description}
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0 ml-2">
                <span className="text-[13px] font-bold text-[#c0c1ff]">
                  {profile.rate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instant Prospecting Channels */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-[#dfe2ee] font-display">
            Instant Prospecting Channels
          </h3>
          <span className="text-[10px] font-semibold text-[#908fa0] uppercase tracking-wider">
            Playbook
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {PROSPECTING_CHANNELS.map((ch) => (
            <div
              key={ch.id}
              className="flex flex-col gap-2 p-4 bg-[#181c24] rounded-2xl border border-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#1c2028] flex items-center justify-center text-[#c0c1ff] border border-white/5">
                    <span className="material-symbols-outlined text-[16px]">{ch.icon}</span>
                  </span>
                  <h4 className="text-[14px] font-bold text-[#dfe2ee] font-display">
                    {ch.name}
                  </h4>
                </div>
                <span className={`px-2 py-0.5 rounded-full bg-[#1c2028] ${ch.tagColor} text-[10px] font-bold border border-white/5`}>
                  {ch.tag}
                </span>
              </div>
              <p className="text-[12px] text-[#c7c4d7] leading-relaxed">
                {ch.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ready-to-Use DM Script */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-[16px] font-bold text-[#dfe2ee] font-display">
              Ready-to-Use DM Script
            </h3>
            <span className="text-[12px] text-[#c7c4d7]">
              Tested 38% response rate on IG & LinkedIn
            </span>
          </div>

          <button
            onClick={handleCopyScript}
            className={`min-h-[38px] px-3 rounded-xl font-bold text-[12px] flex items-center gap-1.5 active:scale-95 transition-all shadow-md cursor-pointer ${
              copied
                ? 'bg-[#00885d] text-[#dfe2ee]'
                : 'bg-[#c0c1ff] hover:bg-[#c0c1ff]/90 text-[#1000a9]'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              {copied ? 'done' : 'content_copy'}
            </span>
            <span>{copied ? 'Copied!' : 'Copy Script'}</span>
          </button>
        </div>

        {/* Script Display Card */}
        <div className="relative p-4 rounded-2xl bg-[#0a0e16] text-[#dfe2ee] flex flex-col gap-2.5 shadow-md border border-white/[0.05]">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4edea3]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#908fa0]">
                Target: Instagram DM / InMail
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#c0c1ff]">
              Soft Value Hook
            </span>
          </div>

          <div className="text-[13px] text-[#c7c4d7] leading-relaxed whitespace-pre-line font-mono">
            {PITCH_SCRIPT}
          </div>
        </div>

        {/* 3-Step Conversion Protocol Tracker */}
        <div className="flex flex-col gap-2 p-4 bg-[#181c24] rounded-2xl border border-white/[0.04]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#c0c1ff]">
            The 3-Step Conversion Protocol
          </span>
          <div className="grid grid-cols-3 gap-2 mt-1">
            <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-[#1c2028] border border-white/[0.03]">
              <span className="text-[10px] font-bold text-[#4edea3]">STEP 1</span>
              <span className="text-[12px] font-bold text-[#dfe2ee]">Specific Teaser</span>
              <span className="text-[10px] text-[#c7c4d7] leading-tight mt-0.5">
                Send 1 micro chart snippet showing retention flaw.
              </span>
            </div>

            <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-[#1c2028] border border-white/[0.03]">
              <span className="text-[10px] font-bold text-[#c0c1ff]">STEP 2</span>
              <span className="text-[12px] font-bold text-[#dfe2ee]">Loom Audit</span>
              <span className="text-[10px] text-[#c7c4d7] leading-tight mt-0.5">
                Deliver 2-min unlisted video showing 3 fixes.
              </span>
            </div>

            <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-[#1c2028] border border-white/[0.03]">
              <span className="text-[10px] font-bold text-[#d0bcff]">STEP 3</span>
              <span className="text-[12px] font-bold text-[#dfe2ee]">Lock Retainer</span>
              <span className="text-[10px] text-[#c7c4d7] leading-tight mt-0.5">
                Close $149–$199/mo monthly pulse subscription.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA for Instant Deployment */}
      <div className="flex flex-col gap-2 pt-2">
        <button
          onClick={onGeneratePitchDeck}
          className="w-full min-h-[48px] rounded-xl bg-[#c0c1ff] hover:bg-[#c0c1ff]/90 text-[#1000a9] font-bold text-[14px] flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
          <span>Generate Customized Client Pitch Deck</span>
        </button>

        <button
          onClick={onOpenPaywall}
          className="w-full min-h-[44px] rounded-xl bg-[#262a33] text-[#dfe2ee] font-semibold text-[13px] flex items-center justify-center gap-2 hover:bg-[#353942] active:scale-98 transition-all border border-white/5 cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px] text-[#4edea3]">
            workspace_premium
          </span>
          <span>View Husna Anjum Pro Advisory Paywall</span>
        </button>

        <p className="text-center text-[10px] text-[#908fa0]">
          PulseMetrics Instant Outreach Accelerator • v2.4
        </p>
      </div>
    </div>
  );
}
