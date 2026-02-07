import React, { useState } from "react";
import { UserPlus, UserX, Search } from "lucide-react";

// --- Mock Data ---
const MEMBERS = [
  {
    id: 1,
    name: "Alice Walker",
    email: "alice@example.com",
    joined: "2023-01-15",
    score: 95,
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Miller",
    email: "bob@example.com",
    joined: "2023-03-22",
    score: 82,
    status: "Active",
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie@example.com",
    joined: "2023-05-10",
    score: 45,
    status: "Suspended",
  },
  {
    id: 4,
    name: "Trouble Maker",
    email: "bad@example.com",
    joined: "2023-09-01",
    score: 10,
    status: "Banned",
  },
];

export default function MemberDirectory() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = MEMBERS.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto min-h-screen font-sans text-[#1e293b]">
      {/* Header Section */}
      <div>
        <h1 className="text-[28px] font-black tracking-tight text-[#1e293b]">
          Member Directory
        </h1>
        <p className="text-[#64748b] text-sm font-medium mt-1">
          Manage user accounts and moderation.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#cbd5e1]"
          size={18}
        />
        <input
          type="text"
          placeholder="Search members..."
          className="w-full pl-12 pr-4 py-3 bg-white border border-[#f1f5f9] rounded-[12px] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2563eb]/10 transition-all"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-[24px] border border-[#f1f5f9] shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc]/50">
              <th className="px-8 py-5 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em]">
                Member
              </th>
              <th className="px-8 py-5 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em]">
                Joined
              </th>
              <th className="px-8 py-5 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em]">
                Activity Score
              </th>
              <th className="px-8 py-5 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em]">
                Status
              </th>
              <th className="px-8 py-5 text-right text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f5f9]">
            {filteredMembers.map((member) => (
              <tr
                key={member.id}
                className="group hover:bg-[#f8fafc]/50 transition-colors"
              >
                {/* Member Identity */}
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#94a3b8] font-black text-xs">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#1e293b] text-sm">
                        {member.name}
                      </p>
                      <p className="text-[#94a3b8] text-[12px] font-medium">
                        {member.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-8 py-5 text-sm font-semibold text-[#64748b]">
                  {member.joined}
                </td>

                <td className="px-8 py-5">
                  <div className="flex items-center gap-3 w-48">
                    <div className="flex-1 h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2563eb] rounded-full"
                        style={{ width: `${member.score}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#94a3b8] w-6">
                      {member.score}
                    </span>
                  </div>
                </td>

                <td className="px-8 py-5">
                  <span
                    className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tight ${
                      member.status === "Active"
                        ? "bg-[#f0fdf4] text-[#16a34a]"
                        : member.status === "Suspended"
                          ? "bg-[#fff7ed] text-[#ea580c]"
                          : "bg-[#fef2f2] text-[#ef4444]"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>

                {/* Conditional Actions */}
                <td className="px-8 py-5 text-right">
                  {member.status !== "Banned" ? (
                    <div className="flex justify-end gap-2 animate-in fade-in duration-200">
                      <button className="p-2 text-[#ea580c] hover:bg-[#fff7ed] rounded-lg transition-colors">
                        <UserPlus size={18} />
                      </button>
                      <button className="p-2 text-[#ef4444] hover:bg-[#fef2f2] rounded-lg transition-colors">
                        <UserX size={18} />
                      </button>
                    </div>
                  ) : (
                    /* No buttons shown for Banned status [requested] */
                    <span></span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
