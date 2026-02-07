import React, { useState } from "react";
import { Clock, User, X, Calendar, Gavel } from "lucide-react";

// --- Mock Data ---
const INITIAL_AUCTIONS = [
  {
    id: 1,
    artwork: "Desert Solitude",
    image: "https://images.unsplash.com/photo-1579783483458-83d02161294e?w=600",
    currentBid: 150,
    highestBidder: "ArtCollector99",
    status: "Active",
    isLive: true,
    timeLeft: "0d 23h 59m 32s",
    endsAt: "1/7/2026",
    history: [
      { bidder: "ArtCollector99", amount: 150, time: "2 mins ago" },
      { bidder: "Previous Bidder", amount: 100, time: "1 hour ago" },
    ],
  },
  {
    id: 2,
    artwork: "Silent Night",
    image: "https://images.unsplash.com/photo-1579783902614-a3a3927b9e3f?w=600",
    currentBid: 320,
    highestBidder: "GalleryOwner",
    status: "Ended",
    isLive: false,
    timeLeft: "Ended",
    endsAt: "1/1/2026",
    history: [{ bidder: "GalleryOwner", amount: 320, time: "Final" }],
  },
  {
    id: 3,
    artwork: "Future Dreams",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7eb9688?w=600",
    currentBid: 0,
    highestBidder: "-",
    status: "Not Started",
    isLive: false,
    timeLeft: "1d 23h 59m 32s",
    endsAt: "2/15/2026",
    history: [],
  },
];

export default function AuctionControl() {
  const [activeTab, setActiveTab] = useState("All Auctions");
  const [selectedAuction, setSelectedAuction] = useState(null);

  const filteredAuctions = INITIAL_AUCTIONS.filter((item) => {
    if (activeTab === "Live Now") return item.isLive;
    if (activeTab === "Scheduled") return item.status === "Not Started";
    if (activeTab === "Completed") return item.status === "Ended";
    return true;
  });

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto min-h-screen font-sans text-[#1e293b]">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[28px] font-black tracking-tight text-[#1e293b]">
            Auction Control
          </h1>
          <p className="text-[#64748b] text-sm font-medium mt-1">
            Monitor live auctions and manage bidding activity.
          </p>
        </div>
      </div>

      <div className="flex items-center border-b border-[#f1f5f9] gap-8">
        {["All Auctions", "Live Now", "Scheduled", "Completed"].map((tab) => (
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
              {tab === "Live Now" && (
                <span className="bg-[#eff6ff] text-[#2563eb] text-[10px] px-2 py-0.5 rounded-full font-black">
                  {INITIAL_AUCTIONS.filter((a) => a.isLive).length}
                </span>
              )}
            </div>
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563eb] rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[24px] border border-[#f1f5f9] shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc]/50">
              <th className="px-8 py-5 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em]">
                Artwork
              </th>
              <th className="px-8 py-5 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em]">
                Current Bid
              </th>
              <th className="px-8 py-5 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em]">
                Highest Bidder
              </th>
              <th className="px-8 py-5 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em]">
                Status
              </th>
              <th className="px-8 py-5 text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em]">
                Time Remaining
              </th>
              <th className="px-8 py-5 text-right text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.1em]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f5f9]">
            {filteredAuctions.map((auction) => (
              <tr
                key={auction.id}
                className="group hover:bg-[#f8fafc]/50 transition-colors"
              >
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={auction.image}
                      className="w-12 h-12 rounded-xl object-cover shadow-sm"
                      alt=""
                    />
                    <span className="font-bold text-[#1e293b]">
                      {auction.artwork}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-5 text-sm font-black text-[#1e293b]">
                  <span className="text-[#94a3b8] font-medium mr-1">$</span>
                  {auction.currentBid}
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#64748b]">
                    <User size={14} className="text-[#cbd5e1]" />
                    {auction.highestBidder}
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span
                    className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tight ${
                      auction.status === "Active"
                        ? "bg-[#f0fdf4] text-[#16a34a]"
                        : auction.status === "Ended"
                          ? "bg-[#f1f5f9] text-[#64748b]"
                          : "bg-[#fff7ed] text-[#ea580c]"
                    }`}
                  >
                    {auction.status}
                  </span>
                </td>
                <td className="px-8 py-5">
                  <div
                    className={`flex items-center gap-2 text-sm font-bold ${auction.status === "Active" ? "text-[#2563eb]" : "text-[#94a3b8]"}`}
                  >
                    <Clock size={16} /> {auction.timeLeft}
                  </div>
                </td>
                <td className="px-8 py-5 text-right">
                  <button
                    onClick={() => setSelectedAuction(auction)}
                    className="px-5 py-2 rounded-xl border border-[#e2e8f0] text-[11px] font-black text-[#64748b] hover:border-[#2563eb] hover:text-[#2563eb] transition-all bg-white shadow-sm"
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedAuction && (
        <AuctionDetailsModal
          auction={selectedAuction}
          onClose={() => setSelectedAuction(null)}
        />
      )}
    </div>
  );
}

function AuctionDetailsModal({ auction, onClose }) {
  const isNotStarted = auction.status === "Not Started";
  const isEnded = auction.status === "Ended";

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-[#0f172a]/40 backdrop-blur-[2px] p-4">
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-[620px] overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center px-8 py-6">
          <h2 className="text-[18px] font-black text-[#1e293b]">
            Auction Details
          </h2>
          <button
            onClick={onClose}
            className="text-[#94a3b8] hover:text-[#64748b] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-8 pb-10 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[240px] flex-shrink-0">
            <img
              src={auction.image}
              className="w-full aspect-square rounded-[16px] object-cover mb-4 shadow-md"
              alt=""
            />
            <h3 className="text-[20px] font-black text-[#1e293b] leading-tight mb-2">
              {auction.artwork}
            </h3>
            <div className="flex items-center gap-3">
              <span
                className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${
                  isNotStarted
                    ? "bg-[#fff7ed] text-[#ea580c]"
                    : isEnded
                      ? "bg-[#f1f5f9] text-[#64748b]"
                      : "bg-[#f0fdf4] text-[#16a34a]"
                }`}
              >
                {auction.status}
              </span>
              {!isNotStarted && (
                <span className="text-[#94a3b8] text-[12px] font-bold flex items-center gap-1.5">
                  <Clock size={14} className="text-[#94a3b8]" />
                  {isEnded
                    ? `Ended ${auction.endsAt}`
                    : `Ends ${auction.endsAt}`}
                </span>
              )}
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-[#f8fafc] rounded-[16px] p-5 mb-6 border border-[#f1f5f9]">
              <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-1">
                Current Highest Bid
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-[32px] font-black text-[#1e293b]">
                  ${isNotStarted ? "0" : auction.currentBid}
                </span>
                <span className="text-[12px] font-bold text-[#64748b]">
                  by {isNotStarted ? "-" : auction.highestBidder}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[12px] font-black text-[#1e293b] mb-4 uppercase tracking-tighter">
                Bid History
              </p>
              <div className="rounded-[12px] border border-[#f1f5f9] overflow-hidden">
                <table className="w-full text-left text-[12px]">
                  <thead className="bg-[#f8fafc] text-[#94a3b8] font-bold border-b border-[#f1f5f9]">
                    <tr>
                      <th className="px-4 py-2.5">Bidder</th>
                      <th className="px-4 py-2.5">Amount</th>
                      <th className="px-4 py-2.5">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {isNotStarted ? (
                      <tr className="text-[#94a3b8] font-medium">
                        <td className="px-4 py-3.5">-</td>
                        <td className="px-4 py-3.5 text-[#1e293b] font-black">
                          $0
                        </td>
                        <td className="px-4 py-3.5">Scheduled</td>
                      </tr>
                    ) : (
                      auction.history.map((bid, i) => (
                        <tr
                          key={i}
                          className={
                            i === 0
                              ? "text-[#475569] font-bold"
                              : "text-[#94a3b8] font-medium"
                          }
                        >
                          <td className="px-4 py-3.5">{bid.bidder}</td>
                          <td className="px-4 py-3.5 text-[#1e293b] font-black">
                            ${bid.amount}
                          </td>
                          <td className="px-4 py-3.5 text-[#94a3b8] font-medium whitespace-nowrap">
                            {bid.time}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Conditional Action Section */}
            <div className="space-y-3">
              {isNotStarted && (
                /* Scheduled State: Show Start Button */
                <button className="w-full py-4 bg-[#c4ab89] text-white rounded-[12px] font-black text-[12px] uppercase flex items-center justify-center gap-2 hover:bg-[#b39673] transition-all shadow-md active:scale-[0.98]">
                  <Gavel size={16} /> Start Auction Now
                </button>
              )}

              {auction.status === "Active" && (
                /* Active State: Show End Controls */
                <>
                  <div className="relative">
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#cbd5e1]"
                      size={18}
                    />
                    <input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#e2e8f0] rounded-[12px] text-[13px] font-bold text-[#64748b] outline-none"
                    />
                  </div>
                  <button className="w-full py-4 bg-[#e2e8f0] text-[#94a3b8] rounded-[12px] font-black text-[11px] uppercase">
                    End Auction Early
                  </button>
                </>
              )}

              {isEnded && (
                /* Ended State: No Buttons [requested] */
                <div className="py-4 text-center text-[#94a3b8] font-bold text-[12px] border border-dashed border-[#e2e8f0] rounded-[12px]">
                  Auction has concluded
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
