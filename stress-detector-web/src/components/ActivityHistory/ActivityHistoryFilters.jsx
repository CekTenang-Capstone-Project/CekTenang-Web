import PropTypes from "prop-types";

const statusOptions = [
  { value: "all", label: "Semua" },
  { value: "selesai", label: "Selesai" },
  { value: "draft", label: "Draft" },
  { value: "terlambat", label: "Terlambat" },
];

const dateOptions = [
  { value: "7-day", label: "7 hari terakhir" },
  { value: "this-month", label: "Bulan ini" },
  { value: "last-month", label: "Bulan lalu" },
  { value: "3-month", label: "3 Bulan terakhir" },
  { value: "all", label: "Semua data" },
];

const sortOptions = [
  { value: "newest", label: "Terbaru" },
  { value: "oldest", label: "Terlama" },
  { value: "highest-score", label: "Skor tertinggi" },
  { value: "lowest-score", label: "Skor terendah" },
];

function ActivityHistoryFilters({
  statusFilter,
  setStatusFilter,
  dateFilter,
  setDateFilter,
  sortOption,
  setSortOption,
}) {
  return (
    <div className="space-y-4 text-sm">
      <div className="flex flex-wrap gap-2">
        {statusOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setStatusFilter(option.value)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              statusFilter === option.value
                ? "border-blue-400 bg-blue-500/10 text-blue-200"
                : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-600 hover:text-white"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <label className="block text-sm font-semibold text-zinc-300">
          Filter Waktu
          <select
            value={dateFilter}
            onChange={(event) => setDateFilter(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
          >
            {dateOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-semibold text-zinc-300">
          Urutkan
          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

ActivityHistoryFilters.propTypes = {
  statusFilter: PropTypes.string.isRequired,
  setStatusFilter: PropTypes.func.isRequired,
  dateFilter: PropTypes.string.isRequired,
  setDateFilter: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired,
  setSortOption: PropTypes.func.isRequired,
};

export default ActivityHistoryFilters;
