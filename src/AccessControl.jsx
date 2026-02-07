import React, { useState } from "react";
import { ShieldCheck, Info } from "lucide-react";

// --- Mock Permission Data ---
const INITIAL_PERMISSIONS = [
  {
    id: 1,
    feature: "View Home / About",
    visitor: true,
    member: true,
    admin: true,
  },
  { id: 2, feature: "View Shop Art", visitor: true, member: true, admin: true },
  {
    id: 3,
    feature: "Purchase / Bid",
    visitor: false,
    member: true,
    admin: true,
  },
  {
    id: 4,
    feature: "View Artist Profiles",
    visitor: false,
    member: true,
    admin: true,
  },
  {
    id: 5,
    feature: "CONNECT Forum",
    visitor: false,
    member: true,
    admin: true,
  },
  {
    id: 6,
    feature: "Send Fan Mail",
    visitor: false,
    member: true,
    admin: true,
  },
  {
    id: 7,
    feature: "Delete Posts / Ban Users",
    visitor: false,
    member: false,
    admin: true,
  },
  {
    id: 8,
    feature: "Post Anonymous Art",
    visitor: false,
    member: false,
    admin: true,
  },
];

export default function AccessControl() {
  const [permissions, setPermissions] = useState(INITIAL_PERMISSIONS);

  const togglePermission = (id, role) => {
    setPermissions((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [role]: !p[role] } : p)),
    );
  };

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto min-h-screen font-sans text-[#1e293b]">
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-black tracking-tight text-[#1e293b]">
          Access Control
        </h1>
        <p className="text-[#64748b] text-sm font-medium mt-1">
          Configure role-based permissions for the entire platform.
        </p>
      </div>

      {/* Security Note Banner */}
      <div className="bg-[#eff6ff] border border-[#dbeafe] rounded-[16px] p-5 flex gap-4 items-start">
        <div className="mt-1 bg-white p-1.5 rounded-lg shadow-sm">
          <ShieldCheck className="text-[#2563eb]" size={20} />
        </div>
        <div>
          <h4 className="text-[14px] font-black text-[#1e293b]">
            Security Note
          </h4>
          <p className="text-[13px] text-[#2563eb] font-semibold mt-0.5">
            Changes to access controls take effect immediately. Ensure you do
            not lock yourself out of admin features.
          </p>
        </div>
      </div>

      {/* Permissions Matrix */}
      <div className="bg-white rounded-[24px] border border-[#f1f5f9] shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#f1f5f9]">
              <th className="px-8 py-6 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em] w-1/3">
                Feature
              </th>
              <th className="px-8 py-6 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em] text-center">
                Visitor (Public)
              </th>
              <th className="px-8 py-6 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em] text-center">
                Member (Logged-in)
              </th>
              <th className="px-8 py-6 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em] text-center">
                Admin
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f5f9]">
            {permissions.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#f8fafc]/30 transition-colors"
              >
                <td className="px-8 py-6">
                  <span className="text-[14px] font-bold text-[#475569]">
                    {item.feature}
                  </span>
                </td>

                {/* Role Toggles */}
                {["visitor", "member", "admin"].map((role) => (
                  <td key={role} className="px-8 py-6">
                    <div className="flex justify-center">
                      <button
                        onClick={() => togglePermission(item.id, role)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                          item[role] ? "bg-[#2563eb]" : "bg-[#e2e8f0]"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            item[role] ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
