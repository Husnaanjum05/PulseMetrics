import { TabType } from '../types';
import { ASSETS } from '../data';

interface HeaderProps {
  activeTab: TabType;
  onOpenClientSelector: () => void;
  onExportPdf: () => void;
  onOpenPaywall: () => void;
}

export default function Header({
  activeTab,
  onOpenClientSelector,
  onExportPdf,
  onOpenPaywall,
}: HeaderProps) {
  const getTitle = () => {
    switch (activeTab) {
      case 'report':
        return 'Monthly Report';
      case 'matrix':
        return 'Content Matrix';
      case 'actions':
        return 'Action Plan & Observations';
      case 'pitch':
        return 'Client Pitch & Outreach';
      default:
        return 'Monthly Report';
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0f131c]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
      <div className="max-w-md mx-auto h-16 px-4 flex items-center justify-between gap-2">
        {/* Brand identity */}
        <div className="flex items-center gap-2.5 min-w-0">
          <button 
            type="button" 
            onClick={onOpenPaywall}
            className="flex items-center shrink-0 active:scale-95 transition-transform"
            title="PulseMetrics Pro"
          >
            <img
              alt="PulseMetrics Logo"
              className="h-8 w-auto object-contain shrink-0"
              src={ASSETS.logo}
            />
          </button>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#908fa0] truncate">
              PulseMetrics
            </span>
            <h1 className="text-[16px] font-bold text-[#dfe2ee] truncate leading-tight font-display">
              {getTitle()}
            </h1>
          </div>
        </div>

        {/* Quick action controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            aria-label="Switch Client or Period"
            className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg text-[#c7c4d7] hover:text-[#dfe2ee] hover:bg-white/[0.04] active:scale-95 transition-all"
            type="button"
            onClick={onOpenClientSelector}
            title="Switch Client or Cycle"
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
          
          <button
            aria-label="Export PDF Report"
            className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg text-[#c7c4d7] hover:text-[#dfe2ee] hover:bg-white/[0.04] active:scale-95 transition-all"
            type="button"
            onClick={onExportPdf}
            title="Export Dossier PDF"
          >
            <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
          </button>

          {/* User Profile Avatar with Pro Status ring */}
          <button
            type="button"
            onClick={onOpenPaywall}
            className="relative ml-1 flex items-center justify-center min-h-[40px] min-w-[40px] rounded-full active:scale-95 transition-transform group"
            title="Subscription & Pro Advisory"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-white/10 group-hover:ring-[#c0c1ff]/50 transition-all"
              src={ASSETS.userAvatar}
            />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#4edea3] shadow-[0_0_8px_rgba(78,222,163,0.8)] border border-[#0f131c]"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
