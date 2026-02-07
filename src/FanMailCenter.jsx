import React, { useState } from "react";
import { ChevronRight, X, Reply, Archive } from "lucide-react";

// --- Mock Data ---
const MESSAGES = [
  {
    id: 1,
    sender: "Alice Walker",
    recipient: "John Doe",
    subject: "Love your latest work",
    preview:
      "Hi John, I just wanted to say that your latest piece really spoke to me. Keep up the great work!",
    date: "2023-10-24",
    isRead: false,
    folder: "Inbox",
  },
  {
    id: 2,
    sender: "Bob Miller",
    recipient: "Sarah Jones",
    subject: "Commission request",
    preview: "Would you be open to doing a custom portrait for a gift?",
    date: "2023-10-23",
    isRead: true,
    folder: "Inbox",
  },
];

export default function FanMailCenter() {
  const [activeTab, setActiveTab] = useState("Inbox");
  const [selectedMessage, setSelectedMessage] = useState(null); // State for side panel

  const filteredMessages = MESSAGES.filter((msg) => msg.folder === activeTab);

  return (
    <div className="relative p-8 space-y-6 max-w-7xl mx-auto min-h-screen font-sans text-[#1e293b] overflow-x-hidden">
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-black tracking-tight text-[#1e293b]">
          Fan Mail Center
        </h1>
        <p className="text-[#64748b] text-sm font-medium mt-1">
          Review and forward messages from the community to artists.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center border-b border-[#f1f5f9] gap-8">
        {["Inbox", "Forwarded", "Archived"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-bold relative transition-all ${
              activeTab === tab
                ? "text-[#2563eb]"
                : "text-[#94a3b8] hover:text-[#64748b]"
            }`}
          >
            <div className="flex items-center gap-2">
              {tab}
              {tab === "Inbox" && (
                <span className="bg-[#eff6ff] text-[#2563eb] text-[10px] px-2 py-0.5 rounded-full font-black">
                  1
                </span>
              )}
            </div>
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563eb] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Message List */}
      <div className="bg-white rounded-[24px] border border-[#f1f5f9] shadow-sm overflow-hidden">
        <div className="divide-y divide-[#f1f5f9]">
          {filteredMessages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => setSelectedMessage(msg)} // Trigger side panel
              className="group flex items-center px-8 py-6 hover:bg-[#f8fafc]/50 transition-colors cursor-pointer"
            >
              <div className="w-6 flex-shrink-0">
                {!msg.isRead && (
                  <div className="w-2 h-2 bg-[#2563eb] rounded-full" />
                )}
              </div>
              <div className="w-48 flex-shrink-0">
                <h4 className="font-black text-[14px] text-[#1e293b]">
                  {msg.sender}
                </h4>
                <p className="text-[12px] text-[#94a3b8] font-bold">
                  To: {msg.recipient}
                </p>
              </div>
              <div className="flex-1 px-4">
                <span className="font-black text-[14px] text-[#1e293b]">
                  {msg.subject}
                </span>
                <span className="mx-2 text-[#cbd5e1]">—</span>
                <span className="text-[14px] text-[#64748b] font-medium line-clamp-1">
                  {msg.preview}
                </span>
              </div>
              <div className="flex items-center gap-6 ml-4">
                <span className="text-[12px] font-bold text-[#94a3b8]">
                  {msg.date}
                </span>
                <ChevronRight
                  size={18}
                  className="text-[#cbd5e1] group-hover:text-[#2563eb]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integrated Message Details Side Panel */}
      {selectedMessage && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 z-[150] bg-[#0f172a]/20 backdrop-blur-[1px] transition-opacity"
            onClick={() => setSelectedMessage(null)}
          />

          <div className="fixed inset-y-0 right-0 z-[200] w-full max-w-[540px] bg-white shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            {/* Side Panel Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-[#f1f5f9]">
              <h2 className="text-[18px] font-black text-[#1e293b]">
                Message Details
              </h2>
              <button
                onClick={() => setSelectedMessage(null)}
                className="text-[#94a3b8] hover:text-[#64748b]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              <div className="flex justify-between items-center">
                {!selectedMessage.isRead && (
                  <span className="bg-[#eff6ff] text-[#2563eb] text-[10px] font-black px-3 py-1 rounded-full uppercase">
                    Unread
                  </span>
                )}
                <span className="text-[12px] font-bold text-[#94a3b8]">
                  {selectedMessage.date}
                </span>
              </div>

              {/* Metadata Fields */}
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black text-[#cbd5e1] uppercase tracking-widest mb-1 block">
                    From
                  </label>
                  <p className="text-[18px] font-black text-[#1e293b]">
                    {selectedMessage.sender}
                  </p>
                </div>
                <div>
                  <label className="text-[10px] font-black text-[#cbd5e1] uppercase tracking-widest mb-1 block">
                    To Artist
                  </label>
                  <p className="text-[16px] font-black text-[#2563eb]">
                    {selectedMessage.recipient}
                  </p>
                </div>
                <div>
                  <label className="text-[10px] font-black text-[#cbd5e1] uppercase tracking-widest mb-1 block">
                    Subject
                  </label>
                  <p className="text-[15px] font-black text-[#1e293b]">
                    {selectedMessage.subject}
                  </p>
                </div>
              </div>

              {/* Message Content */}
              <div className="bg-[#f8fafc] rounded-[16px] p-6 border border-[#f1f5f9]">
                <p className="text-[14px] leading-relaxed text-[#475569] font-medium whitespace-pre-wrap">
                  {selectedMessage.preview}
                </p>
              </div>

              {/* Disclaimer */}
              <div className="bg-[#fffbeb] border border-[#fef3c7] rounded-[12px] p-4">
                <p className="text-[11px] leading-relaxed text-[#92400e] font-medium">
                  <span className="font-black">Disclaimer:</span> You are acting
                  as an intermediary. Messages must be manually printed and
                  mailed to the facility...
                </p>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-8 border-t border-[#f1f5f9] bg-[#fcfdfe] flex gap-3">
              <button className="flex-1 bg-[#c4ab89] hover:bg-[#b39673] text-white py-4 rounded-[12px] font-black text-[12px] uppercase flex items-center justify-center gap-2 shadow-md">
                <Reply size={16} /> Mark Forwarded
              </button>
              <button className="px-6 border border-[#e2e8f0] text-[#64748b] rounded-[12px] hover:bg-[#f1f5f9]">
                <Archive size={18} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
