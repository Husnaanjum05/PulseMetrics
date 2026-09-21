import { useState } from 'react';
import { ASSETS } from '../data';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientName: string;
}

export default function ScheduleModal({
  isOpen,
  onClose,
  clientName,
}: ScheduleModalProps) {
  const [selectedSlot, setSelectedSlot] = useState<string>('Tomorrow, 2:00 PM EST');
  const [scheduled, setScheduled] = useState(false);
  const [agenda, setAgenda] = useState('Review November hook testing & 7:15 PM posting queue shifts');

  if (!isOpen) return null;

  const slots = [
    'Tomorrow, 11:00 AM EST',
    'Tomorrow, 2:00 PM EST',
    'Thursday, 4:30 PM EST',
    'Friday, 1:00 PM EST',
  ];

  const handleConfirm = () => {
    setScheduled(true);
    setTimeout(() => {
      setScheduled(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0e16]/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-md bg-[#181c24] rounded-t-3xl sm:rounded-2xl border border-white/10 shadow-2xl p-5 flex flex-col gap-4 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#4edea3]">
              calendar_month
            </span>
            <h3 className="text-[16px] font-bold text-[#dfe2ee] font-display">
              Schedule Strategy Debrief
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

        {/* Lead Strategist strip */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#262a33] border border-white/[0.04]">
          <img
            src={ASSETS.elenaVancePortrait}
            alt="Elena Vance"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-[#c0c1ff]/30"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] font-bold text-[#dfe2ee]">Elena Vance, MSc</span>
            <span className="text-[11px] text-[#c0c1ff]">Lead Growth Consultant • {clientName}</span>
          </div>
        </div>

        {/* Available slots */}
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#908fa0]">
            Select Priority Slot (30m Google Meet)
          </label>
          <div className="grid grid-cols-1 gap-2">
            {slots.map((slot) => {
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`flex items-center justify-between p-3 rounded-xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#c0c1ff]/15 border-[#c0c1ff] text-[#dfe2ee]'
                      : 'bg-[#1c2028] border-white/[0.03] text-[#c7c4d7] hover:bg-[#262a33]'
                  }`}
                >
                  <span className="text-[13px] font-semibold">{slot}</span>
                  <span
                    className={`material-symbols-outlined text-[18px] ${
                      isSelected ? 'text-[#c0c1ff]' : 'text-transparent'
                    }`}
                  >
                    check_circle
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Agenda */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#908fa0]">
            Meeting Agenda / Focus Areas
          </label>
          <textarea
            value={agenda}
            onChange={(e) => setAgenda(e.target.value)}
            rows={2}
            className="w-full rounded-xl bg-[#1c2028] border border-white/[0.05] p-3 text-[12px] text-[#dfe2ee] focus:outline-none focus:border-[#c0c1ff]"
          />
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleConfirm}
          disabled={scheduled}
          className="w-full h-12 rounded-xl bg-[#c0c1ff] hover:bg-[#c0c1ff]/90 text-[#1000a9] font-bold text-[14px] flex items-center justify-center gap-2 active:scale-98 transition-all shadow-md cursor-pointer disabled:opacity-80"
        >
          {scheduled ? (
            <>
              <span className="material-symbols-outlined text-[20px]">done</span>
              <span>Debrief Confirmed! Calendar Invite Sent</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]">event_available</span>
              <span>Confirm & Send Calendar Invite</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
