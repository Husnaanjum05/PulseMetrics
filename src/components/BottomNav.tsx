import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const navItems: { id: TabType; label: string; icon: string }[] = [
    { id: 'report', label: 'Report', icon: 'insights' },
    { id: 'matrix', label: 'Matrix', icon: 'grid_view' },
    { id: 'actions', label: 'Actions', icon: 'checklist' },
    { id: 'pitch', label: 'Pitch', icon: 'campaign' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-[#0a0e16]/90 backdrop-blur-xl border-t border-white/[0.06] shadow-[0_-4px_16px_rgba(0,0,0,0.35)]">
      <div className="max-w-md mx-auto grid grid-cols-4 items-center h-16 px-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center gap-1 min-h-[44px] py-1 transition-all rounded-lg ${
                isActive
                  ? 'text-[#c0c1ff] font-bold'
                  : 'text-[#908fa0] hover:text-[#dfe2ee]'
              } active:scale-95`}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="relative">
                <span
                  className="material-symbols-outlined text-[22px] transition-transform duration-200"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#c0c1ff] shadow-[0_0_6px_#c0c1ff]"></span>
                )}
              </div>
              <span className="text-[11px] leading-none tracking-tight font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
