import React, { useState } from "react";
import { X, Clock } from "lucide-react";

// --- Mock Notification Data ---
const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: "New Bid Placed",
    content: "ArtCollector99 placed a bid of $150 on 'Desert Solitude'",
    time: "6h ago",
    unread: true,
  },
  {
    id: 2,
    type: "Artwork Uploaded",
    content: "John Doe uploaded a new artwork 'Freedom of Mind'",
    time: "7h ago",
    unread: true,
  },
  {
    id: 3,
    type: "New Fan Mail",
    content: "Alice Walker sent a message to Sarah Jones",
    time: "7h ago",
    unread: false,
  },
  {
    id: 4,
    type: "New Member Registration",
    content: "Bob Miller joined the platform",
    time: "8h ago",
    unread: false,
  },
  {
    id: 5,
    type: "Auction Ending Soon",
    content: "Auction for 'Silent Night' ends in 2 hours",
    time: "9h ago",
    unread: true,
  },
];

export default function NotificationsPopover({ onClose, onViewAll }) {
  const [notifications] = useState(INITIAL_NOTIFICATIONS);
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="absolute top-16 right-0 w-[380px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Notifications</h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            {unreadCount} unread
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-700 transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Notifications List */}
      <div className="max-h-[420px] overflow-y-auto divide-y divide-slate-100">
        {notifications.length === 0 ? (
          <div className="py-12 text-center text-slate-500">
            No notifications yet
          </div>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`px-6 py-4 hover:bg-slate-50 transition-colors cursor-pointer ${
                notif.unread ? "bg-blue-50/40" : ""
              }`}
              onClick={() => {
                // Optional: mark as read + close on click
                // You can add real logic here later
                onClose();
              }}
            >
              <div className="flex gap-3.5">
                <div className="mt-1.5 flex-shrink-0">
                  {notif.unread && (
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
                  )}
                </div>

                <div className="flex-1 space-y-1">
                  <p className="text-sm font-semibold text-slate-800">
                    {notif.type}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {notif.content}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <Clock size={13} />
                    <span>{notif.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="bg-slate-50 px-6 py-4 border-t border-slate-100">
        <button
          onClick={onViewAll}
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors text-sm shadow-sm flex items-center justify-center gap-2"
        >
          View all notifications
        </button>
      </div>
    </div>
  );
}
