import { useState } from 'react';
import { INITIAL_CHECKLIST, ASSETS } from '../data';
import { ChecklistTask } from '../types';

interface ActionsTabProps {
  onSyncNotion: () => void;
}

export default function ActionsTab({ onSyncNotion }: ActionsTabProps) {
  const [tasks, setTasks] = useState<ChecklistTask[]>(INITIAL_CHECKLIST);
  const [syncing, setSyncing] = useState(false);
  const [synced, setSynced] = useState(false);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent = (completedCount / tasks.length) * 100;

  const handleSyncClick = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setSynced(true);
      onSyncNotion();
      setTimeout(() => setSynced(false), 3500);
    }, 1100);
  };

  return (
    <div className="flex flex-col w-full gap-5 pb-6">
      {/* Executive Header & Month Badge */}
      <div className="flex flex-col gap-1.5 mt-1">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#262a33] text-[#c0c1ff] border border-white/5">
            <span
              className="material-symbols-outlined text-[15px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Executive Advisory
            </span>
          </div>
          <span className="text-[12px] font-semibold text-[#4edea3] flex items-center gap-1.5 bg-[#181c24] px-2.5 py-0.5 rounded-full border border-[#4edea3]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
            High Impact Focus
          </span>
        </div>

        <h2 className="text-[22px] font-bold text-[#dfe2ee] leading-tight font-display mt-1">
          Strategic Observations & Next Month Roadmap
        </h2>

        <div className="flex items-center gap-2 text-[#c7c4d7] text-[12px]">
          <span className="material-symbols-outlined text-[16px] text-[#908fa0]">
            calendar_month
          </span>
          <span>Cycle: November 2024</span>
          <span>•</span>
          <span className="text-[#c0c1ff] font-semibold">
            Deliverable Tier: Agency Growth Plan
          </span>
        </div>
      </div>

      {/* Micro Impact Bar */}
      <div className="grid grid-cols-3 gap-2 bg-[#181c24] p-2.5 rounded-2xl border border-white/[0.04]">
        <div className="flex flex-col items-center text-center p-2 rounded-xl bg-[#1c2028]">
          <span className="text-[10px] font-semibold text-[#908fa0] uppercase">
            Projected Reach
          </span>
          <span className="text-[16px] font-bold text-[#c0c1ff] font-display mt-0.5">
            +42.8%
          </span>
        </div>
        <div className="flex flex-col items-center text-center p-2 rounded-xl bg-[#1c2028]">
          <span className="text-[10px] font-semibold text-[#908fa0] uppercase">
            Target Metric
          </span>
          <span className="text-[16px] font-bold text-[#4edea3] font-display mt-0.5">
            55K Subs
          </span>
        </div>
        <div className="flex flex-col items-center text-center p-2 rounded-xl bg-[#1c2028]">
          <span className="text-[10px] font-semibold text-[#908fa0] uppercase">
            ROI Velocity
          </span>
          <span className="text-[16px] font-bold text-[#d0bcff] font-display mt-0.5">
            3.4x
          </span>
        </div>
      </div>

      {/* Strategic Observation Cards Container */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-[#dfe2ee] flex items-center gap-2 font-display">
            <span className="w-2 h-2 rounded-full bg-[#c0c1ff]" />
            Core Strategic Shifts
          </h3>
          <span className="text-[10px] font-semibold text-[#908fa0] tracking-wider uppercase">
            3 Key Vectors
          </span>
        </div>

        {/* Card 1: Problem-Agitate-Solve Reels */}
        <div className="relative overflow-hidden rounded-2xl bg-[#181c24] p-5 shadow-md flex flex-col gap-4 border border-white/[0.04]">
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#8083ff]/10 blur-2xl pointer-events-none" />
          
          <div className="flex items-start justify-between gap-2 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#c0c1ff]/10 flex items-center justify-center text-[#c0c1ff] shrink-0 border border-[#c0c1ff]/20">
                <span className="material-symbols-outlined text-[20px]">movie_filter</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#4edea3]">
                  Observation 01 • Scale Vector
                </span>
                <h4 className="text-[16px] font-bold text-[#dfe2ee] font-display leading-tight">
                  Double Down on 20-30s Reels
                </h4>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#4edea3]/10 text-[#4edea3] text-[11px] font-bold whitespace-nowrap">
              64% Share
            </span>
          </div>

          {/* Supporting Image */}
          <div className="relative w-full h-32 rounded-xl overflow-hidden shadow-inner">
            <img
              className="w-full h-full object-cover"
              src={ASSETS.obs1Image}
              alt="Video analytics on phone"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181c24] via-[#181c24]/40 to-transparent" />
            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[12px] text-[#dfe2ee] font-medium">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#4edea3]">bolt</span>
                Format: Problem-Agitate-Solve
              </span>
              <span className="text-[11px] text-[#c0c1ff] font-bold">
                Duration: 22s
              </span>
            </div>
          </div>

          {/* Rigorous Fact block */}
          <div className="p-3 rounded-xl bg-[#1c2028] flex items-start gap-2.5 border border-white/[0.03]">
            <span className="material-symbols-outlined text-[#4edea3] text-[18px] shrink-0 mt-0.5">
              query_stats
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#908fa0]">
                Verified Fact
              </span>
              <p className="text-[12px] text-[#dfe2ee] leading-snug mt-0.5">
                Drove <span className="text-[#4edea3] font-bold">64% of total follower acquisition</span> in October with a 4.2x algorithmic retention over baseline formats.
              </p>
            </div>
          </div>

          {/* Prescriptive Action */}
          <div className="p-3.5 rounded-xl bg-[#353942]/40 flex flex-col gap-1 border border-white/[0.04]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#c0c1ff] flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">arrow_circle_right</span>
              Prescribed Action
            </span>
            <p className="text-[13px] text-[#dfe2ee] leading-relaxed">
              Produce 3x weekly hooks specifically exposing <span className="text-[#c0c1ff] font-semibold">common skincare myths</span>. Anchor each within the first 1.8 seconds with bold on-screen captions.
            </p>
          </div>
        </div>

        {/* Card 2: Retire Generic Graphic Quotes */}
        <div className="relative overflow-hidden rounded-2xl bg-[#181c24] p-5 shadow-md flex flex-col gap-4 border border-white/[0.04]">
          <div className="flex items-start justify-between gap-2 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#93000a]/40 flex items-center justify-center text-[#ffb4ab] shrink-0 border border-[#ffb4ab]/20">
                <span className="material-symbols-outlined text-[20px]">cancel</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffb4ab]">
                  Observation 02 • Friction Point
                </span>
                <h4 className="text-[16px] font-bold text-[#dfe2ee] font-display leading-tight">
                  Retire Generic Graphic Quotes
                </h4>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#ffb4ab]/10 text-[#ffb4ab] text-[11px] font-bold whitespace-nowrap">
              Deprecate
            </span>
          </div>

          {/* Supporting Image */}
          <div className="relative w-full h-32 rounded-xl overflow-hidden shadow-inner">
            <img
              className="w-full h-full object-cover"
              src={ASSETS.obs2Image}
              alt="Video Q&A creator"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181c24] via-[#181c24]/40 to-transparent" />
            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[12px] text-[#dfe2ee] font-medium">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#ffb4ab]">trending_down</span>
                Static Quotes: 0.8% ER
              </span>
              <span className="text-[11px] text-[#d0bcff] font-bold">
                Shift: Video Q&A
              </span>
            </div>
          </div>

          {/* Rigorous Fact block */}
          <div className="p-3 rounded-xl bg-[#1c2028] flex items-start gap-2.5 border border-white/[0.03]">
            <span className="material-symbols-outlined text-[#ffb4ab] text-[18px] shrink-0 mt-0.5">
              report_problem
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#908fa0]">
                Verified Fact
              </span>
              <p className="text-[12px] text-[#dfe2ee] leading-snug mt-0.5">
                Static quote tiles yielded an anemic <span className="text-[#ffb4ab] font-bold">0.8% engagement rate</span> and generated exactly zero direct message inquiries or sales leads.
              </p>
            </div>
          </div>

          {/* Prescriptive Action */}
          <div className="p-3.5 rounded-xl bg-[#353942]/40 flex flex-col gap-1 border border-white/[0.04]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#d0bcff] flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">autorenew</span>
              Prescribed Pivot
            </span>
            <p className="text-[13px] text-[#dfe2ee] leading-relaxed">
              Directly substitute text cards with high-trust <span className="text-[#d0bcff] font-semibold">‘Q&A Comment Reply’ reels</span>, addressing community questions face-to-camera with product demonstrations.
            </p>
          </div>
        </div>

        {/* Card 3: Optimal Posting Window Shift */}
        <div className="relative overflow-hidden rounded-2xl bg-[#181c24] p-5 shadow-md flex flex-col gap-4 border border-white/[0.04]">
          <div className="flex items-start justify-between gap-2 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#571bc1]/30 flex items-center justify-center text-[#d0bcff] shrink-0 border border-[#d0bcff]/20">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#d0bcff]">
                  Observation 03 • Algorithmic Timing
                </span>
                <h4 className="text-[16px] font-bold text-[#dfe2ee] font-display leading-tight">
                  Optimal Posting Window Shift
                </h4>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#c0c1ff]/10 text-[#c0c1ff] text-[11px] font-bold whitespace-nowrap">
              +310% Velocity
            </span>
          </div>

          {/* Inline Timing Heatmap Curve */}
          <div className="p-3.5 rounded-xl bg-[#1c2028] flex flex-col gap-2 border border-white/[0.03]">
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-[#908fa0]">Active Demographic Window (EST)</span>
              <span className="text-[#4edea3] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
                7:30 PM Peak
              </span>
            </div>

            <div className="w-full h-16 flex items-end justify-between gap-1.5 pt-3">
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#464554]/40 rounded-t h-4" />
                <span className="text-[10px] text-[#908fa0]">12p</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#464554]/40 rounded-t h-6" />
                <span className="text-[10px] text-[#908fa0]">2p</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#464554]/50 rounded-t h-8" />
                <span className="text-[10px] text-[#908fa0]">4p</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#c0c1ff]/40 rounded-t h-11" />
                <span className="text-[10px] text-[#908fa0]">6p</span>
              </div>
              {/* New Peak */}
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#c0c1ff] rounded-t h-14 relative shadow-[0_0_10px_rgba(192,193,255,0.4)]">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] text-[#1000a9] bg-[#c0c1ff] px-1 rounded-full font-bold">
                    ★
                  </span>
                </div>
                <span className="text-[10px] text-[#c0c1ff] font-bold">7:30p</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#c0c1ff]/50 rounded-t h-9" />
                <span className="text-[10px] text-[#908fa0]">9p</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#464554]/30 rounded-t h-3" />
                <span className="text-[10px] text-[#908fa0]">11p</span>
              </div>
            </div>
          </div>

          {/* Fact & Action Combo */}
          <div className="flex flex-col gap-2">
            <p className="text-[12px] text-[#dfe2ee]">
              <strong className="text-[#dfe2ee] font-semibold">Audience migration confirmed:</strong> Target consumers are now engaging during evening commute wind-down rather than midday lunch breaks.
            </p>
            <div className="p-3 rounded-xl bg-[#353942]/40 text-[12px] text-[#dfe2ee] flex items-center gap-2 border border-white/[0.04]">
              <span className="material-symbols-outlined text-[#c0c1ff] text-[18px]">
                alarm_on
              </span>
              <span>
                Reschedule all automated social queues to <strong className="text-[#c0c1ff] font-bold">7:15 PM EST</strong> for maximum launch velocity.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Checklist Interactive Module */}
      <div className="flex flex-col gap-4 bg-[#181c24] p-5 rounded-2xl shadow-lg border border-white/[0.04]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[16px] font-bold text-[#dfe2ee] font-display">
              Client Implementation Checklist
            </h3>
            <p className="text-[12px] text-[#c7c4d7]">
              November tactical deliverables
            </p>
          </div>
          <div className="flex items-center gap-1 bg-[#1c2028] px-3 py-1 rounded-full border border-white/5">
            <span className="text-[12px] font-bold text-[#4edea3]">
              {completedCount}
            </span>
            <span className="text-[12px] text-[#908fa0]">
              / {tasks.length} done
            </span>
          </div>
        </div>

        {/* Task List */}
        <div className="flex flex-col gap-2.5">
          {tasks.map((task) => (
            <label
              key={task.id}
              className={`group flex items-start gap-3 p-3.5 rounded-xl transition-all cursor-pointer select-none border ${
                task.completed
                  ? 'bg-[#1c2028]/60 border-white/[0.02] opacity-75'
                  : 'bg-[#1c2028] hover:bg-[#262a33] border-white/[0.04]'
              }`}
            >
              <div className="pt-0.5">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                    task.completed
                      ? 'bg-[#4edea3] text-[#000703]'
                      : 'bg-[#31353e] text-transparent hover:border-[#c0c1ff]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px] font-bold">
                    check
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[13px] font-semibold transition-colors ${
                      task.completed
                        ? 'line-through text-[#908fa0]'
                        : 'text-[#dfe2ee] group-hover:text-[#c0c1ff]'
                    }`}
                  >
                    {task.title}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      task.priority === 'High'
                        ? 'bg-[#ffb4ab]/20 text-[#ffb4ab]'
                        : 'bg-[#d0bcff]/20 text-[#d0bcff]'
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
                <p className="text-[11px] text-[#c7c4d7] mt-0.5 leading-snug">
                  {task.description}
                </p>
              </div>
            </label>
          ))}
        </div>

        {/* Motivational Progress Fill Bar */}
        <div className="w-full bg-[#1c2028] h-2 rounded-full overflow-hidden mt-1">
          <div
            className="h-full bg-[#4edea3] rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(78,222,163,0.6)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Consultant Endorsement & Signature Stamp */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#262a33] via-[#1c2028] to-[#181c24] p-5 shadow-xl border border-white/[0.05]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  className="w-11 h-11 rounded-full object-cover shadow-md ring-2 ring-white/10"
                  src={ASSETS.elenaVancePortrait}
                  alt="Elena Vance, MSc"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#4edea3] flex items-center justify-center border border-[#1c2028]">
                  <span className="material-symbols-outlined text-[10px] text-[#003824] font-bold">
                    check
                  </span>
                </span>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#dfe2ee] leading-snug font-display">
                  Elena Vance, MSc
                </h4>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c0c1ff]">
                  PulseMetrics Lead Strategist
                </span>
              </div>
            </div>

            <p className="text-[13px] text-[#c7c4d7] italic mt-1 leading-relaxed">
              “Targeting <strong className="text-[#4edea3] font-bold not-italic">55K verified followers</strong> and <strong className="text-[#c0c1ff] font-bold not-italic">400K cumulative reach</strong> by end of Q4. Executing the myth-debunking reels with rigorous hook timing will unlock algorithmic recommendation clusters.”
            </p>

            <div className="flex items-center gap-3 pt-1 text-[11px] text-[#908fa0]">
              <span>Sign-off Hash: #PM-Q4-8841</span>
              <span>•</span>
              <span className="text-[#4edea3] flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[14px]">lock</span>
                Audited Strategy
              </span>
            </div>
          </div>

          {/* Stamp Badge Accent */}
          <div className="shrink-0 flex flex-col items-center justify-center p-2 rounded-xl bg-[#31353e]/40 text-center w-20 border border-white/5 shadow-sm">
            <span className="material-symbols-outlined text-[24px] text-[#c0c1ff]">
              workspace_premium
            </span>
            <span className="text-[9px] font-bold text-[#dfe2ee] uppercase tracking-tight mt-1 leading-tight">
              Official Deliverable
            </span>
          </div>
        </div>
      </div>

      {/* Primary Interactive CTA */}
      <div className="flex flex-col gap-2 pt-1">
        <button
          onClick={handleSyncClick}
          disabled={syncing}
          className={`w-full h-12 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-lg cursor-pointer ${
            synced
              ? 'bg-[#00885d] text-[#dfe2ee]'
              : 'bg-[#c0c1ff] hover:bg-[#c0c1ff]/90 text-[#1000a9] shadow-[0_8px_20px_-4px_rgba(192,193,255,0.3)]'
          }`}
          type="button"
        >
          {syncing ? (
            <>
              <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
              <span>Syncing Roadmap...</span>
            </>
          ) : synced ? (
            <>
              <span className="material-symbols-outlined text-[20px]">cloud_done</span>
              <span>Synced with Notion & Slack</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]">task_alt</span>
              <span>Approve & Sync Roadmap to Notion</span>
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-[#908fa0]">
          Automatically generates sub-tasks inside client connected workspace.
        </p>
      </div>
    </div>
  );
}
