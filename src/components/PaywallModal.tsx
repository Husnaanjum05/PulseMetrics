import { useState } from 'react';
import { ASSETS } from '../data';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  isProActive: boolean;
  onActivatePro: () => void;
}

export default function PaywallModal({
  isOpen,
  onClose,
  isProActive,
  onActivatePro,
}: PaywallModalProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('quarterly');
  const [selectedPlan, setSelectedPlan] = useState<'pro' | 'standard' | 'agency'>('pro');
  const [processing, setProcessing] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSubscribe = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      onActivatePro();
      showToast('Entitlement "husna_anjum_pro" Activated Successfully!');
    }, 1200);
  };

  const handleRestore = () => {
    showToast('Contacting RevenueCat SDK... Entitlements verified.');
  };

  const handleRedeem = () => {
    const code = prompt('Enter VIP / Beta Promo Code:');
    if (code) {
      onActivatePro();
      showToast(`Promo code "${code}" redeemed! Pro Advisory unlocked.`);
    }
  };

  const getPrice = () => {
    if (selectedPlan === 'pro') {
      return billingCycle === 'quarterly' ? '$169' : '$199';
    }
    if (selectedPlan === 'standard') {
      return billingCycle === 'quarterly' ? '$129' : '$149';
    }
    return billingCycle === 'quarterly' ? '$429' : '$499';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0f131c]/95 backdrop-blur-2xl flex justify-center p-0 md:p-4">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-60 px-4 py-2.5 rounded-full bg-[#353942] text-[#dfe2ee] text-[12px] font-semibold shadow-2xl flex items-center gap-2 border border-white/10 animate-bounce">
          <span className="material-symbols-outlined text-[#4edea3] text-[18px]">
            verified
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="w-full max-w-md bg-[#0f131c] min-h-screen md:min-h-0 md:rounded-3xl border-0 md:border md:border-white/10 shadow-2xl flex flex-col relative pb-safe">
        {/* Sticky Top Header */}
        <div className="sticky top-0 z-20 bg-[#0f131c]/90 backdrop-blur-xl border-b border-white/[0.06] h-16 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <button
              onClick={onClose}
              className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg text-[#c7c4d7] hover:text-[#dfe2ee] active:scale-95 transition-all -ml-1 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4edea3]">
                Official Offering
              </span>
              <h2 className="text-[15px] font-bold text-[#dfe2ee] truncate font-display">
                Pro Subscription
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRestore}
              className="text-[12px] font-semibold text-[#c7c4d7] hover:text-[#dfe2ee] px-2 py-1 rounded transition-colors cursor-pointer"
              type="button"
            >
              Restore
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-4 flex flex-col gap-4 pb-8">
          {/* RevenueCat Architecture Status Banner */}
          <div className="p-3 rounded-xl bg-[#262a33] flex items-center justify-between gap-3 shadow-sm border border-white/[0.04]">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]" />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold text-[#908fa0] uppercase tracking-wider">
                  RevenueCat Architecture
                </span>
                <span className="text-[12px] text-[#dfe2ee] truncate">
                  {isProActive ? (
                    <span className="text-[#4edea3] font-bold">Active Pro Entitlement</span>
                  ) : (
                    'Free Tier • Ready to Synchronize'
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0a0e16] text-[#4edea3] text-[10px] font-bold shrink-0 border border-white/5">
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                bolt
              </span>
              <span>v4.27 API</span>
            </div>
          </div>

          {/* Hero Pitch Card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#181c24] p-5 shadow-xl border border-white/[0.05]">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#8083ff]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-12 w-52 h-52 bg-[#4edea3]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#31353e] text-[#c0c1ff] text-[10px] font-mono tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">lock_open</span>
                  tier: husna_anjum_pro
                </span>
                <span className="inline-flex items-center gap-1 text-[#4edea3] text-[11px] font-semibold">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  Executive Auth
                </span>
              </div>

              <h2 className="text-[24px] font-bold text-[#dfe2ee] tracking-tight leading-tight font-display mt-1">
                Unlock Husna Anjum Pro Advisory
              </h2>

              <p className="text-[13px] text-[#c7c4d7] leading-relaxed">
                Turn raw social performance metrics into revenue-generating client retainers with 1-on-1 Loom teardowns & bespoke algorithmic strategy.
              </p>

              {/* Advisor & Stats Strip */}
              <div className="mt-2 pt-3 flex items-center gap-3 bg-[#1c2028] rounded-xl p-3 border border-white/[0.04]">
                <img
                  src={ASSETS.husnaAnjumPortrait}
                  alt="Husna Anjum"
                  className="w-11 h-11 rounded-full object-cover shrink-0 ring-2 ring-[#c0c1ff]/30"
                />
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-bold text-[#dfe2ee] truncate">
                      Husna Anjum
                    </span>
                    <span
                      className="material-symbols-outlined text-[#c0c1ff] text-[15px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                  </div>
                  <p className="text-[11px] text-[#908fa0] truncate">
                    Senior Growth Strategist & Algorithm Auditor
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5 text-[10px]">
                    <span className="text-[#4edea3] font-bold">4.9/5 Average ROI</span>
                    <span className="text-[#908fa0]">• 140+ Elite Agencies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Billing Cycle Selector */}
          <div className="flex flex-col gap-1.5">
            <div className="relative flex items-center p-1 rounded-full bg-[#0a0e16] border border-white/5 shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`relative flex-1 py-2 rounded-full text-[12px] font-semibold text-center transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-[#262a33] text-[#dfe2ee] shadow-md'
                    : 'text-[#908fa0] hover:text-[#dfe2ee]'
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('quarterly')}
                className={`relative flex-1 py-2 rounded-full text-[12px] font-semibold text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  billingCycle === 'quarterly'
                    ? 'bg-[#262a33] text-[#dfe2ee] shadow-md'
                    : 'text-[#908fa0] hover:text-[#dfe2ee]'
                }`}
              >
                <span>Quarterly</span>
                <span className="px-1.5 py-0.5 rounded-full bg-[#00885d] text-[#dfe2ee] text-[9px] font-bold uppercase tracking-wider">
                  Save 15%
                </span>
              </button>
            </div>
            <div className="text-center text-[11px] text-[#908fa0]">
              Instant 7-day risk-free access • Auto-synced across iOS & Web
            </div>
          </div>

          {/* Package Selection Cards */}
          <div className="flex flex-col gap-3">
            {/* Pro Advisory (Most Popular) */}
            <div
              onClick={() => setSelectedPlan('pro')}
              className={`relative rounded-2xl p-5 transition-all cursor-pointer border ${
                selectedPlan === 'pro'
                  ? 'bg-[#262a33] border-[#c0c1ff]/40 shadow-xl shadow-[#8083ff]/10'
                  : 'bg-[#181c24] border-white/[0.04] opacity-80 hover:opacity-100'
              }`}
            >
              <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-[#8083ff] text-[#0d0096] text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span>Most Popular</span>
              </div>

              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[17px] font-bold text-[#dfe2ee] font-display">
                      Pro Advisory & Teardown
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#1c2028] text-[#4edea3] text-[10px] font-semibold">
                      Full Suite
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#4edea3] mt-0.5">
                    Package: husna_anjum_pro
                  </span>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    selectedPlan === 'pro'
                      ? 'bg-[#c0c1ff] text-[#1000a9]'
                      : 'bg-[#31353e] text-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                </div>
              </div>

              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-[32px] font-bold text-[#dfe2ee] tracking-tight font-display">
                  {billingCycle === 'quarterly' ? '$169' : '$199'}
                </span>
                <span className="text-[12px] text-[#908fa0]">/ month</span>
                <span className="ml-1 text-[11px] text-[#4edea3] bg-[#1c2028] px-2 py-0.5 rounded-md font-semibold">
                  {billingCycle === 'quarterly' ? 'Billed quarterly' : 'Billed monthly'}
                </span>
              </div>

              <div className="mt-3.5 pt-3 flex flex-col gap-2 bg-[#181c24]/80 rounded-xl p-3 border border-white/[0.03]">
                <div className="flex items-center gap-2 text-[12px] text-[#dfe2ee]">
                  <span className="material-symbols-outlined text-[#4edea3] text-[18px]">verified</span>
                  <span>Turnkey Monthly Executive PDF Dossier</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#dfe2ee]">
                  <span className="material-symbols-outlined text-[#4edea3] text-[18px]">videocam</span>
                  <span>30-min Loom Strategy Video Breakdown</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#dfe2ee]">
                  <span className="material-symbols-outlined text-[#4edea3] text-[18px]">forum</span>
                  <span>Priority Direct Strategist DM Hotline</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#dfe2ee]">
                  <span className="material-symbols-outlined text-[#4edea3] text-[18px]">sync_alt</span>
                  <span>Live Notion Execution Roadmap Sync</span>
                </div>
              </div>
            </div>

            {/* Standard Pulse Report */}
            <div
              onClick={() => setSelectedPlan('standard')}
              className={`relative rounded-2xl p-4 transition-all cursor-pointer border ${
                selectedPlan === 'standard'
                  ? 'bg-[#262a33] border-[#c0c1ff]/40 shadow-xl'
                  : 'bg-[#181c24] border-white/[0.04] opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col">
                  <h3 className="text-[15px] font-bold text-[#dfe2ee] font-display">
                    Standard Pulse Report
                  </h3>
                  <span className="text-[11px] font-mono text-[#908fa0] mt-0.5">
                    Package: pulse_standard_monthly
                  </span>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    selectedPlan === 'standard'
                      ? 'bg-[#c0c1ff] text-[#1000a9]'
                      : 'bg-[#31353e] text-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                </div>
              </div>

              <div className="mt-2.5 flex items-baseline gap-1.5">
                <span className="text-[26px] font-bold text-[#dfe2ee] tracking-tight font-display">
                  {billingCycle === 'quarterly' ? '$129' : '$149'}
                </span>
                <span className="text-[12px] text-[#908fa0]">/ month</span>
              </div>
              <p className="text-[12px] text-[#c7c4d7] mt-1">
                Includes Turnkey PDF Executive Dossier, Monthly KPI performance matrix, and unlimited export.
              </p>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="rounded-2xl bg-[#181c24] p-4 shadow-sm border border-white/[0.04]">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex flex-col">
                <h4 className="text-[14px] font-bold text-[#dfe2ee] font-display">
                  Feature Comparison
                </h4>
                <span className="text-[11px] text-[#908fa0]">
                  Everything included in your subscription
                </span>
              </div>
              <div className="flex items-center gap-4 pr-1">
                <span className="text-[11px] font-bold text-[#908fa0] uppercase">Std</span>
                <span className="text-[11px] font-bold text-[#c0c1ff] uppercase">Pro</span>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-white/[0.04] text-[12px]">
              <div className="flex items-center justify-between py-2.5">
                <span className="text-[#dfe2ee]">Algorithmic Drop-off Teardowns</span>
                <div className="flex items-center gap-6 pr-2">
                  <span className="material-symbols-outlined text-[18px] text-[#4edea3]">check</span>
                  <span className="material-symbols-outlined text-[18px] text-[#4edea3]">check</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-[#dfe2ee]">Client Pitch Decks (White-label)</span>
                <div className="flex items-center gap-6 pr-2">
                  <span className="material-symbols-outlined text-[18px] text-[#4edea3]">check</span>
                  <span className="material-symbols-outlined text-[18px] text-[#4edea3]">check</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <div className="flex flex-col">
                  <span className="text-[#dfe2ee]">1-on-1 Loom Video Creative Audit</span>
                  <span className="text-[10px] text-[#4edea3]">Personalized to your brand</span>
                </div>
                <div className="flex items-center gap-6 pr-2">
                  <span className="material-symbols-outlined text-[18px] text-[#908fa0]">remove</span>
                  <span className="material-symbols-outlined text-[18px] text-[#4edea3]">check</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <div className="flex flex-col">
                  <span className="text-[#dfe2ee]">Direct Strategist In-App Review</span>
                  <span className="text-[10px] text-[#c0c1ff]">Fast &lt;4h SLA response</span>
                </div>
                <div className="flex items-center gap-6 pr-2">
                  <span className="material-symbols-outlined text-[18px] text-[#908fa0]">remove</span>
                  <span className="material-symbols-outlined text-[18px] text-[#4edea3]">check</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-[#dfe2ee]">Unlimited CSV & Notion Sync</span>
                <div className="flex items-center gap-6 pr-2">
                  <span className="material-symbols-outlined text-[18px] text-[#4edea3]">check</span>
                  <span className="material-symbols-outlined text-[18px] text-[#4edea3]">check</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Quote */}
          <div className="rounded-2xl bg-[#1c2028] p-4 shadow-sm border border-white/[0.04] flex flex-col gap-2.5">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.testimonialMarcus}
                alt="Marcus Vance"
                className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-white/10"
              />
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-bold text-[#dfe2ee]">
                    Marcus Vance
                  </span>
                  <span className="text-[11px] text-[#4edea3] font-semibold">
                    Managing Director
                  </span>
                </div>
                <span className="text-[11px] text-[#908fa0]">Kinetic Studio</span>
              </div>
            </div>
            <p className="text-[12px] text-[#c7c4d7] italic leading-relaxed">
              “Husna’s audit isolated an 18% retention drop in our client’s reels sequence within 48 hours. The ROI on this subscription paid for itself on day three.”
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-between px-2 text-[11px] text-[#908fa0]">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-[#4edea3]">security</span>
              <span>SOC2 Type II</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-[#c0c1ff]">lock</span>
              <span>RevenueCat Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-[#4edea3]">check_circle</span>
              <span>App Store Verified</span>
            </div>
          </div>

          {/* Primary Purchase Button */}
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={handleSubscribe}
              disabled={processing}
              className="w-full min-h-[52px] px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#c0c1ff] via-[#d0bcff] to-[#c0c1ff] text-[#1000a9] font-bold text-[15px] flex items-center justify-center gap-2 shadow-[0_8px_24px_-4px_rgba(192,193,255,0.4)] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-80"
              type="button"
            >
              {processing ? (
                <>
                  <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
                  <span>Processing Checkout...</span>
                </>
              ) : isProActive ? (
                <>
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  <span>You Have Pro Access!</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                  <span>
                    Start 7-Day Free Trial • {getPrice()}/mo
                  </span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-[#908fa0]">
              {billingCycle === 'quarterly'
                ? `Then ${getPrice()}/mo billed quarterly. Cancel anytime in 1-tap.`
                : `Then ${getPrice()}/month. Cancel anytime in 1-tap.`}
            </p>

            {/* Auxiliary actions */}
            <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-[#908fa0]">
              <button
                onClick={handleRestore}
                className="hover:text-[#dfe2ee] underline cursor-pointer"
                type="button"
              >
                Restore Purchases
              </button>
              <span>•</span>
              <button
                onClick={handleRedeem}
                className="hover:text-[#dfe2ee] underline cursor-pointer"
                type="button"
              >
                Redeem Promo Code
              </button>
              <span>•</span>
              <button
                onClick={onClose}
                className="hover:text-[#dfe2ee] underline cursor-pointer"
                type="button"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
