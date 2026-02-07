import React, { useState } from "react";
import { Save } from "lucide-react";

export default function SystemSettings() {
  const [siteName, setSiteName] = useState("The Art of Reform");
  const [supportEmail, setSupportEmail] = useState("support@reformart.com");

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto min-h-screen font-sans text-[#1e293b]">
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-black tracking-tight text-[#1e293b]">
          System Settings
        </h1>
        <p className="text-[#64748b] text-sm font-medium mt-1">
          Manage general site configuration and admin preferences.
        </p>
      </div>

      {/* General Configuration Section */}
      <div className="bg-white rounded-[24px] border border-[#f1f5f9] shadow-sm p-8 space-y-8">
        <h3 className="text-[16px] font-black text-[#1e293b]">
          General Configuration
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[12px] font-black text-[#94a3b8] uppercase tracking-wider">
              Site Name
            </label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] text-sm font-bold text-[#475569] outline-none focus:border-[#2563eb] transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[12px] font-black text-[#94a3b8] uppercase tracking-wider">
              Support Email
            </label>
            <input
              type="email"
              value={supportEmail}
              onChange={(e) => setSupportEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] text-sm font-bold text-[#475569] outline-none focus:border-[#2563eb] transition-all"
            />
          </div>
        </div>

        {/* Toggle List */}
        <div className="space-y-1">
          <SettingToggle
            label="Maintenance Mode"
            description="Disable public access to the site"
            initialValue={false}
          />
          <SettingToggle
            label="New User Registration"
            description="Allow new members to sign up"
            initialValue={true}
          />
          <SettingToggle
            label="Auto-Approve Artwork"
            description="Automatically publish uploaded artwork"
            initialValue={false}
          />
        </div>

        <button className="flex items-center gap-2 px-6 py-3.5 bg-[#c4ab89] text-white rounded-[12px] font-black text-[12px] uppercase tracking-widest hover:bg-[#b39673] transition-all shadow-md">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* Email Notifications Section */}
      <div className="bg-white rounded-[24px] border border-[#f1f5f9] shadow-sm p-8 space-y-6">
        <h3 className="text-[16px] font-black text-[#1e293b]">
          Email Notifications
        </h3>

        <div className="space-y-1">
          <SettingToggle
            label="New Artwork Notifications"
            description="Email when new artwork is uploaded"
            initialValue={true}
          />
          <SettingToggle
            label="Auction Activity"
            description="Email for new bids and auction endings"
            initialValue={true}
          />
          <SettingToggle
            label="Moderation Alerts"
            description="Email for reported content"
            initialValue={false}
          />
        </div>

        <button className="flex items-center gap-2 px-6 py-3.5 bg-[#c4ab89] text-white rounded-[12px] font-black text-[12px] uppercase tracking-widest hover:bg-[#b39673] transition-all shadow-md">
          <Save size={18} />
          Save Email Preferences
        </button>
      </div>
    </div>
  );
}

function SettingToggle({ label, description, initialValue }) {
  const [enabled, setEnabled] = useState(initialValue);

  return (
    <div className="flex items-center justify-between py-4 border-b border-[#f1f5f9] last:border-0">
      <div>
        <p className="text-[14px] font-black text-[#1e293b]">{label}</p>
        <p className="text-[12px] font-bold text-[#94a3b8]">{description}</p>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
          enabled ? "bg-[#2563eb]" : "bg-[#e2e8f0]"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
