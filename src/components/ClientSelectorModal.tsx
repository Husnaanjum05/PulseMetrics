import { ClientProfile } from '../types';
import { SAMPLE_CLIENTS } from '../data';

interface ClientSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedClient: ClientProfile;
  onSelectClient: (client: ClientProfile) => void;
}

export default function ClientSelectorModal({
  isOpen,
  onClose,
  selectedClient,
  onSelectClient,
}: ClientSelectorModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0e16]/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-md bg-[#181c24] rounded-t-3xl sm:rounded-2xl border border-white/10 shadow-2xl p-5 flex flex-col gap-4 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#c0c1ff]">
              tune
            </span>
            <h3 className="text-[16px] font-bold text-[#dfe2ee] font-display">
              Switch Client Workspace
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#908fa0] hover:text-[#dfe2ee] hover:bg-white/5 transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {SAMPLE_CLIENTS.map((c) => {
            const isSelected = c.id === selectedClient.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  onSelectClient(c);
                  onClose();
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl transition-all text-left border cursor-pointer ${
                  isSelected
                    ? 'bg-[#262a33] border-[#c0c1ff]/50 shadow-md'
                    : 'bg-[#1c2028] hover:bg-[#262a33]/60 border-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={c.avatarUrl}
                    alt={c.name}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-white/10 shrink-0"
                  />
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] font-bold text-[#dfe2ee] truncate">
                        {c.name}
                      </span>
                      {isSelected && (
                        <span className="material-symbols-outlined text-[#4edea3] text-[16px]">
                          check_circle
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#908fa0] truncate">
                      {c.tier} • {c.auditPeriod}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#0a0e16] text-[#c0c1ff] border border-white/5">
                    {c.fee}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="pt-2 text-center">
          <p className="text-[11px] text-[#908fa0]">
            Pro accounts can manage unlimited concurrent creator dossiers.
          </p>
        </div>
      </div>
    </div>
  );
}
