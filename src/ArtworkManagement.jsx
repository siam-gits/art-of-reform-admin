import React, { useState, useRef } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Grid,
  List,
  Upload,
  X,
  Check,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export default function ArtworkManagement() {
  const [viewMode, setViewMode] = useState("list");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [artworks, setArtworks] = useState([
    {
      id: 1,
      title: "Freedom Mind",
      artist: "John Doe",
      status: "Available",
      price: 250,
      category: "Painting",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3a3927b9e3f?w=800",
    },
    {
      id: 2,
      title: "Desert Solitude",
      artist: "Michael Smith",
      status: "Auction",
      price: 100,
      category: "Drawing",
      image:
        "https://images.unsplash.com/photo-1579783483458-83d02161294e?w=800",
    },
    {
      id: 3,
      title: "Abstract Thoughts",
      artist: "Anonymous",
      status: "Available",
      price: 500,
      category: "Abstract",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7eb9688?w=800",
    },
  ]);

  const filteredArtworks = artworks.filter(
    (art) =>
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.artist.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">
            Artwork Management
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Curate, price, and manage the art inventory.
          </p>
        </div>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-100 active:scale-95"
        >
          <Plus size={20} strokeWidth={3} /> Upload Artwork
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-2 rounded-2xl border border-slate-100">
        <div className="relative flex-1 max-w-md ml-2">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search artists, artwork, members..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500/10 transition-all text-sm font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1 mr-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-white shadow-sm text-blue-600" : "text-slate-500"}`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white shadow-sm text-blue-600" : "text-slate-500"}`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-500">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-[24px] overflow-hidden border border-slate-200 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="p-3 bg-white rounded-2xl text-slate-700 hover:text-blue-600 shadow-xl">
                    <Eye size={20} />
                  </button>
                  <button className="p-3 bg-white rounded-2xl text-slate-700 hover:text-red-600 shadow-xl">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-black text-slate-800 text-sm truncate">
                    {art.title}
                  </h3>
                  <span
                    className={`text-[10px] font-black px-2 py-1 rounded-lg uppercase ${art.status === "Available" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}
                  >
                    {art.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  {art.artist}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="font-black text-lg text-slate-900">
                    ${art.price}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase bg-slate-100 px-3 py-1 rounded-full">
                    {art.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in duration-500">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Artwork
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Artist
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Price
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Status
                </th>
                <th className="px-8 py-5 text-right text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredArtworks.map((art) => (
                <tr
                  key={art.id}
                  className="hover:bg-slate-50/30 transition-colors group"
                >
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={art.image}
                        className="w-12 h-12 rounded-xl object-cover"
                        alt=""
                      />
                      <span className="font-bold text-slate-800 text-sm">
                        {art.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-sm font-semibold text-slate-500">
                    {art.artist}
                  </td>
                  <td className="px-8 py-4 text-sm font-black text-slate-900">
                    ${art.price}
                  </td>
                  <td className="px-8 py-4">
                    <span
                      className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${art.status === "Available" ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-600"}`}
                    >
                      {art.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Upload Modal Component */}
      <UploadArtworkModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onComplete={(newArt) =>
          setArtworks([...artworks, { ...newArt, id: Date.now() }])
        }
      />
    </div>
  );
}

const UploadArtworkModal = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState(1);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    image: null,
    previewUrl: "",
    isAnonymous: false,
    artist: "",
    title: "",
    category: "",
    price: "",
    status: "Available",
  });

  if (!isOpen) return null;

  const steps = [
    { id: 1, label: "Upload" },
    { id: 2, label: "Artist" },
    { id: 3, label: "Details" },
    { id: 4, label: "Pricing" },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData({ ...formData, image: file, previewUrl: url });
      setStep(2); // Auto-advance
    }
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else {
      onComplete({
        ...formData,
        image: formData.previewUrl,
        artist: formData.isAnonymous ? "Anonymous" : formData.artist,
      });
      onClose();
      setStep(1);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[20px] shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {" "}
        {/* Header */}
        <div className="flex justify-between items-center px-12 py-2 border-b border-slate-50">
          {" "}
          <h2 className="text-xl font-black text-slate-800 tracking-tight">
            Upload New Artwork
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-2">
          {/* Progress Stepper */}
          <div className="flex justify-between items-center mb-12 relative px-4">
            <div className="absolute top-5 left-10 right-10 h-[2px] bg-slate-100 -z-0"></div>
            {steps.map((s) => (
              <div
                key={s.id}
                className="relative z-10 flex flex-col items-center gap-3"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-all
                  ${s.id < step ? "bg-green-500 text-white" : s.id === step ? "bg-blue-600 text-white shadow-xl shadow-blue-200" : "bg-white text-slate-300 border-2 border-slate-100"}`}
                >
                  {s.id < step ? <Check size={20} strokeWidth={3} /> : s.id}
                </div>
                <span
                  className={`text-[10px] font-black uppercase tracking-widest ${s.id === step ? "text-blue-600" : "text-slate-400"}`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="min-h-[240px] p-5 flex flex-col justify-center">
            {/* Step 1: File Input */}
            {step === 1 && (
              <div
                onClick={() => fileInputRef.current.click()}
                className="border-4 border-dashed border-slate-100 rounded-[32px] p-16 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-blue-50/30 hover:border-blue-200 transition-all cursor-pointer group"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <div className="w-20 h-20 rounded-3xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-all">
                  <Upload size={36} strokeWidth={2.5} />
                </div>
                <p className="text-xl font-black text-slate-800 mb-2">
                  Drop image here or click to upload
                </p>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-tight">
                  Supports JPG, PNG, WEBP up to 10MB
                </p>
              </div>
            )}

            {/* Step 2: Artist */}
            {step === 2 && (
              <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
                <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-2xl flex items-center justify-between">
                  <span className="font-bold text-slate-700">
                    Post Anonymously (No Artist Profile)
                  </span>
                  <button
                    onClick={() =>
                      setFormData({
                        ...formData,
                        isAnonymous: !formData.isAnonymous,
                      })
                    }
                    className={`w-14 h-7 rounded-full transition-all relative ${formData.isAnonymous ? "bg-blue-600" : "bg-slate-200"}`}
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all ${formData.isAnonymous ? "left-8" : "left-1"}`}
                    />
                  </button>
                </div>
                <div
                  className={
                    formData.isAnonymous ? "opacity-40 pointer-events-none" : ""
                  }
                >
                  <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">
                    Assign Artist
                  </label>
                  <select
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-700 focus:border-blue-600 outline-none transition-all"
                    value={formData.artist}
                    onChange={(e) =>
                      setFormData({ ...formData, artist: e.target.value })
                    }
                  >
                    <option value="">Select an artist...</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Michael Smith">Michael Smith</option>
                    <option value="Sarah Jones">Sarah Jones</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    Artwork Title
                  </label>
                  <input
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-700 focus:border-blue-600 outline-none"
                    placeholder="e.g. Desert Solitude"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    Category
                  </label>
                  <select
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-700 focus:border-blue-600 outline-none"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option value="">Select category...</option>
                    <option value="Religious">Religious</option>
                    <option value="Non-religious">Non-religious</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 4: Pricing */}
            {step === 4 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    Set Price ($)
                  </label>
                  <input
                    type="number"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-700 focus:border-blue-600 outline-none text-2xl"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-12 flex justify-end gap-4">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-8 py-4 rounded-2xl font-black text-slate-400 hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <ChevronLeft size={18} strokeWidth={3} /> Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="px-10 py-4 bg-green-600 text-white rounded-2xl font-black shadow-lg shadow-green-200 hover:bg-green-700 transition-all flex items-center gap-2 active:scale-95"
            >
              {step === 4 ? "Publish Artwork" : "Next Step"}{" "}
              <ChevronRight size={18} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
