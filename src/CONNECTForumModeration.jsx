import React, { useState } from "react";
import { Trash2, ShieldAlert, AlertTriangle } from "lucide-react";

// --- Mock Data ---
const FORUM_POSTS = [
  {
    id: 1,
    title: "How to support incarcerated artists?",
    author: "Alice Walker",
    date: "2023-10-24",
    content: "I am looking for more ways to help...",
    reports: 0,
    isFlagged: false,
  },
  {
    id: 2,
    title: "Inappropriate Content",
    author: "Trouble Maker",
    date: "2023-10-23",
    content: "This is a spam post...",
    reports: 5,
    isFlagged: true,
  },
  {
    id: 3,
    title: "Art supplies donation",
    author: "Bob Miller",
    date: "2023-10-22",
    content: "Does anyone know where to donate supplies?",
    reports: 0,
    isFlagged: false,
  },
];

export default function CONNECTForumModeration() {
  const [posts] = useState(FORUM_POSTS);

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto min-h-screen font-sans text-[#1e293b]">
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-black tracking-tight text-[#1e293b]">
          CONNECT Forum Moderation
        </h1>
        <p className="text-[#64748b] text-sm font-medium mt-1">
          Review community discussions and handle reported content.
        </p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`bg-white rounded-[16px] border p-6 transition-all ${
              post.isFlagged
                ? "border-[#fef3c7] ring-1 ring-[#fef3c7] shadow-sm bg-[#fffdf5]"
                : "border-[#f1f5f9]"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-[16px] font-black text-[#1e293b]">
                    {post.title}
                  </h3>
                  {post.isFlagged && (
                    <span className="bg-[#fff7ed] text-[#ea580c] text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1 border border-[#fed7aa]">
                      <AlertTriangle size={12} />
                      {post.reports} Reports
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-[12px] font-bold text-[#94a3b8]">
                  <span>{post.author}</span>
                  <span className="text-[#cbd5e1]">•</span>
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Moderation Actions */}
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] text-[#64748b] rounded-[10px] text-[12px] font-bold hover:bg-[#f8fafc] transition-colors shadow-sm">
                  <Trash2 size={16} className="text-[#94a3b8]" />
                  Delete
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#ef4444] text-white rounded-[10px] text-[12px] font-black uppercase tracking-wider hover:bg-[#dc2626] transition-all shadow-md shadow-red-100">
                  <ShieldAlert size={16} />
                  Ban & Delete
                </button>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[14px] text-[#64748b] font-medium leading-relaxed">
                {post.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
