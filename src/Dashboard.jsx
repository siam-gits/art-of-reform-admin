import React, { useState } from "react";
import ArtistManagement from "./ArtistManagement";
import ArtworkManagement from "./ArtworkManagement";
import AuctionControl from "./AuctionControl";
import FanMailCenter from "./FanMailCenter";
import MemberDirectory from "./MemberDirectory";
import CONNECTForumModeration from "./CONNECTForumModeration";
import AccessControl from "./AccessControl";
import SystemSettings from "./SystemSettings";
import ProfileSettings from "./ProfileSettings";
import NotificationsPopover from "./NotificationsPopover";
import NotificationsPage from "./NotificationsPage";
import logo from "./assets/logo.png";
import image from "./assets/image.jpg";

import {
  LayoutDashboard,
  Users,
  Image,
  Gavel,
  Mail,
  UserCircle,
  Download,
  TrendingUp,
  TrendingDown,
  Bell,
  Search,
  ChevronRight,
  MessageSquare,
  ShieldCheck,
  Settings,
  Award,
  MousePointer2,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

// --- Main App Component (Handles Navigation) ---
const App = () => {
  const [currentPage, setCurrentPage] = useState("Overview");
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans text-slate-700">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col p-6 fixed h-full z-10">
        <div className="flex items-center gap-3 mb-10 px-2">
          {/* Logo Image Wrapper */}
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="Artbehindbar Logo"
              className="w-60 h-35 object-contain"
            />
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto">
          <SectionTitle label="Dashboard" />
          <NavItem
            icon={<LayoutDashboard size={18} />}
            label="Overview"
            active={currentPage === "Overview"}
            onClick={() => setCurrentPage("Overview")}
          />

          <SectionTitle label="Content & Artists" />
          <NavItem
            icon={<Users size={18} />}
            label="Artists"
            active={currentPage === "Artists"}
            onClick={() => setCurrentPage("Artists")}
          />
          <NavItem
            icon={<Image size={18} />}
            label="Artwork"
            active={currentPage === "Artwork"} // ← add this
            onClick={() => setCurrentPage("Artwork")}
          />
          <NavItem
            icon={<Gavel size={18} />}
            label="Auctions"
            active={currentPage === "Auctions"} // ← add this
            onClick={() => setCurrentPage("Auctions")}
          />

          <SectionTitle label="Community" />
          <NavItem
            icon={<Mail size={18} />}
            label="Fan Mail"
            active={currentPage === "Fan Mail"} // ← add this
            onClick={() => setCurrentPage("Fan Mail")}
          />
          <NavItem
            icon={<UserCircle size={18} />}
            label="Members"
            active={currentPage === "Members"} // ← add this
            onClick={() => setCurrentPage("Members")}
          />
          <NavItem
            icon={<MessageSquare size={18} />}
            label="CONNECT Forum"
            active={currentPage === "CONNECT Forum"} // ← add this
            onClick={() => setCurrentPage("CONNECT Forum")}
          />

          <SectionTitle label="System" />
          <NavItem
            icon={<ShieldCheck size={18} />}
            label="Access Control"
            active={currentPage === "Access Control"} // ← add this
            onClick={() => setCurrentPage("Access Control")}
          />
          <NavItem
            icon={<Settings size={18} />}
            label="Settings"
            active={currentPage === "Settings"} // ← add this
            onClick={() => setCurrentPage("Settings")}
          />
        </nav>

        {/* Profile Trigger Section in Sidebar */}
        <div className="pt-6 border-t border-slate-100 mt-auto">
          <button
            onClick={() => setCurrentPage("Settings-Profile")} // Replace with your navigation logic
            className="w-full flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden flex-shrink-0 border border-slate-200">
              <img
                src={image}
                alt="Alex"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-slate-800 truncate">
                Alex Morgan
              </p>
              <p className="text-[11px] text-slate-500 truncate font-medium">
                alex@nexus.com
              </p>
            </div>
            <ChevronRight
              size={14}
              className="ml-auto text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all"
            />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        {/* Header (Shared) */}
        <header className="flex justify-between items-center mb-10">
          <div className="relative w-96">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search artists, artwork, members..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/10 transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-6">
            {/* Notification Bell Trigger */}
            <div
              className="relative cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsNotifOpen(!isNotifOpen)}
            >
              <Bell size={22} className="text-slate-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white text-[10px] text-white flex items-center justify-center font-bold">
                3
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-800">Alex Morgan</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                Administrator
              </p>
            </div>
            {/* Notification Popover */}
            {isNotifOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsNotifOpen(false)}
                />
                <NotificationsPopover
                  onClose={() => setIsNotifOpen(false)}
                  onViewAll={() => {
                    setCurrentPage("Notifications");
                    setIsNotifOpen(false);
                  }}
                />
              </>
            )}
          </div>
        </header>
        {/* Dynamic Page Rendering */}
        {currentPage === "Overview" && <DashboardOverview />}
        {currentPage === "Artists" && <ArtistManagement />}
        {currentPage === "Artwork" && <ArtworkManagement />}
        {currentPage === "Auctions" && <AuctionControl />}
        {currentPage === "Fan Mail" && <FanMailCenter />}
        {currentPage === "Members" && <MemberDirectory />}
        {currentPage === "CONNECT Forum" && <CONNECTForumModeration />}
        {currentPage === "Access Control" && <AccessControl />}
        {currentPage === "Settings" && <SystemSettings />}
        {currentPage === "Settings-Profile" && <ProfileSettings />}
        {currentPage === "Notifications" && <NotificationsPage />}
      </main>
    </div>
  );
};

// --- Page 1: Dashboard Overview ---
const DashboardOverview = () => (
  <>
    <section className="mb-8 flex justify-between items-end">
      <div>
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">
          Dashboard Overview
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Comprehensive analytics for your prison art marketplace
        </p>
      </div>
      <div className="flex gap-3">
        <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span> Jan 6,
          2026
        </button>
        <button className="bg-[#E2D6C5] text-[#846342] px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:brightness-95 transition-all shadow-sm">
          <Download size={18} /> Download Report
        </button>
      </div>
    </section>

    <div className="grid grid-cols-4 gap-6 mb-8">
      <StatCard
        icon={<Users className="text-white" size={20} />}
        iconBg="bg-blue-500"
        label="Total Artists"
        value="5"
        trend="+12.5%"
        isUp
      />
      <StatCard
        icon={<Image className="text-white" size={20} />}
        iconBg="bg-purple-500"
        label="Total Artworks"
        value="5"
        trend="+8.2%"
        isUp
      />
      <StatCard
        icon={<Gavel className="text-white" size={20} />}
        iconBg="bg-orange-500"
        label="Active Auctions"
        value="1"
        trend="-2.4%"
        isUp={false}
      />
      <StatCard
        icon={<span className="font-bold text-white">$</span>}
        iconBg="bg-green-500"
        label="Total Revenue"
        value="$300"
        trend="+15.3%"
        isUp
      />
    </div>

    {/* Dashboard Charts Section */}
    <div className="grid grid-cols-3 gap-6 mb-8">
      {/* Revenue Trends Chart */}
      <div className="col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h3 className="font-black text-slate-800 text-lg">
              Revenue Trends
            </h3>
            <p className="text-sm text-slate-400">Monthly sales performance</p>
          </div>
          <div className="bg-green-50 text-green-600 text-xs font-black px-3 py-1 rounded-lg flex items-center gap-1">
            <TrendingUp size={14} /> +20.5%
          </div>
        </div>

        <div className="h-64 flex items-end justify-between gap-4 px-2">
          {[
            { m: "Jan", h: "50%", val: "$2,400", s: "8 sales" },
            { m: "Feb", h: "65%", val: "$3,200", s: "11 sales" },
            { m: "Mar", h: "55%", val: "$2,800", s: "9 sales" },
            { m: "Apr", h: "85%", val: "$4,100", s: "14 sales" },
            { m: "May", h: "75%", val: "$3,600", s: "12 sales" },
            { m: "Jun", h: "95%", val: "$4,800", s: "16 sales", active: true },
          ].map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center h-full">
              <div className="w-full max-w-[48px] h-full flex items-end relative">
                {/* Bar + tooltip wrapper */}
                <div
                  className={`relative w-full rounded-lg transition-all duration-500 shadow-sm ${
                    item.active
                      ? "bg-gradient-to-t from-blue-600 to-blue-400"
                      : "bg-gradient-to-t from-blue-500 to-blue-300 opacity-90"
                  }`}
                  style={{ height: item.h }}
                >
                  {/* Tooltip attached to BAR TOP */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white p-2 rounded-lg shadow-xl z-10 text-center whitespace-nowrap">
                    <div className="text-xs font-bold leading-none">
                      {item.val}
                    </div>
                    <div className="text-[10px] text-slate-400 leading-none">
                      {item.s}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                  </div>
                </div>
              </div>

              <span className="text-[12px] font-bold text-slate-400 mt-4">
                {item.m}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-3 mt-10 pt-6 border-t border-slate-50">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Total Revenue
            </p>
            <p className="text-xl font-black text-slate-800">$20,900</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Avg per Month
            </p>
            <p className="text-xl font-black text-slate-800">$3,483</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Total Sales
            </p>
            <p className="text-xl font-black text-slate-800">70</p>
          </div>
        </div>
      </div>

      {/* Artwork by Category */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <h3 className="font-black text-slate-800 text-lg mb-1">
          Artwork by Category
        </h3>
        <p className="text-sm text-slate-400 mb-8">
          Distribution across art types
        </p>

        <div className="flex justify-center mb-10">
          <div
            className="w-44 h-44 rounded-full shadow-inner"
            style={{
              background: `
        conic-gradient(
          #3B82F6 0% 66%,
          #22C55E 66% 100%
        )
      `,
            }}
          ></div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm font-bold text-slate-600 flex-1">
              Religious
            </span>
            <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-2/3"></div>
            </div>
            <span className="text-sm font-black text-slate-800">2</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm font-bold text-slate-600 flex-1">
              Non-religious
            </span>
            <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-1/3"></div>
            </div>
            <span className="text-sm font-black text-slate-800">1</span>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-slate-800">Top Artists</h3>
          <Award className="text-orange-400" size={20} />
        </div>
        <p className="text-xs text-slate-400 mb-6">
          Most productive contributors
        </p>
        <div className="space-y-6">
          <ArtistRow
            rank={1}
            name="David Wilson"
            id="D-23456"
            count={12}
            progress={100}
            color="bg-orange-400"
          />
          <ArtistRow
            rank={2}
            name="Sarah Jones"
            id="C-45678"
            count={8}
            progress={70}
            color="bg-slate-400"
          />
          <ArtistRow
            rank={3}
            name="John Doe"
            id="A-12345"
            count={5}
            progress={45}
            color="bg-orange-300"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-slate-800">Auction Performance</h3>
          <MousePointer2 className="text-orange-400" size={20} />
        </div>
        <p className="text-xs text-slate-400 mb-6">Live bidding activity</p>
        <div className="grid grid-cols-3 gap-3 mb-8 text-center text-[10px] font-bold uppercase">
          <div className="bg-green-50 p-2 rounded-xl text-green-600">
            1<br />
            <span className="text-slate-400">Active</span>
          </div>
          <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
            1<br />
            <span className="text-slate-400">Ended</span>
          </div>
          <div className="bg-orange-50 p-2 rounded-xl text-orange-600">
            1<br />
            <span className="text-slate-400">Sched.</span>
          </div>
        </div>
        <div className="space-y-4">
          <AuctionActivityItem
            name="Desert Solitude"
            user="ArtCollector99"
            price="$150"
            status="Active"
            sColor="bg-green-100 text-green-700"
          />
          <AuctionActivityItem
            name="Silent Night"
            user="GalleryOwner"
            price="$320"
            status="Ended"
            sColor="bg-blue-100 text-blue-700"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-slate-800">Member Engagement</h3>
          <Users className="text-green-400" size={20} />
        </div>
        <p className="text-xs text-slate-400 mb-6">Community activity trends</p>
        <div className="h-24 mb-6">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
          >
            <path
              d="M0 35 L0 30 Q 20 25, 40 30 T 80 15 T 100 20 L 100 40 L 0 40 Z"
              fill="rgba(59, 130, 246, 0.8)"
            />
            <path
              d="M0 30 Q 20 25, 40 30 T 80 15 T 100 20"
              fill="none"
              stroke="#2563EB"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-xs text-slate-400 font-bold">Activity Score</p>
          <p className="text-xl font-bold">58</p>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
          <div className="w-[58%] h-full bg-green-500"></div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-50">
        <h3 className="font-bold text-slate-800">Recent Activity</h3>
      </div>
      <div className="divide-y divide-slate-50">
        <ActivityItem
          icon={<Gavel size={16} />}
          color="bg-orange-100 text-orange-500"
          title='New bid on "Desert Solitude"'
          time="2 mins ago"
        />
        <ActivityItem
          icon={<Image size={16} />}
          color="bg-purple-100 text-purple-500"
          title="New artwork by John Doe"
          time="15 mins ago"
        />
      </div>
    </div>
  </>
);

// --- Reusable Sub-components ---
const SectionTitle = ({ label }) => (
  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6 mb-3 px-3">
    {label}
  </p>
);

const NavItem = ({ icon, label, active = false, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all ${active ? "bg-blue-50 text-blue-700 font-bold shadow-sm" : "text-slate-500 hover:bg-slate-50"}`}
  >
    {icon} <span className="text-[13px]">{label}</span>
  </div>
);

const ArtistRow = ({ rank, name, id, count, progress, color }) => (
  <div className="flex items-center gap-4">
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${rank === 1 ? "bg-orange-100 text-orange-600" : "bg-slate-100 text-slate-500"}`}
    >
      {rank}
    </div>
    <div className="flex-1">
      <div className="flex justify-between mb-1">
        <div>
          <p className="text-xs font-bold text-slate-800">{name}</p>
          <p className="text-[9px] text-slate-400 font-bold">{id}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold">{count}</p>
          <p className="text-[9px] text-slate-400 uppercase font-bold">
            artworks
          </p>
        </div>
      </div>
      <div className="w-full h-1.5 bg-slate-100 rounded-full">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  </div>
);

const StatCard = ({ icon, iconBg, label, value, trend, isUp }) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2.5 ${iconBg} rounded-xl shadow-lg shadow-indigo-100`}>
        {icon}
      </div>
      <div
        className={`flex items-center text-[10px] font-black px-2 py-1 rounded-full ${isUp ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}
      >
        {isUp ? (
          <TrendingUp size={12} className="mr-1" />
        ) : (
          <TrendingDown size={12} className="mr-1" />
        )}{" "}
        {trend}
      </div>
    </div>
    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
      {label}
    </p>
    <p className="text-2xl font-black text-slate-800 mt-1">{value}</p>
  </div>
);

const CategoryProgress = ({ label, count, color, total }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <span className="text-[13px] font-bold text-slate-600">{label}</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${color}`}
          style={{ width: `${(count / total) * 100}%` }}
        ></div>
      </div>
      <span className="text-xs font-black text-slate-800">{count}</span>
    </div>
  </div>
);

const AuctionActivityItem = ({ name, user, price, status, sColor }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-slate-100 rounded-lg"></div>
    <div className="flex-1 overflow-hidden">
      <div className="flex justify-between">
        <p className="text-xs font-bold text-slate-800 truncate">{name}</p>
        <p className="text-xs font-bold">{price}</p>
      </div>
      <div className="flex justify-between mt-1">
        <p className="text-[10px] text-slate-400 font-bold">{user}</p>
        <span className={`text-[9px] px-2 py-0.5 rounded font-bold ${sColor}`}>
          {status}
        </span>
      </div>
    </div>
  </div>
);

const ActivityItem = ({ icon, color, title, time }) => (
  <div className="flex items-center gap-4 p-4 hover:bg-slate-50 cursor-pointer group">
    <div className={`p-2.5 rounded-xl ${color}`}>{icon}</div>
    <div className="flex-1">
      <p className="text-sm font-bold text-slate-700">{title}</p>
      <p className="text-xs text-slate-400 mt-0.5">{time}</p>
    </div>
    <ChevronRight
      size={16}
      className="text-slate-300 group-hover:text-slate-500"
    />
  </div>
);

export default App;
