import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TabType, ClientProfile } from './types';
import { SAMPLE_CLIENTS } from './data';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import ReportTab from './components/ReportTab';
import MatrixTab from './components/MatrixTab';
import ActionsTab from './components/ActionsTab';
import PitchTab from './components/PitchTab';
import PaywallModal from './components/PaywallModal';
import ClientSelectorModal from './components/ClientSelectorModal';
import ScheduleModal from './components/ScheduleModal';
import DeckPreviewModal from './components/DeckPreviewModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('report');
  const [selectedClient, setSelectedClient] = useState<ClientProfile>(SAMPLE_CLIENTS[0]);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isClientSelectorOpen, setIsClientSelectorOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isDeckPreviewOpen, setIsDeckPreviewOpen] = useState(false);
  const [isProActive, setIsProActive] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleApplyOptimization = () => {
    showToast('Optimization applied: Reallocated 35% budget to short-form hooks');
  };

  const handleSyncNotion = () => {
    showToast('Roadmap synced: 4 sub-tasks pushed to client Notion workspace');
  };

  const handleDownloadPdf = () => {
    showToast(`PDF Dossier generated for ${selectedClient.name}`);
  };

  const handleActivatePro = () => {
    setIsProActive(true);
    showToast('Pro Advisory Activated! Welcome to PulseMetrics Pro.');
  };

  const handleGeneratePitchDeck = () => {
    setIsDeckPreviewOpen(true);
    showToast('Customized pitch deck generated with your branding');
  };

  return (
    <div className="min-h-screen bg-[#0f131c] text-[#dfe2ee] font-sans antialiased selection:bg-[#c0c1ff] selection:text-[#1000a9]">
      {/* Global Floating Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-18 left-1/2 -translate-x-1/2 z-50 max-w-sm w-[90%] px-4 py-2.5 rounded-full bg-[#262a33]/95 backdrop-blur-md text-[#dfe2ee] text-[12px] font-semibold shadow-2xl flex items-center gap-2 border border-white/10"
          >
            <span className="material-symbols-outlined text-[#4edea3] text-[18px] shrink-0">
              check_circle
            </span>
            <span className="truncate">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Application Header */}
      <Header
        activeTab={activeTab}
        onOpenClientSelector={() => setIsClientSelectorOpen(true)}
        onExportPdf={() => setIsDeckPreviewOpen(true)}
        onOpenPaywall={() => setIsPaywallOpen(true)}
      />

      {/* Main Single-Column Scrollable Viewport */}
      <main className="max-w-md mx-auto pt-20 pb-24 px-4 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {activeTab === 'report' && (
            <motion.div
              key="report"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="w-full flex-1"
            >
              <ReportTab
                client={selectedClient}
                onScheduleDebrief={() => setIsScheduleModalOpen(true)}
                onDownloadPdf={handleDownloadPdf}
              />
            </motion.div>
          )}

          {activeTab === 'matrix' && (
            <motion.div
              key="matrix"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="w-full flex-1"
            >
              <MatrixTab onApplyOptimization={handleApplyOptimization} />
            </motion.div>
          )}

          {activeTab === 'actions' && (
            <motion.div
              key="actions"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="w-full flex-1"
            >
              <ActionsTab onSyncNotion={handleSyncNotion} />
            </motion.div>
          )}

          {activeTab === 'pitch' && (
            <motion.div
              key="pitch"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="w-full flex-1"
            >
              <PitchTab
                onOpenPaywall={() => setIsPaywallOpen(true)}
                onPreviewDeck={() => setIsDeckPreviewOpen(true)}
                onGeneratePitchDeck={handleGeneratePitchDeck}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Modal 1: Client / Period Selector */}
      <ClientSelectorModal
        isOpen={isClientSelectorOpen}
        onClose={() => setIsClientSelectorOpen(false)}
        selectedClient={selectedClient}
        onSelectClient={(c) => {
          setSelectedClient(c);
          showToast(`Switched workspace to ${c.name}`);
        }}
      />

      {/* Modal 2: Schedule Strategy Debrief */}
      <ScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        clientName={selectedClient.name}
      />

      {/* Modal 3: Deck / PDF Presentation Preview */}
      <DeckPreviewModal
        isOpen={isDeckPreviewOpen}
        onClose={() => setIsDeckPreviewOpen(false)}
        client={selectedClient}
      />

      {/* Modal 4: Pro Subscription Paywall */}
      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={() => setIsPaywallOpen(false)}
        isProActive={isProActive}
        onActivatePro={handleActivatePro}
      />
    </div>
  );
}
