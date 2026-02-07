import React, { useState } from "react";
import {
  Bell,
  CheckCircle2,
  Mail,
  UserPlus,
  Hammer,
  Settings,
  Trash2,
  Check,
  Clock,
  Eye,
} from "lucide-react";

// --- Mock Data ---
const NOTIFICATION_DATA = [
  {
    id: 1,
    type: "New Bid Placed",
    content: "ArtCollector99 placed a bid of $150 on 'Desert Solitude'",
    time: "6h ago",
    status: "unread",
    icon: Hammer,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    id: 2,
    type: "Artwork Uploaded",
    content: "John Doe uploaded a new artwork 'Freedom of Mind'",
    time: "7h ago",
    status: "unread",
    icon: Eye,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    id: 3,
    type: "New Fan Mail",
    content: "Alice Walker sent a message to Sarah Jones",
    time: "7h ago",
    status: "read",
    icon: Mail,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    id: 4,
    type: "New Member Registration",
    content: "Bob Miller joined the platform",
    time: "8h ago",
    status: "read",
    icon: UserPlus,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    id: 5,
    type: "Auction Ending Soon",
    content: "Auction for 'Silent Night' ends in 2 hours",
    time: "9h ago",
    status: "unread",
    icon: Hammer,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    id: 6,
    type: "System Update",
    content: "Platform maintenance scheduled for tonight at 2 AM",
    time: "10h ago",
    status: "read",
    icon: Settings,
    color: "text-slate-500",
    bg: "bg-slate-50",
  },
];

export default function NotificationsPage() {
  const [filter, setFilter] = useState("all");
  const [notifications] = useState(NOTIFICATION_DATA);

  const filteredNotifs = notifications.filter(
    (n) => filter === "all" || n.status === filter,
  );

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto min-h-screen font-sans text-[#1e293b]">
      {/* Header with Actions */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-[28px] font-black tracking-tight text-[#1e293b]">
            Notifications
          </h1>
          <p className="text-[#64748b] text-sm font-medium mt-1">
            Stay updated with all platform activity
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] rounded-[10px] text-[12px] font-bold text-[#475569] hover:bg-[#f8fafc] transition-all">
            <Check size={16} /> Mark all as read
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] rounded-[10px] text-[12px] font-bold text-[#475569] hover:bg-[#f8fafc] transition-all">
            <Trash2 size={16} /> Clear all
          </button>
        </div>
      </div>

      {/* Stats Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          label="Total"
          count={8}
          icon={<Bell size={20} />}
          color="blue"
        />
        <StatCard
          label="Unread"
          count={3}
          icon={<Bell size={20} />}
          color="orange"
        />
        <StatCard
          label="Read"
          count={5}
          icon={<CheckCircle2 size={20} />}
          color="green"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-8 border-b border-[#f1f5f9]">
        {["all", "unread", "read"].map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`pb-4 text-[13px] font-black uppercase tracking-widest transition-all relative ${
              filter === t
                ? "text-[#2563eb]"
                : "text-[#94a3b8] hover:text-[#64748b]"
            }`}
          >
            {t}{" "}
            <span className="ml-1 text-[11px] opacity-60">
              {t === "all" ? 8 : t === "unread" ? 3 : 5}
            </span>
            {filter === t && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563eb]" />
            )}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-[24px] border border-[#f1f5f9] shadow-sm divide-y divide-[#f1f5f9]">
        {filteredNotifs.map((notif) => (
          <div
            key={notif.id}
            className="p-6 flex items-center justify-between group hover:bg-[#f8fafc]/50 transition-colors"
          >
            <div className="flex gap-5 items-center">
              <div className={`p-3 rounded-[12px] ${notif.bg} ${notif.color}`}>
                <notif.icon size={20} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h4 className="text-[14px] font-black text-[#1e293b]">
                    {notif.type}
                  </h4>
                  {notif.status === "unread" && (
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]" />
                  )}
                </div>
                <p className="text-[13px] text-[#64748b] font-medium">
                  {notif.content}
                </p>
                <div className="flex gap-4 pt-1">
                  <button className="text-[11px] font-black text-[#2563eb] hover:underline flex items-center gap-1">
                    View details
                  </button>
                  <button className="text-[11px] font-black text-[#94a3b8] hover:text-[#475569] flex items-center gap-1">
                    <Check size={14} /> Mark as read
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#94a3b8]">
                <Clock size={14} />
                {notif.time}
              </div>
              <button className="p-2 text-[#94a3b8] hover:text-[#ef4444] hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, count, icon, color }) {
  const colors = {
    blue: "border-blue-100 bg-white text-blue-600",
    orange: "border-orange-100 bg-white text-orange-600",
    green: "border-green-100 bg-white text-green-600",
  };
  return (
    <div
      className={`p-6 rounded-[24px] border shadow-sm flex items-center gap-5 ${colors[color]}`}
    >
      <div className={`p-4 rounded-2xl bg-opacity-10 bg-current`}>{icon}</div>
      <div>
        <p className="text-[24px] font-black text-[#1e293b]">{count}</p>
        <p className="text-[13px] font-bold text-[#94a3b8]">{label}</p>
      </div>
    </div>
  );
}
