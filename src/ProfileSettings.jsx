import React, { useState, useRef } from "react";
import { Upload, Trash2, Save, Camera } from "lucide-react";

export default function ProfileSettings() {
  // --- 1. State Management ---
  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Morgan",
    email: "alex@nexus.com",
    phone: "+1 (555) 123-4567",
    jobTitle: "Administrator",
    department: "Operations",
    bio: "Senior Administrator with over 5 years of experience in digital art marketplace management. Passionate about connecting artists with collectors.",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
  );
  const fileInputRef = useRef(null);

  // --- 2. Handlers ---
  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveInfo = () => {
    console.log("Saving Personal Info:", formData);
    alert("Personal information updated successfully!");
  };

  const handleUpdatePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match!");
      return;
    }
    console.log("Updating Password...");
    alert("Password updated successfully!");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto min-h-screen font-sans text-[#1e293b]">
      {/* Page Header */}
      <div>
        <h1 className="text-[28px] font-black tracking-tight text-[#1e293b]">
          Profile Settings
        </h1>
        <p className="text-[#64748b] text-sm font-medium mt-1">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>

      {/* Profile Photo Section */}
      <div className="bg-white rounded-[24px] border border-[#f1f5f9] shadow-sm overflow-hidden">
        <div className="px-8 py-5 border-b border-[#f1f5f9]">
          <h3 className="text-[15px] font-black text-[#1e293b]">
            Profile Photo
          </h3>
          <p className="text-[12px] text-[#94a3b8] font-bold">
            Update your profile photo and personal details.
          </p>
        </div>
        <div className="p-8 flex items-center gap-8">
          <div className="relative">
            <img
              src={profileImage}
              className="w-24 h-24 rounded-full object-cover border-4 border-[#f8fafc] shadow-sm"
              alt="Profile"
            />
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full border border-[#e2e8f0] shadow-sm text-[#64748b] hover:text-[#2563eb]"
            >
              <Camera size={14} />
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3">
              <button
                onClick={() => fileInputRef.current.click()}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] text-[#475569] rounded-[10px] text-[12px] font-black hover:bg-[#f8fafc] transition-all"
              >
                <Upload size={16} className="text-[#94a3b8]" /> Upload New Photo
              </button>
              <button
                onClick={() => setProfileImage("")}
                className="flex items-center gap-2 px-4 py-2 text-[#ef4444] rounded-[10px] text-[12px] font-black hover:bg-[#fef2f2] transition-all"
              >
                <Trash2 size={16} /> Remove
              </button>
            </div>
            <p className="text-[11px] text-[#94a3b8] font-bold">
              Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
              side.
            </p>
          </div>
        </div>
      </div>

      {/* Personal Information Grid */}
      <div className="bg-white rounded-[24px] border border-[#f1f5f9] shadow-sm overflow-hidden">
        <div className="px-8 py-5 border-b border-[#f1f5f9]">
          <h3 className="text-[15px] font-black text-[#1e293b]">
            Personal Information
          </h3>
          <p className="text-[12px] text-[#94a3b8] font-bold">
            Update your personal details and contact information.
          </p>
        </div>
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange(e, "firstName")}
            />
            <InputField
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange(e, "lastName")}
            />
            <InputField
              label="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            <InputField
              label="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange(e, "phone")}
            />
            <InputField
              label="Job Title"
              value={formData.jobTitle}
              onChange={(e) => handleInputChange(e, "jobTitle")}
            />
            <InputField
              label="Department"
              value={formData.department}
              onChange={(e) => handleInputChange(e, "department")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-black text-[#94a3b8] uppercase tracking-wider">
              Bio
            </label>
            <textarea
              className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] text-[13px] font-bold text-[#475569] min-h-[100px] outline-none focus:border-[#2563eb]"
              value={formData.bio}
              onChange={(e) => handleInputChange(e, "bio")}
            />
            <p className="text-[11px] text-[#94a3b8] font-medium">
              Brief description for your profile.
            </p>
          </div>
        </div>
        <div className="px-8 py-5 bg-[#f8fafc]/50 border-t border-[#f1f5f9] flex justify-end">
          <button
            onClick={handleSaveInfo}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#c4ab89] text-white rounded-[10px] text-[12px] font-black uppercase tracking-widest shadow-md hover:bg-[#b39673] transition-all"
          >
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="bg-white rounded-[24px] border border-[#f1f5f9] shadow-sm overflow-hidden">
        <div className="px-8 py-5 border-b border-[#f1f5f9]">
          <h3 className="text-[15px] font-black text-[#1e293b]">
            Change Password
          </h3>
          <p className="text-[12px] text-[#94a3b8] font-bold">
            Ensure your account is using a long, random password to stay secure.
          </p>
        </div>
        <div className="p-8 space-y-6">
          <div className="max-w-md space-y-4">
            <PasswordField
              label="Current Password"
              placeholder="Enter current password"
              value={passwords.current}
              onChange={(e) =>
                setPasswords({ ...passwords, current: e.target.value })
              }
            />
            <PasswordField
              label="New Password"
              placeholder="Enter new password"
              value={passwords.new}
              onChange={(e) =>
                setPasswords({ ...passwords, new: e.target.value })
              }
              note="Minimum 8 characters with numbers and symbols."
            />
            <PasswordField
              label="Confirm New Password"
              placeholder="Confirm new password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
            />
          </div>
        </div>
        <div className="px-8 py-5 bg-[#f8fafc]/50 border-t border-[#f1f5f9] flex justify-end">
          <button
            onClick={handleUpdatePassword}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#c4ab89] text-white rounded-[10px] text-[12px] font-black uppercase tracking-widest shadow-md hover:bg-[#b39673] transition-all"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---
function InputField({ label, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-black text-[#94a3b8] uppercase tracking-wider">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] text-[13px] font-bold text-[#475569] outline-none focus:border-[#2563eb] transition-all"
      />
    </div>
  );
}

function PasswordField({ label, placeholder, note, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-black text-[#94a3b8] uppercase tracking-wider">
        {label}
      </label>
      <input
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] text-[13px] font-bold text-[#475569] outline-none focus:border-[#2563eb] transition-all"
      />
      {note && <p className="text-[10px] text-[#94a3b8] font-medium">{note}</p>}
    </div>
  );
}
