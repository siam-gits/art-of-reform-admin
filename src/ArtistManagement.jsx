// src/ArtistManagement.jsx
import React, { useState } from "react";
import { Search, Plus, Pencil, Trash2, X } from "lucide-react";

export default function ArtistManagement() {
  const [artists, setArtists] = useState([
    {
      id: "A-12345",
      name: "John Doe",
      state: "CA",
      facility: "San Quentin",
      window: "2025 - 2030",
      artworks: 5,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "B-98765",
      name: "Michael Smith",
      state: "TX",
      facility: "Huntsville",
      window: "2024 - 2028",
      artworks: 3,
      color: "bg-blue-50 text-blue-500",
    },
    {
      id: "C-45678",
      name: "Sarah Jones",
      state: "NY",
      facility: "Bedford Hills",
      window: "2026 - 2035",
      artworks: 8,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "D-23456",
      name: "David Wilson",
      state: "FL",
      facility: "Union CI",
      window: "2030 - Life",
      artworks: 12,
      color: "bg-blue-50 text-blue-500",
    },
    {
      id: "E-34567",
      name: "Robert Brown",
      state: "IL",
      facility: "Stateville",
      window: "2025 - 2029",
      artworks: 2,
      color: "bg-blue-100 text-blue-600",
    },
  ]);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditArtist, setCurrentEditArtist] = useState(null);

  const openEditModal = (artist) => {
    setCurrentEditArtist({ ...artist });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (!currentEditArtist) return;

    setArtists((prev) =>
      prev.map((a) =>
        a.id === currentEditArtist.id
          ? {
              ...a,
              name: currentEditArtist.name,
              state: currentEditArtist.state,
              facility: currentEditArtist.facility,
              window: `${currentEditArtist.minRelease || "N/A"} - ${
                currentEditArtist.maxRelease || "N/A"
              }`,
            }
          : a,
      ),
    );

    setIsEditModalOpen(false);
    setCurrentEditArtist(null);
  };

  const handleDelete = (id) => {
    setArtists((prev) => prev.filter((a) => a.id !== id));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const newArtist = {
      id: form.inmateId.value || `TEMP-${Date.now()}`,
      name: form.fullName.value || "New Artist",
      state: form.state.value || "N/A",
      facility: form.facility.value || "N/A",
      window: `${form.minRelease.value || "N/A"} - ${form.maxRelease.value || "N/A"}`,
      artworks: 0,
      color: "bg-indigo-100 text-indigo-600",
    };

    setArtists((prev) => [...prev, newArtist]);
    setIsCreateModalOpen(false);
    form.reset();
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">
            Artist Management
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Manage inmate profiles and their artwork portfolios.
          </p>
        </div>

        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-[#C5A880] hover:bg-[#b3956d] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-sm active:scale-95"
        >
          <Plus size={18} /> Add Artist
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <div className="relative w-72">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300"
              size={16}
            />
            <input
              type="text"
              placeholder="Search by name or ID..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-100 rounded-lg focus:outline-none text-sm"
            />
          </div>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-50">
              <th className="px-8 py-4">Artist</th>
              <th className="px-6 py-4">ID Number</th>
              <th className="px-6 py-4">Facility</th>
              <th className="px-6 py-4">Release Window</th>
              <th className="px-6 py-4 text-center">Artworks</th>
              <th className="px-6 py-4 text-right pr-8">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {artists.map((artist) => (
              <tr
                key={artist.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${artist.color}`}
                    >
                      {artist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        {artist.name}
                      </p>
                      <p className="text-[11px] font-bold text-slate-400">
                        {artist.state}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-500">
                  {artist.id}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-500">
                  {artist.facility}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-500">
                  {artist.window}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-slate-100 text-slate-600 text-[11px] font-bold px-2.5 py-1 rounded-full border border-slate-200">
                    {artist.artworks}
                  </span>
                </td>
                <td className="px-6 py-4 text-right pr-8">
                  <div className="flex justify-end gap-2 text-slate-300">
                    <button
                      onClick={() => openEditModal(artist)}
                      className="p-1.5 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(artist.id)}
                      className="p-1.5 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ─── CREATE MODAL ─── */}
      {isCreateModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsCreateModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreate(e);
              }}
            >
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-xl font-bold text-slate-800">
                  Add New Artist
                </h3>
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  <X
                    className="text-slate-500 hover:text-slate-800"
                    size={24}
                  />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    className="w-full px-4 py-3 border rounded-xl"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Inmate ID
                    </label>
                    <input
                      name="inmateId"
                      type="text"
                      className="w-full px-4 py-3 border rounded-xl"
                      placeholder="e.g. A-12345"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      State
                    </label>
                    <input
                      name="state"
                      type="text"
                      className="w-full px-4 py-3 border rounded-xl"
                      placeholder="e.g. CA"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Facility Name
                  </label>
                  <input
                    name="facility"
                    type="text"
                    className="w-full px-4 py-3 border rounded-xl"
                    placeholder="e.g. San Quentin"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Min Release Date
                    </label>
                    <input
                      name="minRelease"
                      type="text"
                      className="w-full px-4 py-3 border rounded-xl"
                      placeholder="e.g. 2025"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Max Release Date
                    </label>
                    <input
                      name="maxRelease"
                      type="text"
                      className="w-full px-4 py-3 border rounded-xl"
                      placeholder="e.g. 2030"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 border-t flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-6 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#C5A880] text-white rounded-xl hover:brightness-90"
                >
                  Create Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── EDIT MODAL ─── */}
      {isEditModalOpen && currentEditArtist && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsEditModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-slate-800">
                Edit Artist Profile
              </h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-slate-500 hover:text-slate-800 p-1 rounded-full hover:bg-slate-100"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={currentEditArtist.name}
                  onChange={(e) =>
                    setCurrentEditArtist({
                      ...currentEditArtist,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Inmate ID
                  </label>
                  <input
                    type="text"
                    value={currentEditArtist.id}
                    disabled
                    className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    State
                  </label>
                  <input
                    type="text"
                    value={currentEditArtist.state}
                    onChange={(e) =>
                      setCurrentEditArtist({
                        ...currentEditArtist,
                        state: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Facility Name
                </label>
                <input
                  type="text"
                  value={currentEditArtist.facility}
                  onChange={(e) =>
                    setCurrentEditArtist({
                      ...currentEditArtist,
                      facility: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Min Release Date
                  </label>
                  <input
                    type="text"
                    value={currentEditArtist.window.split(" - ")[0] || ""}
                    onChange={(e) =>
                      setCurrentEditArtist({
                        ...currentEditArtist,
                        window: `${e.target.value} - ${currentEditArtist.window.split(" - ")[1] || "N/A"}`,
                      })
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Max Release Date
                  </label>
                  <input
                    type="text"
                    value={currentEditArtist.window.split(" - ")[1] || ""}
                    onChange={(e) =>
                      setCurrentEditArtist({
                        ...currentEditArtist,
                        window: `${currentEditArtist.window.split(" - ")[0] || "N/A"} - ${e.target.value}`,
                      })
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t flex justify-end gap-3">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-6 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
